const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth : 1500,
    viewportHeight : 800
    
  },

  env: {
    // 'host' : 'https://xena.aks-staging.kter.io/',
    'host' : 'https://xena.aks-dev.kter.io/',
    'api_server' : 'https://callisto.aks-dev.kter.io/',
    'testUserEmail' : 'kterioadmin@kterio.com',
    'testUserPass' : 'Temp1234!'
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
