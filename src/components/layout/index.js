import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../footer"
import Header from "../header"
import SEO from "../seo"
import ListFeaturedItem from "../listFeaturedItem"

const shortcodes = { ListFeaturedItem }

function Layout({ children, minimalist, ...props }) {
  return (
    <MDXProvider components={shortcodes}>
      <div className="container flex flex-col min-h-screen px-4 mx-auto mt-12">
        <SEO {...props} />
        <StaticQuery
          query={query}
          render={data => (
            <Header
              title={data.site.siteMetadata.title}
              description={data.site.siteMetadata.description}
              minimalist={minimalist}
            />
          )}
        />
        {children}
      </div>
      <Footer />
    </MDXProvider>
  )
}

const query = graphql`
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
