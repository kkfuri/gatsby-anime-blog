import React from "react"
import classnames from "classnames"
import { FaSadCry } from "react-icons/fa"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../components/layout"
import Post, { PostProps } from "../components/post"

interface Edge extends PostProps {
  id: number
  heroImage: { fluid: FluidObject }
}

interface HomeProps {
  data: { allContentfulBlogPost: { edges: { node: Edge }[] } }
}

function Home({ data }: HomeProps) {
  const posts = data?.allContentfulBlogPost?.edges
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 my-20 xl:gap-8 xl:grid-cols-3">
        {posts?.map((edge, index: number) => {
          const featuredPost = index % 9 === 0
          return (
            <div
              className={classnames({
                "mb-8 xl:grid xl:col-span-2 xl:grid-rows-1 xl:row-span-2 xl:mb-0": featuredPost,
                "xl:col-span-1": index % 9 !== 0,
              })}
              key={edge.node.id}
            >
              <Post
                {...edge.node}
                featured={featuredPost}
                image={edge.node.heroImage?.fluid}
                showImg={[1, 2].includes(index % 9) || featuredPost}
              />
            </div>
          )
        })}
        {posts?.length === 0 && (
          <h1 className="inline col-span-6 text-6xl font-light text-center font-display">
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
