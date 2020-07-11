import React from "react"
import classnames from "classnames"
import { FaSadCry } from "react-icons/fa"
import { graphql } from "gatsby"

import Layout from "../components/layout/"
import Post from "../components/post/"

function Home({ data }) {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 my-20 xl:gap-8 xl:grid-cols-6">
        {posts?.map((edge, index) => {
          const featuredPost = index % 9 === 0
          return (
            <div
              className={classnames({
                "mb-8 xl:grid xl:col-span-4 xl:grid-rows-1 xl:row-span-2 xl:mb-0": featuredPost,
                "xl:col-span-2": index % 9 !== 0,
              })}
              key={edge.node?.id}
            >
              <Post
                featured={featuredPost}
                image={edge.node?.heroImage?.fluid}
                {...edge.node}
                showImg={[1, 2].includes(index % 9) || featuredPost}
              />
            </div>
          )
        })}
        {posts?.length === 0 && (
          <h1 className="col-span-6 text-6xl inline text-center font-display font-light">
            Sem posts por enquanto <FaSadCry className="inline text-blue-500" />
          </h1>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
      edges {
        node {
          id
          title
          slug
          tags
          publishDate
          description {
            description
          }
          heroImage {
            file {
              url
            }
            fluid(maxWidth: 1280) {
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
    }
  }
`

export default Home
