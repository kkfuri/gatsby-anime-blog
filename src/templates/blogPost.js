import React from "react"
import dayjs from "dayjs"

import Layout from "../components/layout"

function Template({ data }) {
  const { html, frontmatter } = data.markdownRemark
  const { title, date, image } = frontmatter
  return (
    <Layout minimalist title={title}>
      <div className="my-20 max-w-4xl mx-auto">
        <div className="flex flex-col mb-8 justify-between">
          <div className="relative rounded overflow-hidden">
            <img
              className="object-cover w-full h-64 md:h-auto"
              src={image}
              alt={`Imagem do post ${title}`}
            />
            <h5 className="text-xl lowercase font-body font-light text-gray-100 bg-black bg-opacity-50 absolute p-2 top-0 right-0">
              {dayjs(date).format("DD MMMM YYYY")}
            </h5>
            <h1 className="text-5xl font-normal font-display rounded-sm text-gray-100 bg-black bg-opacity-50 absolute p-2 bottom-0">
              {title}
            </h1>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`

export default Template
