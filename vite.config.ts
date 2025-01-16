import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    react(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'antd',
    //       style: (name) => `antd/es/${name}/style`,
    //     },
    //   ],
    // }),
  ],
  css: {
    // preprocessorOptions: {
    //   less: {
    //     javascriptEnabled: true,
    //     modifyVars: {
    //       // '@primary-color': '#1DA57A', // Измените на нужный цвет
    //     },
    //   }
    // }
  }
});
