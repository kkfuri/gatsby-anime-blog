import React from "react"

import Layout from "../components/layout"
import Post, { PostProps } from "../components/post/"
import { FluidObject } from "gatsby-image"

interface Edge extends PostProps {
  id: number | string
  heroImage: { fluid: FluidObject }
}

interface TemplateProps {
  pageContext: {
    posts: Edge[]
    tagName: string
  }
}

function TagTemplate({ pageContext }: TemplateProps) {
  const { posts, tagName } = pageContext
  return (
    <Layout minimalist title={`Tag: ${tagName}`}>
      <div className="grid grid-cols-1 gap-4 my-20 md:gap-8 md:grid-cols-6">
        {posts?.map(post => {
          return (
            <div
              className="col-span-1 md:col-span-3 xl:col-span-2"
              key={post.id}
            >
              <Post {...post} image={post.heroImage.fluid} showImg />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagTemplate
