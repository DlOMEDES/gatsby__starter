module.exports = {
  siteMetadata: {
    title: "Gatsby Starter!",
    author: "Diomedes Lajara",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
