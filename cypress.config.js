const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tuk9xa',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do banco bug bank',
      reportPageTitle: 'Projeto do banco bug bank'
    },
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://bugbank.netlify.app/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
