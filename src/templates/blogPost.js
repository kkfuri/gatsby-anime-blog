import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import NavigatePost from "../components/navigatePost"
import Tag from "../components/tag"

function Template({ data, pageContext }) {
  const { title, tags, publishDate, body, heroImage } = data.contentfulBlogPost
  return (
    <Layout minimalist title={title}>
      <div className="mt-20 max-w-4xl mx-auto w-full">
        <div className="flex flex-col mb-8 justify-between">
          <h1 className="text-4xl lg:text-5xl font-normal font-display text-center">
            {title}
          </h1>
          <div className="flex justify-between items-center flex-wrap">
            <div className="inline space-x-4">
              {tags?.map(tag => (
                <Tag tag={tag} />
              ))}
            </div>
            <h5 className="text-xs uppercase tracking-widest font-body">
              {dayjs(publishDate).format("DD . MMMM . YYYY")}
            </h5>
          </div>
          <Img
            fadeIn
            fluid={heroImage?.fluid}
            className="object-cover rounded w-full h-64 md:h-auto mt-12"
            alt={`Imagem do post ${title}`}
          />
        </div>
        <div
          className="body-markdown"
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
      <hr className="my-20 h-2 w-full max-w-xl mx-auto" />
      <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 justify-between w-full mx-auto mb-20">
        <div>
          {pageContext.prev && (
            <NavigatePost
              prev
              {...pageContext.prev}
              image={pageContext.prev?.heroImage?.fluid}
            />
          )}
        </div>
        <div>
          {pageContext.next && (
            <NavigatePost
              next
              {...pageContext.next}
              image={pageContext.next?.heroImage?.fluid}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    contentfulBlogPost(slug: { eq: $pathSlug }) {
      title
      tags
      publishDate
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`

export default Template
