import { useEffect } from "react"; // line 1 : Mengimpor hook useEffect dari React untuk menangani efek samping (side effects) seperti inisialisasi observer
import "./App.css"; // line 2 : Mengimpor stylesheet utama aplikasi yang memuat layout dasar dan animasi data-reveal
import Navbar from "./components/Navbar"; // line 3 : Mengimpor komponen navigasi atas (Navbar)
import Hero from "./components/Hero"; // line 4 : Mengimpor komponen banner utama pembuka (Hero)
import About from "./components/About"; // line 5 : Mengimpor komponen cerita dan profil kedai kopi (About)
import Menu from "./components/Menu"; // line 6 : Mengimpor komponen daftar katalog menu dan filter kategori (Menu)
import Promo from "./components/Promo"; // line 7 : Mengimpor komponen penawaran diskon dan modal detail (Promo)
import Contact from "./components/Contact"; // line 8 : Mengimpor komponen formulir kontak dan validasi input (Contact)
import Footer from "./components/Footer"; // line 9 : Mengimpor komponen catatan kaki website (Footer)
// line 10 : Baris kosong sebagai pemisah visual
export default function App() { // line 11 : Mendefinisikan dan mengekspor fungsi komponen induk utama App
  useEffect(() => { // line 12 : Menjalankan efek samping saat komponen pertama kali di-mount ke DOM browser
    const root = document.getElementById("root"); // line 13 : Mengambil elemen DOM root sebagai wadah observasi animasi kemunculan elemen
    if (!root) return undefined; // line 14 : Jika elemen root tidak ditemukan, hentikan proses untuk mencegah runtime error
// line 15 : Baris kosong pemisah
    if (!("IntersectionObserver" in window)) { // line 16 : Memeriksa apakah browser mendukung API IntersectionObserver
      root.querySelectorAll("[data-reveal]").forEach((target) => { // line 17 : Mencari semua elemen beratribut data-reveal sebagai fallback browser lama
        target.classList.add("is-visible"); // line 18 : Langsung menambahkan class 'is-visible' agar konten tetap terlihat jika observer tidak didukung
      }); // line 19 : Penutup perulangan forEach fallback
      return undefined; // line 20 : Mengakhiri eksekusi efek lebih awal karena fallback sudah selesai diterapkan
    } // line 21 : Penutup blok pengecekan dukungan IntersectionObserver
// line 22 : Baris kosong pemisah
    const targets = new WeakSet(); // line 23 : Membuat koleksi WeakSet untuk mencatat elemen yang telah diobservasi guna mencegah duplikasi
    const revealObserver = new IntersectionObserver( // line 24 : Membuat instance baru IntersectionObserver untuk mendeteksi elemen yang masuk ke layar
      (entries, observer) => { // line 25 : Callback yang dieksekusi saat status visibilitas elemen yang diobservasi berubah
        entries.forEach((entry) => { // line 26 : Mengiterasi setiap entri elemen yang diobservasi
          if (entry.isIntersecting) { // line 27 : Memeriksa apakah elemen sudah memasuki viewport pengguna
            entry.target.classList.add("is-visible"); // line 28 : Menambahkan class 'is-visible' untuk memicu transisi animasi CSS muncul perlahan
            observer.unobserve(entry.target); // line 29 : Menghentikan observasi elemen tersebut karena animasi hanya perlu dipicu satu kali
          } // line 30 : Penutup kondisi isIntersecting
        }); // line 31 : Penutup iterasi entries
      }, // line 32 : Penutup fungsi callback IntersectionObserver
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }, // line 33 : Opsi konfigurasi observer: aktif saat 12% elemen terlihat dengan margin bawah -40px
    ); // line 34 : Penutup pembuatan instance IntersectionObserver
// line 35 : Baris kosong pemisah
    const observeTargets = (node) => { // line 36 : Fungsi pembantu untuk mendaftarkan node elemen ke revealObserver
      if (!(node instanceof Element)) return; // line 37 : Memastikan bahwa node yang diperiksa benar-benar merupakan objek Element DOM
// line 38 : Baris kosong pemisah
      if (node.matches("[data-reveal]") && !targets.has(node)) { // line 39 : Jika node itu sendiri memiliki atribut [data-reveal] dan belum tercatat
        targets.add(node); // line 40 : Menambahkan node ke koleksi WeakSet targets
        revealObserver.observe(node); // line 41 : Mendaftarkan node ke IntersectionObserver untuk dipantau posisinya
      } // line 42 : Penutup kondisi pencocokan node langsung
// line 43 : Baris kosong pemisah
      node.querySelectorAll("[data-reveal]").forEach((target) => { // line 44 : Mencari seluruh elemen turunan di dalam node yang memiliki atribut [data-reveal]
        if (targets.has(target)) return; // line 45 : Lewati jika elemen target turunan tersebut sudah pernah didaftarkan
        targets.add(target); // line 46 : Mencatat elemen target turunan ke dalam WeakSet
        revealObserver.observe(target); // line 47 : Mendaftarkan elemen target turunan ke revealObserver
      }); // line 48 : Penutup iterasi querySelectorAll
    }; // line 49 : Penutup fungsi observeTargets
// line 50 : Baris kosong pemisah
    observeTargets(root); // line 51 : Memulai observasi awal pada seluruh elemen beranimasi di dalam wadah root
// line 52 : Baris kosong pemisah
    const mutationObserver = new MutationObserver((records) => { // line 53 : Membuat MutationObserver untuk mendeteksi elemen baru yang disisipkan dinamis ke DOM
      records.forEach((record) => { // line 54 : Mengiterasi setiap perubahan mutasi DOM yang tertangkap
        record.addedNodes.forEach(observeTargets); // line 55 : Memeriksa setiap node baru yang ditambahkan dan otomatis mengaktifkan animasinya
      }); // line 56 : Penutup iterasi mutasi records
    }); // line 57 : Penutup pembuatan instance MutationObserver
    mutationObserver.observe(root, { childList: true, subtree: true }); // line 58 : Mengaktifkan pemantauan perubahan anak elemen (childList) di seluruh cabang root (subtree)
// line 59 : Baris kosong pemisah
    return () => { // line 60 : Fungsi cleanup yang dijalankan React ketika komponen di-unmount dari layar
      mutationObserver.disconnect(); // line 61 : Menghentikan pemantauan mutasi DOM agar tidak terjadi memory leak
      revealObserver.disconnect(); // line 62 : Menghentikan pemantauan IntersectionObserver
    }; // line 63 : Penutup fungsi cleanup useEffect
  }, []); // line 64 : Dependency array kosong menandakan efek ini hanya dijalankan sekali saat mount
// line 65 : Baris kosong pemisah
  return ( // line 66 : Mengembalikan struktur tata letak antarmuka aplikasi Kopi Ruang Kita
    <> {/* line 67 : React Fragment pembungkus tanpa elemen DOM tambahan */}
      <Navbar /> {/* line 68 : Menampilkan komponen bilah navigasi di posisi atas halaman */}
      <main id="home"> {/* line 69 : Tag konten utama halaman dengan ID anchor 'home' */}
        <Hero /> {/* line 70 : Menampilkan komponen pembuka Hero */}
        <About /> {/* line 71 : Menampilkan komponen profil Tentang Kami */}
        <Menu /> {/* line 72 : Menampilkan komponen katalog Menu */}
        <Promo /> {/* line 73 : Menampilkan komponen penawaran Promo */}
        <Contact /> {/* line 74 : Menampilkan komponen formulir Kontak */}
      </main> {/* line 75 : Penutup tag elemen konten utama */}
      <Footer /> {/* line 76 : Menampilkan komponen catatan kaki Footer */}
    </> /* line 77 : Penutup React Fragment */
  ); // line 78 : Penutup pernyataan return
} // line 79 : Penutup fungsi komponen App
