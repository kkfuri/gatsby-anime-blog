import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../footer"
import Header from "../header"
import SEO from "../seo"
import ListFeaturedItem from "../listFeaturedItem"

const shortcodes = { ListFeaturedItem }

interface LayoutProps {
  children: React.ReactNode
  minimalist?: boolean
  title?: string
}

function Layout({ children, minimalist, title, ...props }: LayoutProps) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  return (
    <MDXProvider components={shortcodes}>
      <SEO title={title} {...props} />
      <Header
        title={siteMetadata.title}
        pageTitle={title}
        description={!title && siteMetadata.description}
        minimalist={minimalist}
      />
      <div className="container flex flex-col min-h-screen px-4 mx-auto">
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
