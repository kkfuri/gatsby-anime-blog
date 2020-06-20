import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/"
import Post from "../components/post/"

function Home({ data }) {
  console.log(data)
  const [firstEdge, ...rest] = data.allMarkdownRemark.edges

  console.log(firstEdge)
  console.log(rest)
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 my-20 xl:gap-8 xl:grid-cols-6">
        <div className="mb-8 xl:grid xl:col-span-4 xl:grid-rows-1 xl:row-span-2 xl:mb-0">
          <Post
            featured
            showImg
            key={firstEdge.node.id}
            {...firstEdge.node.frontmatter}
          />
        </div>
        {rest.map((edge, index) => {
          const { id, frontmatter } = edge.node
          return (
            <div className="col-span-1 xl:col-span-2">
              <Post
                key={id}
                {...frontmatter}
                showImg={[0, 1].includes(index)}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            tags
            excerpt
            image
          }
        }
      }
    }
  }
`

export default Home
