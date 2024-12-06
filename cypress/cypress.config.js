const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  pageLoadTimeout:90000,
  e2e: {
    projectId: "upgg5u",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureCypress(on, config);
      return config;
      // implement node event listeners here
    },
  },
});