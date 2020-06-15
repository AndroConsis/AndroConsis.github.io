module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"PrateekRathore","short_name":"PrateekRathore","start_url":"/","background_color":"#020c1b","theme_color":"#0a192f","display":"minimal-ui","icon":"src/images/logo.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"5a5919399dd9a82152bc8211251cdcb8"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":700,"linkImagesToOriginal":true,"quality":90,"tracedSVG":{"color":"#64ffda"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-45666519-2"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
