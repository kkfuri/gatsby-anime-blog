import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"

function Layout({ children, ...props }) {
  return (
    <div className="container px-4 mx-auto my-12 full-w">
      <StaticQuery
        query={query}
        render={data => (
          <Header
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
            {...props}
          />
        )}
      />
      {children}
    </div>
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
