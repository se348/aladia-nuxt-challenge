import { defineConfig } from "cypress";
// import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // addMatchImageSnapshotPlugin(on, config);
    
      
    },
  },
});
