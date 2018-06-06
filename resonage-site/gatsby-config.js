module.exports = {
  siteMetadata: {
    title: 'Resonage Official HP',
  },
  plugins: [
    // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
        * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
        * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
        */
        // baseUrl: `dev-gatbsyjswp.pantheonsite.io`,
        
        // The protocol. This can be http or https.
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        baseUrl: `resonage.wordpress.com`,
        hostingWPCOM: true,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret:
            "3RmnlJJauUOcgxnbulXv44dA4Ljns456IvLuTLTGLGGP7GNJ8ezqZDJFqzhwbiiX",
          wpcom_app_clientId: "58453",
          wpcom_user: "yuichkun@gmail.com",
          wpcom_pass: "ryosuketanaka",
        },
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com
        useACF: false,
      },
    },
  ],
}