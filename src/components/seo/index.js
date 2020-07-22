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
              {
                name: "og:image",
                content: `${image}` || "",
              },
              {
                name: "og:url",
                content: `${data.site.siteMetadata.siteUrl}/${slug || ""}`,
              },
              {
                name: "og:title",
                content: title || data.site.siteMetadata.title,
              },
              {
                name: "og:description",
                content: metaDescription,
              },
              {
                name: "og:site_name",
                content: data.site.siteMetadata.siteUrl,
              },
              {
                name: "og:type",
                content: type || "website",
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author,
              },
              {
                name: "twitter:title",
                content: title || data.site.siteMetadata.title,
              },
              {
                name: "twitter:description",
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
          />
        )
      }}
    />
  )
}

export default SEO
