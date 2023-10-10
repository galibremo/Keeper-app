import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { //add this property
      sourcemap: true,},
  base:"/Keeper-app/"    
})