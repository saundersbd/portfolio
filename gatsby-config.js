const md5File = require("md5-file")
const fontFileHash = md5File.sync("./static/fonts/fonts.css")

module.exports = {
  siteMetadata: {
    authorName: "Brian Saunders",
    title: "Brian Saunders",
    description: "This is my person site.",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-widows` },
          { resolve: `gatsby-remark-images` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/work/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["IBM Plex Sans", "IBM Plex Serif"],
          urls: [`/fonts/fonts.css?v=${fontFileHash}`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-149521660-1"],

        pluginConfig: {
          head: false,
        },
      },
    },
  ],
}
