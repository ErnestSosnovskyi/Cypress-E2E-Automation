const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wkqnob",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://telnyx.com',    
  },
});
