const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    env: {
      allure: true, // Enable Allure reporting
      allureReuseAfterSpec: true, // Reuse test results for better performance
    },
  },
});