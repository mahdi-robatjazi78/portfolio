import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfigManifest = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable-icon.png"],

  manifest: {
    name: "Mahdi Robatjazi Portfolio",
    short_name: "Mrj Portfolio",
    description: "My Portfolio Maded With React Vite and Pwa",
    icons: [
      {
        src: "./pwa_icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "./pwa_icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "image/png",
      },

      {
        src: "./pwa_icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },

      {
        src: "./pwa_icons/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "./pwa_icons/icon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "icon",
      },

      {
        src: "./pwa_icons/maskable-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],


    theme_color:"#181818",
    background_color:"#e8eac2",
    display:"standalone",
    scope:"/",
    start_url:"/",
    orientation:"portrait",

  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfigManifest)],
});
