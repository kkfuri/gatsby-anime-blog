import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Footer from "../footer"
import Header from "../header"
import SEO from "../seo"
import ListFeaturedItem from "../listFeaturedItem"
import { ThemeProvider } from "../../context/color-mode"

const shortcodes = { ListFeaturedItem }

interface LayoutProps {
  children: React.ReactNode
  minimalist?: boolean
  title?: string
}

function Layout<T extends LayoutProps>({
  children,
  minimalist,
  title,
  ...props
}: T) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  return (
    <ThemeProvider>
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
    </ThemeProvider>
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
