module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
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
          families: ["IBM Plex"],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
  ],
}
