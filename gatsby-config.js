require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "animes by fred",
    description: "...",
    author: "Fred Zampier",
    siteUrl: "https://animes-by-fred.now.sh",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 95,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Animes by fred`,
        short_name: `Fred's blog`,
        description: `Here I mainly talk about animes`,
        lang: `pt-br`,
        display: `standalone`,
        icon: `static/favicon.png`,
        start_url: `/`,
        background_color: `#f7fafc`,
        theme_color: `#038cfc`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: { families: ["Alfa Slab One", "Open Sans:300,400,700"] },
      },
    },
  ],
}
