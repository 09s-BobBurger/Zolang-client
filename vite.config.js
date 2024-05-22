import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https: true,
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    react(),
    // mkcert({
    //   // mkcert 플러그인을 사용하여 로컬 SSL 인증서를 자동으로 생성할 수 있습니다.
    //   // 이 설정은 개발 환경에서만 필요합니다.
    //   autoInstall: true
    // })
  ],
})
