const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          pathSlug: edge.node.frontmatter.slug,
        },
      })
    })
  })
}
