import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

interface SEOProps {
  description?: string
  slug?: string
  image?: string
  lang?: string
  meta?: []
  keywords?: []
  title?: string
  type?: string
  publishDate?: string
}

const SEO = ({
  description,
  slug,
  image,
  lang = "pt-br",
  meta = [],
  keywords = [],
  title,
  type,
  publishDate,
}: SEOProps) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || "Blog"}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "image",
          content: image || "",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    >
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:type" content={type || `website`} />
      <meta
        property="og:url"
        content={`${site.siteMetadata.siteUrl}/${slug || ""}`}
      />
      <meta property="og:image" content={image || ""} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:site" content={site.siteMetadata.twitterAuthor} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.twitterAuthor} />

      <meta property="article:author" content={site.siteMetadata.author} />
      <meta property="article:section" content="Anime" />
      <meta property="article:tag" content={keywords.join(", ")} />
      <meta property="article:published_time" content={publishDate} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        twitterAuthor
        siteUrl
      }
    }
  }
`
export default SEO
