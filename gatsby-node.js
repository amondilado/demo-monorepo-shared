// https://v4.gatsbyjs.com/docs/reference/config-files/gatsby-node/
// https://www.gatsbyjs.com/docs/reference/config-files/actions/#setWebpackConfig
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#webpack-upgraded-from-version-4-to-version-5
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
      },
    },
  })
}
