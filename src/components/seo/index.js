import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

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
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title || "Blog"}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: "description",
                content: metaDescription,
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
            <meta
              property="og:site_name"
              content={data.site.siteMetadata.title}
            />
            <meta
              property="og:title"
              content={title || data.site.siteMetadata.title}
            />
            <meta property="og:type" content={type || `website`} />
            <meta
              property="og:url"
              content={`${data.site.siteMetadata.siteUrl}/${slug || ""}`}
            />
            <meta property="og:image" content={image || ""} />
            <meta property="og:description" content={metaDescription} />

            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:creator"
              content={data.site.siteMetadata.author}
            />
            <meta
              name="twitter:title"
              content={title || data.site.siteMetadata.title}
            />
            <meta name="twitter:image" content={image || ""} />
            <meta name="twitter:description" content={metaDescription} />

            <meta
              property="article:author"
              content={data.site.siteMetadata.author}
            />
            <meta property="article:section" content="Anime" />
            <meta property="article:tag" content={keywords.join(", ")} />
            <meta property="article:published_time" content={publishDate} />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO
