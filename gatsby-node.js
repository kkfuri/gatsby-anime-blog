const path = require("path")

function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaeeeeiiiioooouuuunc------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

  return str
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.tsx")
  const singleTagTemplate = path.resolve("src/templates/tagPage.tsx")

  return graphql(`
    query {
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
            body {
              body
            }
            heroImage {
              file {
                url
              }
              fluid(maxWidth: 1280) {
                base64
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allContentfulBlogPost.edges
    const postsByTag = {}
    posts.forEach(({ node }, index) => {
      if (node.tags) {
        node.tags.forEach(tag => {
          const lowerTag = tag.toLowerCase()
          if (!postsByTag[lowerTag]) {
            postsByTag[lowerTag] = []
          }
          postsByTag[lowerTag].push(node)
        })
      }
      createPage({
        path: `${node.slug}`,
        component: blogPostTemplate,
        context: {
          posts,
          pathSlug: node.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
    const tags = Object.keys(postsByTag)

    tags.forEach(tagName => {
      const lowerTag = tagName.toLowerCase()
      const slug = stringToSlug(lowerTag)
      const postsForEachTag = postsByTag[lowerTag]

      createPage({
        path: `/tag/${slug}`,
        component: singleTagTemplate,
        context: {
          posts: postsForEachTag,
          tagName,
        },
      })
    })
  })
}
