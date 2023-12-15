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
      key:fs.readFileSync('/etc/ssl/private/kknss-key.pem'),
      cert:fs.readFileSync('/etc/ssl/certs/kknss-cert.crt'),
      ca:[
          fs.readFileSync('/etc/ssl/mdl/kknss-mdl.crt'),
          fs.readFileSync('/etc/ssl/req/kknss-req.csr'),
          fs.readFileSync('/etc/ssl/root/kknss-root.crt')
      ]
  }
  }
})
