import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../footer"
import Header from "../header"
import SEO from "../seo"
import ListFeaturedItem from "../listFeaturedItem"

const shortcodes = { ListFeaturedItem }

function Layout({ children, minimalist, title, ...props }) {
  return (
    <MDXProvider components={shortcodes}>
      <SEO title={title} {...props} />
      <StaticQuery
        query={query}
        render={data => (
          <Header
            title={data.site.siteMetadata.title}
            pageTitle={title}
            description={title ? "" : data.site.siteMetadata.description}
            minimalist={minimalist}
          />
        )}
      />
      <div className="container flex flex-col min-h-screen px-4 mx-auto">
        {children}
      </div>
      <Footer />
    </MDXProvider>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Layout
