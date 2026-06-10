const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xhguy7',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
