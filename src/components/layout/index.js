import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Footer from "../footer"
import Header from "../header"
import SEO from "../seo"

function Layout({ children, minimalist, ...props }) {
  return (
    <>
      <div className="container px-4 mx-auto mt-12 min-h-screen">
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
    </>
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
