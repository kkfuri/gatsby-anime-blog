import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import NavigatePost from "../components/navigatePost"
import Tag from "../components/tag"

function Template({ data, pageContext }) {
  const { html, frontmatter, image } = data.markdownRemark
  const { title, date, tags } = frontmatter
  return (
    <Layout minimalist title={title}>
      <div className="my-20 max-w-4xl mx-auto">
        <div className="flex flex-col mb-8 justify-between">
          <h1 className="text-4xl lg:text-5xl font-normal font-display text-center">
            {title}
          </h1>
          <div className="flex justify-between items-center">
            <div className="inline space-x-4">
              {tags?.map(tag => (
                <Tag tag={tag} />
              ))}
            </div>
            <h5 className="text-xs uppercase tracking-widest font-body">
              {dayjs(date).format("DD . MMMM . YYYY")}
            </h5>
          </div>
          <Img
            fadeIn
            fluid={image?.childImageSharp?.fluid}
            className="object-cover rounded w-full h-64 md:h-auto mt-12"
            alt={`Imagem do post ${title}`}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <hr className="my-20 h-2 w-full max-w-xl mx-auto" />
      <div className="flex justify-between w-full mx-auto mb-20">
        <div>
          {pageContext.prev && (
            <NavigatePost
              prev
              {...pageContext.prev.frontmatter}
              image={pageContext.prev.image.childImageSharp?.fluid}
            />
          )}
        </div>
        <div>
          {pageContext.next && (
            <NavigatePost
              next
              {...pageContext.next.frontmatter}
              image={pageContext.next.image.childImageSharp?.fluid}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $pathSlug } }) {
      html
      image {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`

export default Template
