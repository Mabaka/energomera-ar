import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import fs from 'fs'
import mkcert from 'vite-plugin-mkcert'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),mkcert()],
  resolve:{
    alias:{
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server:{
    host:true,
    port:8080,
    https:{
      key:fs.readFileSync('/home/kozlovns/prj/test/key.pem'),
      cert:fs.readFileSync('/home/kozlovns/prj/test/cert.crt'),
      ca:[
      fs.readFileSync('/home/kozlovns/prj/test/inter.crt'),
      fs.readFileSync('/home/kozlovns/prj/test/kknss.csr'),
      fs.readFileSync('/home/kozlovns/prj/test/root.crt')
      ]
      }
  }
})
