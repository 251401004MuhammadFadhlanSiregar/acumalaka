import react from "@vitejs/plugin-react"; // line 1 : Mengimpor plugin resmi Vite untuk React (Fast Refresh & transformasi JSX)
import { defineConfig } from "vite"; // line 2 : Mengimpor fungsi pembantu defineConfig dari Vite untuk auto-completion dan type safety
import tailwindcss from "@tailwindcss/vite"; // line 3 : Mengimpor plugin resmi Tailwind CSS v4 untuk integrasi langsung dengan Vite
// line 4 : Baris kosong sebagai pemisah antara daftar impor dan objek konfigurasi
// https://vite.dev/config/ // line 5 : URL dokumentasi resmi Vite untuk referensi opsi konfigurasi lebih lanjut
export default defineConfig({ // line 6 : Mengekspor konfigurasi utama Vite ke sistem build
  plugins: [react(), tailwindcss()], // line 7 : Mendaftarkan plugin React dan Tailwind CSS agar aktif saat pengembangan dan build
}); // line 8 : Menutup objek pemanggilan fungsi defineConfig
