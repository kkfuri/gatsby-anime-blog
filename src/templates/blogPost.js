import React from "react"
import dayjs from "dayjs"

import Layout from "../components/layout"
import NavigatePost from "../components/navigatePost"
import Tag from "../components/tag"

function Template({ data, pageContext }) {
  console.log(pageContext)
  const { html, frontmatter } = data.markdownRemark
  const { title, date, image, tags } = frontmatter
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
                <Tag>[{tag}]</Tag>
              ))}
            </div>
            <h5 className="text-xs uppercase tracking-widest font-body">
              {dayjs(date).format("DD . MMMM . YYYY")}
            </h5>
          </div>
          <img
            className="object-cover rounded w-full h-64 md:h-auto mt-12"
            src={image}
            alt={`Imagem do post ${title}`}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <hr className="my-20 max-w-xl mx-auto" />
      <div className="flex justify-between w-full mx-auto mb-20">
        <div>
          {pageContext.prev && (
            <NavigatePost prev {...pageContext.prev.frontmatter} />
          )}
        </div>
        <div>
          {pageContext.next && (
            <NavigatePost next {...pageContext.next.frontmatter} />
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
      frontmatter {
        title
        date
        image
        tags
      }
    }
  }
`

export default Template
