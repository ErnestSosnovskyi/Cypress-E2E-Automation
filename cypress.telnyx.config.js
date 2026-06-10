const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wkqnob",
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
  },
});
