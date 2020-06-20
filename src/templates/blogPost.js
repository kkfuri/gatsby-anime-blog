import React from "react"
import Layout from "../components/layout"
import dayjs from "dayjs"

function Template({ data }) {
  const { html, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter
  return (
    <Layout minimalist>
      <div className="my-20 max-w-2xl mx-auto">
        <div className="flex flex-col mb-8 md:flex-row items-center justify-between">
          <h1 className="text-4xl font-normal font-display text-primary">
            {title}
          </h1>
          <h5 className="text-2xl font-body lowercase font-light text-gray-600">
            {dayjs(date).format("DD.MMMM.YYYY")}
          </h5>
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
      }
    }
  }
`

export default Template
