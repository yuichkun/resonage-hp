// const path = require("path");

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     const newsPostTemplate = path.resolve(`src/templates/newsTemplate.js`);
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(
//               sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               date
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `
//       ).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//           path:  node.frontmatter.path,
//           component: newsPostTemplate,
//           context: {
//               path: node.frontmatter.path
//           }
//       });
//     });
//   });
// };