import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https: true,
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
  // build: {
  //   outDir: 'dist', // 빌드된 파일이 생성될 디렉토리
  //   assetsDir: '.', // 자산 파일의 기본 디렉토리
  //   sourcemap: true, // 소스 맵 생성 여부

  //   rollupOptions: {
  //     input: {
  //       main: './index.html', // 진입점 HTML 파일 경로
  //     },
  //     output: {
  //       entryFileNames: '[name].js', // 출력 파일 이름 패턴
  //       chunkFileNames: 'chunks/[name].[hash].js', // 청크 파일 이름 패턴
  //       assetFileNames: 'assets/[name].[ext]', // 자산 파일 이름 패턴
  //     },
  //   },
  // },
})
