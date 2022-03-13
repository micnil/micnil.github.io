module.exports = {
  siteMetadata: {
    title: `Michael Nilsson`,
    description: `Portfolio for software developer Michael Nilsson.`,
    author: `Michael Nilsson`,
    address: `Eklandagatan 45B, 412 61 Göteborg`,
    phone: `+46 704 25 3993`,
    url: `https://nilsson.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-copy-linked-files"
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nilsson.dev`,
        short_name: `nilsson`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/nilsson-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60141937-3",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
  ],
}
