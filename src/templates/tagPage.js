import React from "react"

import Layout from "../components/layout"
import Post from "../components/post/"

function TagTemplate({ pageContext }) {
  const { posts, tagName } = pageContext
  return (
    <Layout minimalist title={tagName}>
      <div className="grid grid-cols-1 gap-4 my-20 md:gap-8 md:grid-cols-6">
        {posts?.map(({ image, frontmatter }) => {
          return (
            <div
              className="col-span-1 md:col-span-3 xl:col-span-2"
              key={frontmatter.slug}
            >
              <Post
                image={image.childImageSharp.fluid}
                {...frontmatter}
                showImg
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagTemplate
