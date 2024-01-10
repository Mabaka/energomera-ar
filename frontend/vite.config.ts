import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import fs from 'fs'
import dotenv from "dotenv";

dotenv.config({path: ".env"});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server:{
    host:true,
    port:8080,
    https: {
      key: fs.readFileSync(process.env.KEY),
      cert: fs.readFileSync(process.env.CERT),
      ca: [
        fs.readFileSync(process.env.MDL),
        fs.readFileSync(process.env.REQ),
        fs.readFileSync(process.env.ROOT)
      ]
    }  
  }
})
