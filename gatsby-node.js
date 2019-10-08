const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: "slug",
//       node,
//       value: `/work${value}`,
//     })
//   }
// }

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    const value = createFilePath({ node, getNode })

    if (parent.internal.type === "File") {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }

    createNodeField({
      name: "slug",
      node,
      value: `/${parent.sourceInstanceName}${value}`,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const work = result.data.allMdx.edges

  work.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/WorkLayout.js`),
      context: { id: node.id },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
