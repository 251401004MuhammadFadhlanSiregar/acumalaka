import { StrictMode } from 'react' // line 1 : Mengimpor komponen StrictMode dari React untuk membantu mendeteksi bug dan potensi masalah render
import { createRoot } from 'react-dom/client' // line 2 : Mengimpor fungsi createRoot dari ReactDOM Client untuk inisialisasi rendering React 18/19
import './index.css' // line 3 : Mengimpor file styling global dan utilitas Tailwind CSS
import App from './App.jsx' // line 4 : Mengimpor komponen induk aplikasi utama (App)
// line 5 : Baris kosong pemisah antara blok impor dan logika render
createRoot(document.getElementById('root')).render( // line 6 : Menemukan elemen HTML dengan ID 'root' dan membuat root React di dalamnya lalu merender
  <StrictMode> {/* line 7 : Mengaktifkan pemeriksaan tambahan dan peringatan selama tahap development */}
    <App /> {/* line 8 : Meletakkan dan menjalankan komponen utama aplikasi App */}
  </StrictMode>, // line 9 : Penutup komponen StrictMode
) // line 10 : Penutup pemanggilan fungsi render
