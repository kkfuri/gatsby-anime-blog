module.exports = {
  siteMetadata: {
    title: "anime por fredinho",
    description: "aqui falo sobre tudo que tem de pior",
    author: "Fred Zampier",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "pages", path: `${__dirname}/src/content` },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: { families: ["Alfa Slab One", "Open Sans:300,400,700"] },
      },
    },
  ],
}
