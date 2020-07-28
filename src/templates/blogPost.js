import React from "react"
import dayjs from "dayjs"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ShareButtons from "../components/share-buttons"
import Layout from "../components/layout"
import NavigatePost from "../components/navigatePost"
import Tag from "../components/tag"

function Template({ data, pageContext }) {
  const {
    title,
    tags,
    publishDate,
    body,
    slug,
    heroImage,
    description,
  } = data.contentfulBlogPost
  return (
    <Layout
      minimalist
      title={title}
      description={description.description}
      image={heroImage.fluid.src}
      slug={slug}
      type="article"
      keywords={tags}
      publishDate={publishDate}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col-reverse flex-wrap items-center justify-between mb-3 md:flex-row">
            <div className="flex flex-wrap">
              {tags?.map(tag => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
            <h5 className="mx-auto text-xs tracking-widest uppercase md:mx-0 font-body">
              {dayjs(publishDate).format("DD . MMMM . YYYY")}
            </h5>
          </div>
          <ShareButtons
            link={data.site.siteMetadata.siteUrl.concat("/", slug)}
          />
          <Img
            fadeIn
            fluid={heroImage?.fluid}
            className="object-cover w-full h-64 my-4 rounded md:mb-8 md:h-auto"
            alt={`Imagem do post ${title}`}
          />
        </div>
        <article className="mx-auto prose prose-md max-w-none md:px-8">
          <MDXRenderer>{body.childMdx.body}</MDXRenderer>
        </article>
        <div className="mt-4">
          <ShareButtons
            link={data.site.siteMetadata.siteUrl.concat("/", slug)}
          />
        </div>
      </div>
      <hr className="w-full h-2 max-w-xl mx-auto my-20" />
      <div className="flex flex-col items-center justify-between w-full mx-auto mb-20 space-y-20 md:flex-row md:space-y-0">
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $pathSlug }) {
      title
      tags
      publishDate
      slug
      description {
        description
      }
      body {
        body
        childMdx {
          body
        }
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
