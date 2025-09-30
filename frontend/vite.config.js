import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devlaunch-landing/",
  server: {
    port: 3030,
    strictPort: true,
  },
});
