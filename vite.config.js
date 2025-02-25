// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        About: resolve(__dirname, "About.html"), // Additional HTML pages
        Contact: resolve(__dirname, "Contact.html"),
        product: resolve(__dirname, "product.html"),
        bucket: resolve(__dirname, "bucket.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});
