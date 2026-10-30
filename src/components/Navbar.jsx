import { useEffect, useRef, useState } from "react"; // line 1 : Mengimpor hook useEffect, useRef, dan useState dari pustaka React
// line 2 : Baris kosong pemisah impor
/* Warna diambil dari App.css — line 3 : Komentar catatan: palet warna diselaraskan dengan CSS utama */
const C = { // line 4 : Mendefinisikan objek konstanta C untuk menyimpan kode heksadesimal palet warna tema kedai
  bar: "#e8e2d9", // line 5 : Warna latar bilah navigasi (krem hangat)
  paper: "#f3f0e8", // line 6 : Warna latar kertas menu mobile
  dark: "#4d3324", // line 7 : Warna cokelat tua gelap pekat untuk elemen utama dan teks penting
  text: "#34291f", // line 8 : Warna teks standar cokelat tua
  muted: "#77675b", // line 9 : Warna teks sekunder abu-abu kecokelatan
  line: "#cfc5b8", // line 10 : Warna garis tepi atau border lembut
  caramel: "#a8764a", // line 11 : Warna aksen karamel khas kopi
}; // line 12 : Penutup objek konstanta C
// line 13 : Baris kosong pemisah
const SERIF = { fontFamily: 'Georgia, "Times New Roman", serif' }; // line 14 : Mendefinisikan gaya font serif klasik Georgia untuk tipografi brand
// line 15 : Baris kosong pemisah
const links = [ // line 16 : Array objek tautan navigasi utama website
  { label: "Beranda", href: "#home", id: "home" }, // line 17 : Tautan menu Beranda menuju section #home
  { label: "Tentang", href: "#tentang", id: "tentang" }, // line 18 : Tautan menu Tentang menuju section #tentang
  { label: "Menu", href: "#menu", id: "menu" }, // line 19 : Tautan menu Menu menuju katalog produk #menu
  { label: "Promo", href: "#promo", id: "promo" }, // line 20 : Tautan menu Promo menuju penawaran spesial #promo
  { label: "Kontak", href: "#kontak", id: "kontak" }, // line 21 : Tautan menu Kontak menuju formulir pesan #kontak
]; // line 22 : Penutup array objek navigasi links
const cta = { label: "Temukan kami", href: "#footer" }; // line 23 : Objek tombol aksi cepat cta Temukan kami yang mengarah ke footer
const SECTION_IDS = ["home", "tentang", "menu", "promo", "kontak", "footer"]; // line 24 : Daftar ID elemen section untuk mendeteksi posisi scroll aktif pengguna
// line 25 : Baris kosong pemisah
/* Jam buka 08.00 - 22.00 WIB (sesuai bagian Tentang Kami) — line 26 : Komentar penjelas ketentuan jam operasional kedai kopi */
function isOpenNow() { // line 27 : Fungsi pembantu isOpenNow untuk mengecek apakah saat ini kedai sedang buka atau tutup
  const hour = // line 28 : Mengambil jam saat ini dalam format angka
    parseInt( // line 29 : Konversi string jam menjadi tipe integer
      new Date().toLocaleString("en-US", { // line 30 : Membaca waktu lokal zona Asia/Jakarta (WIB) dari tanggal saat ini
        timeZone: "Asia/Jakarta", // line 31 : Menentukan zona waktu spesifik WIB
        hour: "numeric", // line 32 : Format waktu jam numerik
        hour12: false, // line 33 : Menggunakan format 24 jam tanpa am/pm
      }), // line 34 : Penutup opsi toLocaleString
      10, // line 35 : Basis desimal 10
    ) % 24; // line 36 : Modulo 24 untuk keamanan rentang nilai jam
  return hour >= 8 && hour < 22; // line 37 : Mengembalikan true jika jam berada di antara jam 8 pagi sampai sebelum 10 malam (22:00)
} // line 38 : Penutup fungsi isOpenNow
// line 39 : Baris kosong pemisah
function Bean({ className = "" }) { // line 40 : Komponen ikon SVG Bean yang menggambarkan ilustrasi biji kopi
  return ( // line 41 : Mengembalikan elemen SVG biji kopi
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true"> {/* line 42 : Tag pembuka elemen SVG ukuran viewBox 16x16 dengan atribut aria-hidden untuk aksesibilitas */}
      <ellipse /* line 43 : Elemen elips luar pembentuk badan biji kopi */
        cx="8" /* line 44 : Titik pusat koordinat X elips bernilai 8 */
        cy="8" /* line 45 : Titik pusat koordinat Y elips bernilai 8 */
        rx="4.2" /* line 46 : Radius horizontal sumbu X elips sebesar 4.2 */
        ry="6.6" /* line 47 : Radius vertikal sumbu Y elips sebesar 6.6 */
        transform="rotate(35 8 8)" /* line 48 : Rotasi kemiringan elips sebesar 35 derajat pada titik pusat (8,8) */
        fill={C.caramel} /* line 49 : Warna isi elips menggunakan warna karamel C.caramel */
      /> {/* line 50 : Penutup elemen elips */}
      <path /* line 51 : Elemen kurva path pembentuk belahan garis tengah biji kopi */
        d="M5.2 3.6c2.4 1.6.2 3.8 2.6 5.2s.4 3.2 2.8 4.4" /* line 52 : Data koordinat garis lengkung pembelah biji kopi */
        transform="rotate(0 8 8)" /* line 53 : Rotasi koordinat path garis tengah */
        fill="none" /* line 54 : Tanpa warna isian fill */
        stroke={C.bar} /* line 55 : Warna garis menggunakan C.bar */
        strokeWidth="1.2" /* line 56 : Ketebalan garis lekukan biji kopi 1.2px */
        strokeLinecap="round" /* line 57 : Ujung garis melengkung lembut round */
      /> {/* line 58 : Penutup elemen path */}
    </svg> // line 59 : Penutup tag svg biji kopi
  ); // line 60 : Penutup return komponen Bean
} // line 61 : Penutup fungsi komponen Bean
// line 62 : Baris kosong pemisah
function CupLogo() { // line 63 : Komponen logo cangkir kopi beranimasi uap CupLogo
  return ( // line 64 : Mengembalikan elemen JSX logo cangkir
    <span /* line 65 : Elemen span wadah lingkaran logo dengan efek hover rotasi dan skala */
      aria-hidden="true" /* line 66 : Atribut aria-hidden agar ikon dekoratif tidak dibaca screen reader */
      className="relative flex size-11 shrink-0 items-center justify-center rounded-full shadow-[0_4px_10px_-2px_rgba(77,51,36,0.45)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-8deg]" /* line 67 : Pengaturan class ukuran 44px (size-11), lingkaran bulat penuh, dan efek bayangan lembut */
      style={{ backgroundColor: C.dark }} /* line 68 : Warna latar lingkaran menggunakan warna cokelat gelap C.dark */
    > {/* line 69 : Penutup tag pembuka span lingkaran luar */}
{/* cincin dekoratif — line 70 : Komentar: cincin dekoratif di dalam logo */}
      <span /* line 71 : Elemen span cincin dekoratif tipis */
        className="absolute inset-[3px] rounded-full border" /* line 72 : Class posisi absolute inset 3px membulat */
        style={{ borderColor: "rgba(243,240,232,0.28)" }} /* line 73 : Warna border transparan elegan */
      /> {/* line 74 : Penutup tag span cincin */}
      <svg /* line 75 : Tag pembuka elemen SVG gambar cangkir kopi */
        viewBox="0 0 32 32" /* line 76 : Ukuran viewBox 32x32 */
        className="relative size-7" /* line 77 : Ukuran relatif icon size 28px (size-7) */
        fill="none" /* line 78 : Tanpa isian warna fill */
        stroke={C.paper} /* line 79 : Warna garis cangkir menggunakan warna kertas krem C.paper */
        strokeWidth="1.7" /* line 80 : Ketebalan garis stroke 1.7px */
        strokeLinecap="round" /* line 81 : Ujung garis membulat round */
        strokeLinejoin="round" /* line 82 : Sudut sambungan garis membulat round */
      > {/* line 83 : Penutup tag pembuka svg cangkir */}
{/* uap bergerak — line 84 : Komentar: uap bergerak beranimasi di atas cangkir */}
        <g stroke="#e0b383" strokeWidth="1.5"> {/* line 85 : Grup elemen uap dengan warna stroke oranye hangat */}
          <path d="M11 9c-1.6-1.6 1.6-3 0-5"> {/* line 86 : Jalur path gelombang uap pertama di sisi kiri */}
            <animate /* line 87 : Animasi perubahan transparansi uap (fade-in lalu fade-out) */
              attributeName="opacity" /* line 88 : Nama atribut yang dianimasikan: opacity */
              values="0;1;0" /* line 89 : Urutan nilai transparansi 0 ke 1 lalu kembali 0 */
              dur="2.6s" /* line 90 : Durasi satu siklus animasi 2.6 detik */
              repeatCount="indefinite" /* line 91 : Animasi berulang tanpa henti (indefinite) */
            /> {/* line 92 : Penutup tag animate transparansi uap 1 */}
            <animateTransform /* line 93 : Animasi pergerakan vertikal uap melayang ke atas */
              attributeName="transform" /* line 94 : Nama atribut transformasi translate */
              type="translate" /* line 95 : Tipe transformasi pergeseran translasi */
              values="0 2;0 -2" /* line 96 : Pergeseran koordinat dari Y:2 ke Y:-2 */
              dur="2.6s" /* line 97 : Durasi pergerakan uap 2.6 detik */
              repeatCount="indefinite" /* line 98 : Perulangan transformasi tanpa henti */
            /> {/* line 99 : Penutup tag animateTransform uap 1 */}
          </path> {/* line 100 : Penutup tag path uap pertama */}
          <path d="M16 9c-1.6-1.6 1.6-3 0-5"> {/* line 101 : Jalur path gelombang uap kedua di bagian tengah */}
            <animate /* line 102 : Animasi transparansi uap tengah */
              attributeName="opacity" /* line 103 : Atribut opacity */
              values="0;1;0" /* line 104 : Siklus nilai transparansi 0 ke 1 ke 0 */
              dur="2.6s" /* line 105 : Durasi animasi 2.6 detik */
              begin="0.5s" /* line 106 : Waktu jeda mulai (begin) 0.5 detik agar pergerakan uap bergantian alami */
              repeatCount="indefinite" /* line 107 : Animasi looping tanpa henti */
            /> {/* line 108 : Penutup tag animate opacity uap tengah */}
            <animateTransform /* line 109 : Animasi melayang ke atas uap tengah */
              attributeName="transform" /* line 110 : Atribut transform */
              type="translate" /* line 111 : Tipe translate vertikal */
              values="0 2;0 -2" /* line 112 : Jarak pergerakan uap dari posisi bawah ke atas */
              dur="2.6s" /* line 113 : Durasi animasi 2.6 detik */
              begin="0.5s" /* line 114 : Jeda mulai animasi 0.5 detik */
              repeatCount="indefinite" /* line 115 : Looping tanpa henti */
            /> {/* line 116 : Penutup tag animateTransform uap tengah */}
          </path> {/* line 117 : Penutup path uap tengah */}
          <path d="M21 9c-1.6-1.6 1.6-3 0-5"> {/* line 118 : Jalur path gelombang uap ketiga di sisi kanan */}
            <animate /* line 119 : Animasi transparansi uap kanan */
              attributeName="opacity" /* line 120 : Atribut opacity */
              values="0;1;0" /* line 121 : Nilai opasitas */
              dur="2.6s" /* line 122 : Durasi animasi 2.6 detik */
              begin="1s" /* line 123 : Jeda mulai animasi 1 detik */
              repeatCount="indefinite" /* line 124 : Looping terus-menerus */
            /> {/* line 125 : Penutup animate opacity uap kanan */}
            <animateTransform /* line 126 : Animasi melayang ke atas uap kanan */
              attributeName="transform" /* line 127 : Atribut transform */
              type="translate" /* line 128 : Tipe translate vertikal */
              values="0 2;0 -2" /* line 129 : Jarak pergerakan ke atas */
              dur="2.6s" /* line 130 : Durasi pergerakan 2.6 detik */
              begin="1s" /* line 131 : Jeda mulai animasi 1 detik */
              repeatCount="indefinite" /* line 132 : Looping tak terhingga */
            /> {/* line 133 : Penutup animateTransform uap kanan */}
          </path> {/* line 134 : Penutup path uap kanan */}
        </g> {/* line 135 : Penutup grup elemen uap kopi */}
{/* cangkir — line 136 : Komentar: bentuk badan cangkir kopi */}
        <path d="M7 14h16v5a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-5Z" /* line 137 : Path badan cangkir kopi dengan lekukan bawah melengkung */ />
        <path d="M23 15.5h1.2a3 3 0 0 1 0 6H22.5" /* line 138 : Path gagang pegangan cangkir kopi di sisi kanan */ />
        <path d="M5 28h20" /* line 139 : Path piring tatakan cangkir kopi di bagian bawah */ />
      </svg> {/* line 140 : Penutup tag svg logo cangkir */}
    </span> // line 141 : Penutup tag span logo
  ); // line 142 : Penutup return CupLogo
} // line 143 : Penutup fungsi komponen CupLogo
// line 144 : Baris kosong pemisah
function Brand({ onClick }) { // line 145 : Komponen Brand untuk menampilkan logo dan identitas nama kedai di bilah navigasi
  return ( // line 146 : Mengembalikan elemen tautan brand
    <a /* line 147 : Tag pembuka tautan anchor menuju #home */
      href="#home" /* line 148 : Alamat tautan href #home */
      onClick={onClick} /* line 149 : Menghubungkan event handler onClick untuk menutup menu mobile saat logo diklik */
      aria-label="Kopi Ruang Kita, beranda" /* line 150 : Label aksesibilitas untuk screen reader */
      className="group flex items-center gap-3" /* line 151 : Class flex layout untuk meratakan logo dan teks nama kedai */
    > {/* line 152 : Penutup tag pembuka tautan brand */}
      <CupLogo /* line 153 : Menampilkan ikon cangkir beranimasi CupLogo */ />
      <span className="leading-none"> {/* line 154 : Wadah teks nama dan slogan brand */}
        <strong /* line 155 : Tag teks tebal nama kedai */
          className="block text-[17px] font-bold tracking-tight sm:text-[20px]" /* line 156 : Styling ukuran font responsif 17px pada hp dan 20px pada layar sm/desktop */
          style={{ ...SERIF, color: C.dark }} /* line 157 : Font serif Georgia dengan warna cokelat tua C.dark */
        > {/* line 158 : Penutup tag pembuka strong */}
          Kopi{" "} {/* line 159 : Kata Kopi */}
          <em className="font-normal" style={{ color: C.caramel }}> {/* line 160 : Tag em penekanan kata Ruang dengan warna karamel */}
            Ruang {/* line 161 : Kata Ruang */}
          </em>{" "} {/* line 162 : Penutup tag em */}
          Kita {/* line 163 : Kata Kita */}
        </strong> {/* line 164 : Penutup tag strong */}
        <small /* line 165 : Tag teks kecil slogan tagline */
          className="mt-1.5 block text-[8.5px] font-medium tracking-[0.22em] uppercase sm:text-[9.5px]" /* line 166 : Styling huruf kapital (uppercase) dengan jarak spasi huruf lebar tracking 0.22em */
          style={{ color: C.muted }} /* line 167 : Warna teks slogan C.muted */
        > {/* line 168 : Penutup tag pembuka small */}
          Tempat pulang sejenak {/* line 169 : Teks slogan: Tempat pulang sejenak */}
        </small> {/* line 170 : Penutup tag small */}
      </span> {/* line 171 : Penutup wadah teks nama brand */}
    </a> // line 172 : Penutup tautan brand anchor
  ); // line 173 : Penutup return Brand
} // line 174 : Penutup fungsi komponen Brand
// line 175 : Baris kosong pemisah
function OpenBadge({ open, className = "" }) { // line 176 : Komponen lencana status buka/tutup kedai OpenBadge
  return ( // line 177 : Mengembalikan elemen lencana badge
    <span /* line 178 : Tag span wadah badge dengan border membulat */
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium ${className}`} /* line 179 : Class flex inline dengan padding horizontal dan teks kecil 11px */
      style={{ borderColor: C.line, color: C.text }} /* line 180 : Border tipis C.line dan warna teks C.text */
    > {/* line 181 : Penutup tag pembuka span badge */}
      <span className="relative flex size-2"> {/* line 182 : Titik indikator visual status lampu */}
        {open && ( // line 183 : Efek animasi denyut (ping) hijau saat kedai berstatus buka
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62c68a] opacity-70" /* line 184 : Lingkaran animasi ping hijau transparan berkedip */ />
        )} // line 185 : Penutup kondisi status buka
        <span /* line 186 : Titik lingkaran solid lampu status */
          className="relative inline-flex size-2 rounded-full" /* line 187 : Class titik ukuran 8px (size-2) membulat */
          style={{ backgroundColor: open ? "#62c68a" : "#b5503c" }} /* line 188 : Warna hijau #62c68a jika buka, warna merah bata #b5503c jika tutup */
        /> {/* line 189 : Penutup tag span titik lampu */}
      </span> {/* line 190 : Penutup wadah lampu indikator */}
      {open ? "Buka sekarang · s.d. 22.00" : "Tutup · buka 08.00"} // line 191 : Teks keterangan dinamis: Buka sekarang s.d. 22.00 atau Tutup buka 08.00
    </span> // line 192 : Penutup tag span lencana badge
  ); // line 193 : Penutup return OpenBadge
} // line 194 : Penutup fungsi komponen OpenBadge
// line 195 : Baris kosong pemisah
export default function Navbar() { // line 196 : Mendefinisikan dan mengekspor komponen navigasi utama Navbar
  const [open, setOpen] = useState(false); // line 197 : State open untuk melacak apakah menu navigasi mobile sedang dibuka atau ditutup
  const [scrolled, setScrolled] = useState(false); // line 198 : State scrolled untuk mendeteksi apakah layar sedang di-scroll melewati batas atas
  const [active, setActive] = useState("home"); // line 199 : State active untuk menandai menu navigasi section yang sedang aktif di layar pengguna
  const [openNow, setOpenNow] = useState(isOpenNow); // line 200 : State openNow yang diinisialisasi berdasarkan hasil pengecekan jam operasional
  const barRef = useRef(null); // line 201 : Ref barRef untuk memanipulasi elemen garis progress scroll tanpa re-render berlebihan
// line 202 : Baris kosong pemisah
  useEffect(() => { // line 203 : Effect hook untuk menangani event scroll halaman dan kalkulasi posisi aktif
    const onScroll = () => { // line 204 : Fungsi onScroll yang dipanggil setiap kali posisi layar bergulir
      const y = window.scrollY; // line 205 : Mengambil jarak scroll vertikal dari atas halaman (window.scrollY)
      setScrolled(y > 8); // line 206 : Mengubah status scrolled menjadi true jika jarak scroll lebih dari 8px
// line 207 : Baris kosong pemisah kalkulasi progress scroll
      const max = document.documentElement.scrollHeight - window.innerHeight; // line 208 : Menghitung total maksimal scroll yang dapat ditempuh pengguna
      if (barRef.current) { // line 209 : Mengecek ketersediaan elemen DOM bar progress scroll
        barRef.current.style.transform = `scaleX(${ // line 210 : Mengatur skala lebar sumbu X (scaleX) dari 0 sampai 1 sesuai persentase scroll pengguna
          max > 0 ? Math.min(y / max, 1) : 0 // line 211 : Menghitung rasio scroll terkini dibagi maksimal scroll
        })`; // line 212 : Penutup perhitungan scaleX
      } // line 213 : Penutup pengecekan barRef
// line 214 : Baris kosong pemisah deteksi section aktif
      let current = "home"; // line 215 : Menetapkan section default awal adalah home
      for (const id of SECTION_IDS) { // line 216 : Mengiterasi setiap section ID untuk mendeteksi posisi relatifnya terhadap layar
        const el = document.getElementById(id); // line 217 : Mengambil elemen section DOM berdasarkan ID
        if (el && el.getBoundingClientRect().top <= 140) current = id; // line 218 : Jika posisi elemen sudah berada dekat dengan batas atas (<= 140px), set sebagai section aktif
      } // line 219 : Penutup perulangan for section
      setActive(current); // line 220 : Memperbarui state active dengan ID section terkini
    }; // line 221 : Penutup fungsi onScroll
// line 222 : Baris kosong pemisah
    window.addEventListener("scroll", onScroll, { passive: true }); // line 223 : Mendaftarkan event listener scroll ke objek window secara pasif demi performa
    const frame = requestAnimationFrame(onScroll); // line 224 : Menjalankan kalkulasi awal scroll menggunakan requestAnimationFrame saat render awal
    return () => { // line 225 : Fungsi pembersihan (cleanup) event listener saat komponen unmount
      window.removeEventListener("scroll", onScroll); // line 226 : Menghapus event listener scroll dari window
      cancelAnimationFrame(frame); // line 227 : Membatalkan frame animasi jika unmount terjadi sebelum dieksekusi
    }; // line 228 : Penutup fungsi cleanup scroll
  }, []); // line 229 : Dependency array kosong agar listener scroll hanya dipasang sekali saat mount
// line 230 : Baris kosong pemisah
  useEffect(() => { // line 231 : Effect hook untuk memperbarui status buka kedai secara periodik setiap 1 menit
    const timer = setInterval(() => setOpenNow(isOpenNow()), 60000); // line 232 : Menjalankan timer interval setiap 60.000 milidetik (1 menit) untuk menguji isOpenNow
    return () => clearInterval(timer); // line 233 : Cleanup interval timer untuk mencegah memory leak
  }, []); // line 234 : Dependency array kosong
// line 235 : Baris kosong pemisah
  useEffect(() => { // line 236 : Effect hook untuk menangani tombol keyboard Escape guna menutup menu mobile
    if (!open) return; // line 237 : Jika menu mobile sedang tidak terbuka, jangan pasang listener keyboard
    const onKey = (e) => e.key === "Escape" && setOpen(false); // line 238 : Fungsi handler jika tombol yang ditekan adalah Escape, tutup menu mobile
    window.addEventListener("keydown", onKey); // line 239 : Mendaftarkan event listener keydown pada window
    return () => window.removeEventListener("keydown", onKey); // line 240 : Menghapus event listener keydown saat menu tertutup atau unmount
  }, [open]); // line 241 : Dependency [open] agar listener hanya aktif ketika menu mobile sedang terbuka
// line 242 : Baris kosong pemisah
  const close = () => setOpen(false); // line 243 : Fungsi bantuan close untuk menutup menu mobile dengan mengubah state open menjadi false
// line 244 : Baris kosong pemisah
  return ( // line 245 : Mengembalikan struktur JSX untuk bilah navigasi website
    <header /* line 246 : Tag pembuka elemen semantik header dengan posisi sticky tetap melayang di atas layar */
      className={`sticky top-0 z-50 ml-[calc(50%-50vw)] w-screen transition-[background-color,box-shadow,backdrop-filter] duration-300 ${ /* line 247 : Pengaturan styling header: lebar layar penuh (w-screen) dengan transisi mulus background dan shadow */
        scrolled || open /* line 248 : Kondisi ternary: jika di-scroll atau menu terbuka */
          ? "bg-[#e8e2d9]/90 shadow-[0_10px_30px_-14px_rgba(77,51,36,0.45)] backdrop-blur-md" /* line 249 : Terapkan background krem transparan 90% dengan efek blur (backdrop-blur-md) dan bayangan elegan */
          : "bg-[#e8e2d9]" /* line 250 : Jika berada di posisi paling atas, gunakan warna krem solid standar */
      }`} /* line 251 : Penutup string class dinamis header */
    > {/* line 252 : Penutup tag pembuka header */}
      <div className="mx-auto flex h-[82px] w-full max-w-310 items-center justify-between gap-4 px-[18px] min-[431px]:px-6 md:h-19 md:px-12"> {/* line 253 : Kontainer isi header dengan batas lebar maksimal 310 satuan (1240px) dan tinggi 82px di mobile / 76px di desktop */}
        <Brand onClick={close} /* line 254 : Menampilkan komponen identitas Brand dengan fungsi penutup menu saat diklik */ />
{/* line 255 : Baris kosong pemisah sebelum menu desktop */}
{/* ===== Desktop ===== — line 256 : Komentar penanda bagian navigasi desktop */}
        <nav /* line 257 : Elemen nav semantik untuk navigasi utama layar desktop */
          aria-label="Navigasi utama" /* line 258 : Label aksesibilitas navigasi utama */
          className="hidden items-center gap-2 md:flex" /* line 259 : Disembunyikan pada layar hp (hidden) dan ditampilkan flex pada layar md ke atas (md:flex) */
        > {/* line 260 : Penutup tag pembuka nav desktop */}
          {links.map((link) => { // line 261 : Iterasi pemetaan array links untuk membuat tautan menu secara dinamis
            const isActive = active === link.id; {/* line 262 : Mengecek apakah tautan saat ini cocok dengan section yang sedang aktif (isActive) */}
            return ( // line 263 : Mengembalikan elemen tautan navigasi
              <a /* line 264 : Tag pembuka link anchor menu */
                key={link.id} /* line 265 : Kunci unik item tautan React menggunakan link.id */
                href={link.href} /* line 266 : Tujuan target scroll anchor */
                aria-current={isActive ? "page" : undefined} /* line 267 : Atribut aksesibilitas aria-current jika tautan adalah halaman aktif */
                className="group relative flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-colors" /* line 268 : Styling tautan berdesain rounded-full dengan teks ukuran 13px dan padding rapi */
                style={{ color: isActive ? C.dark : C.text }} /* line 269 : Warna teks cokelat tua C.dark jika aktif, atau C.text jika biasa */
              > {/* line 270 : Penutup tag pembuka a */}
{/* biji kopi muncul di menu aktif — line 271 : Komentar: icon biji kopi muncul hanya pada menu yang aktif */}
                <Bean /* line 272 : Komponen ikon biji kopi Bean */
                  className={`transition-all duration-300 ${ /* line 273 : Class transisi kemunculan ikon biji kopi dengan durasi 300ms */
                    isActive /* line 274 : Kondisi ternary untuk animasi biji kopi */
                      ? "mr-2 size-3.5 rotate-0 opacity-100" /* line 275 : Jika aktif: biji kopi muncul tegak sempurna (rotate-0 opacity-100) dengan margin kanan */
                      : "mr-0 h-3.5 w-0 -rotate-90 opacity-0" /* line 276 : Jika tidak aktif: ukuran lebar 0 tersembunyi berputar -90 derajat dan transparan (opacity-0) */
                  }`} /* line 277 : Penutup class animasi biji kopi */
                /> {/* line 278 : Penutup komponen Bean */}
                {link.label} {/* line 279 : Teks label tautan navigasi (misal: Beranda, Menu, Kontak) */}
{/* garis bawah tergambar saat hover — line 280 : Komentar: garis bawah animasi meluncur saat kursor diarahkan ke menu */}
                <span /* line 281 : Elemen span dekoratif garis bawah hover */
                  aria-hidden="true" /* line 282 : Atribut aria-hidden */
                  className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" /* line 283 : Class garis bawah setinggi 1px dengan animasi scaleX memanjang saat hover */
                  style={{ backgroundColor: C.caramel }} /* line 284 : Warna garis bawah menggunakan warna karamel C.caramel */
                /> {/* line 285 : Penutup elemen span garis bawah */}
              </a> // line 286 : Penutup elemen tautan a desktop
            ); {/* line 287 : Penutup fungsi map navigasi */}
          })} // line 288 : Penutup iterasi links desktop
{/* line 289 : Baris kosong pemisah */}
          <OpenBadge open={openNow} className="ml-2 hidden lg:inline-flex" /* line 290 : Menampilkan lencana status operasional OpenBadge di menu desktop untuk layar lg ke atas */ />
{/* line 291 : Baris kosong pemisah */}
          <a /* line 292 : Tautan tombol aksi cepat CTA desktop Temukan kami */
            href={cta.href} /* line 293 : Tautan anchor menuju section footer */
            className="group ml-2 inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-[13px] font-medium text-[#f8f7f2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-6px_rgba(77,51,36,0.6)]" /* line 294 : Styling tombol pil lonjong berwarna cokelat tua dengan bayangan elegan saat di-hover */
            style={{ backgroundColor: C.dark }} /* line 295 : Warna latar tombol menggunakan C.dark */
          > {/* line 296 : Penutup tag pembuka tombol CTA */}
            {cta.label} {/* line 297 : Label teks tombol CTA: Temukan kami */}
            <span /* line 298 : Lingkaran ikon panah di dalam tombol CTA */
              aria-hidden="true" /* line 299 : Aria hidden dekoratif */
              className="flex size-7 items-center justify-center rounded-full text-sm transition-transform duration-300 group-hover:rotate-45" /* line 300 : Lingkaran ukuran 28px dengan efek rotasi miring 45 derajat saat tombol di-hover */
              style={{ backgroundColor: C.caramel }} /* line 301 : Warna lingkaran panah menggunakan warna karamel C.caramel */
            > {/* line 302 : Penutup tag pembuka span panah */}
              → {/* line 303 : Simbol panah kanan */}
            </span> {/* line 304 : Penutup span panah */}
          </a> {/* line 305 : Penutup tombol anchor CTA desktop */}
        </nav> {/* line 306 : Penutup tag nav navigasi desktop */}
{/* line 307 : Baris kosong pemisah */}
{/* ===== Tombol hamburger ===== — line 308 : Komentar penanda tombol hamburger menu mobile */}
        <button /* line 309 : Elemen button hamburger untuk membuka/menutup menu di layar ponsel */
          type="button" /* line 310 : Tipe button standar */
          onClick={() => setOpen((v) => !v)} /* line 311 : Handler onClick untuk membalikkan nilai state open (toggle) */
          aria-expanded={open} /* line 312 : Atribut aria-expanded untuk memberi tahu screen reader status buka/tutup menu */
          aria-controls="menu-mobile" /* line 313 : Menghubungkan kontrol tombol ke elemen menu-mobile */
          aria-label={open ? "Tutup menu" : "Buka menu"} /* line 314 : Label aksesibilitas dinamis Tutup menu atau Buka menu */
          className="flex size-11 items-center justify-center rounded-full border transition-colors hover:bg-[#f3f0e8] md:hidden" /* line 315 : Styling tombol lingkaran ukuran 44px (size-11) dengan batas border, hanya muncul di mobile (md:hidden) */
          style={{ borderColor: C.line, color: C.dark }} /* line 316 : Border C.line dan warna icon C.dark */
        > {/* line 317 : Penutup tag pembuka button hamburger */}
          <span className="relative block h-3.5 w-5" aria-hidden="true"> {/* line 318 : Wadah relatif untuk 3 garis animasi hamburger */}
            <span /* line 319 : Garis hamburger bagian atas */
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${ /* line 320 : Class animasi garis atas membentuk garis silang (X) saat menu terbuka */
                open ? "top-[6px] rotate-45" : "top-0" /* line 321 : Rotasi 45 derajat saat menu terbuka (open) */
              }`} /* line 322 : Penutup class garis atas */
            /> {/* line 323 : Penutup span garis atas */}
            <span /* line 324 : Garis hamburger bagian tengah */
              className={`absolute top-[6px] right-0 h-0.5 rounded bg-current transition-all duration-300 ${ /* line 325 : Class animasi garis tengah menghilang (fade-out dan mengecil) saat menu terbuka */
                open ? "w-0 opacity-0" : "w-3.5 opacity-100" /* line 326 : Lebar 0 dan opasitas 0 saat open */
              }`} /* line 327 : Penutup class garis tengah */
            /> {/* line 328 : Penutup span garis tengah */}
            <span /* line 329 : Garis hamburger bagian bawah */
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${ /* line 330 : Class animasi garis bawah membentuk silang rotasi -45 derajat */
                open ? "top-[6px] -rotate-45" : "top-3" /* line 331 : Rotasi -45 derajat dan naik saat menu terbuka */
              }`} /* line 332 : Penutup class garis bawah */
            /> {/* line 333 : Penutup span garis bawah */}
          </span> {/* line 334 : Penutup wadah garis hamburger */}
        </button> {/* line 335 : Penutup tombol button hamburger */}
      </div> {/* line 336 : Penutup div kontainer isi header */}
{/* line 337 : Baris kosong pemisah */}
{/* ===== Panel mobile ===== — line 338 : Komentar penanda panel laci navigasi mobile */}
      <div /* line 339 : Wadah laci menu mobile dengan animasi membuka menggunakan CSS Grid template rows */
        id="menu-mobile" /* line 340 : ID unik menu-mobile */
        inert={!open} /* line 341 : Atribut inert saat menu tertutup agar elemen tidak dapat diakses keyboard atau fokus saat tersembunyi */
        className={`grid transition-[grid-template-rows] duration-500 ease-out md:hidden ${ /* line 342 : Transisi grid-template-rows dengan durasi 500ms dan kurva ease-out */
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]" /* line 343 : Membuka penuh ke 1fr saat open bernilai true, dan menyusut ke 0fr saat false */
        }`} /* line 344 : Penutup class panel mobile */
      > {/* line 345 : Penutup tag pembuka panel mobile */}
        <div className="overflow-hidden"> {/* line 346 : Div pembungkus konten menu dengan overflow hidden agar konten rapi saat menyusut */}
          <nav /* line 347 : Navigasi semantik mobile dengan padding vertikal dan horizontal yang nyaman disentuh */
            aria-label="Navigasi utama (mobile)" /* line 348 : Aria label navigasi utama mobile */
            className="px-[18px] pt-2 pb-6 min-[431px]:px-6" /* line 349 : Pengaturan padding layar mobile */
            style={{ backgroundColor: C.paper }} /* line 350 : Warna latar kertas menu C.paper */
          > {/* line 351 : Penutup tag pembuka nav mobile */}
            {links.map((link, i) => { // line 352 : Iterasi pemetaan tautan navigasi links untuk menu mobile
              const isActive = active === link.id; {/* line 353 : Mengecek status link aktif */}
              return ( // line 354 : Mengembalikan elemen tautan menu baris mobile
                <a /* line 355 : Elemen link anchor menu mobile */
                  key={link.id} /* line 356 : Kunci unik React link.id */
                  href={link.href} /* line 357 : Alamat tujuan section #id */
                  onClick={close} /* line 358 : Otomatis menutup menu mobile saat salah satu menu diklik */
                  aria-current={isActive ? "page" : undefined} /* line 359 : Status halaman aktif */
                  className="group flex items-center justify-between border-b py-4" /* line 360 : Layout flexbox dengan garis pembatas tipis di bawah setiap menu (border-b py-4) */
                  style={{ borderColor: C.line }} /* line 361 : Warna garis pembatas border C.line */
                > {/* line 362 : Penutup tag pembuka link mobile */}
                  <span className="flex items-baseline gap-4"> {/* line 363 : Wadah nomor urut dan label teks menu */}
                    <span /* line 364 : Nomor indeks menu dengan format 2 digit (01, 02, 03, dst.) */
                      className="text-xs tracking-[0.2em]" /* line 365 : Styling ukuran font kecil dengan spasi renggang tracking 0.2em */
                      style={{ color: C.caramel }} /* line 366 : Warna nomor menggunakan warna karamel C.caramel */
                    > {/* line 367 : Penutup tag span nomor */}
                      0{i + 1} {/* line 368 : Menampilkan nomor urut 01 sampai 05 */}
                    </span> {/* line 369 : Penutup span nomor urut */}
                    <span /* line 370 : Label teks nama menu dengan ukuran font besar 30px */
                      className="text-[30px] leading-none" /* line 371 : Class ukuran teks font 30px dengan line height padat */
                      style={{ /* line 372 : Gaya font serif Georgia klasik */
                        ...SERIF, /* line 373 : Spread objek gaya SERIF */
                        color: isActive ? C.caramel : C.dark, /* line 374 : Warna teks karamel jika menu sedang aktif, atau cokelat tua jika biasa */
                        fontStyle: isActive ? "italic" : "normal", /* line 375 : Gaya font miring italic jika aktif untuk aksen visual elegan */
                      }} /* line 376 : Penutup objek style label mobile */
                    > {/* line 377 : Penutup tag pembuka span label */}
                      {link.label} {/* line 378 : Menampilkan teks nama menu */}
                    </span> {/* line 379 : Penutup span teks nama menu */}
                  </span> {/* line 380 : Penutup wadah nomor dan nama menu */}
                  <span /* line 381 : Ikon panah kanan dekoratif dengan animasi bergeser saat hover */
                    aria-hidden="true" /* line 382 : Aria hidden dekoratif */
                    className="text-xl transition-transform duration-300 group-hover:translate-x-1" /* line 383 : Ukuran panah text-xl dengan transisi geser horizontal 4px saat hover */
                    style={{ color: C.muted }} /* line 384 : Warna ikon panah menggunakan C.muted */
                  > {/* line 385 : Penutup tag span panah kanan */}
                    → {/* line 386 : Simbol panah kanan */}
                  </span> {/* line 387 : Penutup span panah mobile */}
                </a> // line 388 : Penutup tautan link menu mobile
              ); {/* line 389 : Penutup return map mobile */}
            })} // line 390 : Penutup iterasi pemetaan links mobile
{/* line 391 : Baris kosong pemisah */}
            <a /* line 392 : Tombol aksi cepat CTA mobile Temukan kami */
              href={cta.href} /* line 393 : Tautan menuju footer */
              onClick={close} /* line 394 : Menutup laci menu saat CTA diklik */
              className="mt-5 flex items-center justify-between rounded-full py-2 pr-2 pl-6 text-[15px] font-medium text-[#f8f7f2]" /* line 395 : Styling tombol pil besar dengan padding nyaman untuk layar sentuh */
              style={{ backgroundColor: C.dark }} /* line 396 : Warna latar tombol menggunakan C.dark */
            > {/* line 397 : Penutup tag pembuka tombol CTA mobile */}
              {cta.label} {/* line 398 : Teks label tombol: Temukan kami */}
              <span /* line 399 : Lingkaran ikon panah di tombol CTA mobile */
                aria-hidden="true" /* line 400 : Aria hidden dekoratif */
                className="flex size-9 items-center justify-center rounded-full" /* line 401 : Lingkaran tombol panah ukuran 36px (size-9) */
                style={{ backgroundColor: C.caramel }} /* line 402 : Warna lingkaran panah karamel C.caramel */
              > {/* line 403 : Penutup tag span lingkaran panah mobile */}
                → {/* line 404 : Simbol panah kanan */}
              </span> {/* line 405 : Penutup span lingkaran panah */}
            </a> {/* line 406 : Penutup tombol anchor CTA mobile */}
{/* line 407 : Baris kosong pemisah */}
            <div className="mt-5 flex items-center justify-between gap-3"> {/* line 408 : Wadah footer menu mobile yang menampilkan status buka dan lokasi kota */}
              <OpenBadge open={openNow} /* line 409 : Menampilkan lencana status buka/tutup kedai OpenBadge pada menu mobile */ />
              <span className="text-[11px]" style={{ color: C.muted }}> {/* line 410 : Teks penanda lokasi operasional kedai Kota Medan */}
                Kota Medan {/* line 411 : Warna teks abu-abu C.muted */}
              </span> {/* line 412 : Teks: Kota Medan */}
            </div> {/* line 413 : Penutup tag span Kota Medan */}
          </nav> {/* line 414 : Penutup wadah info bawah menu mobile */}
        </div> {/* line 415 : Penutup tag nav mobile */}
      </div> {/* line 416 : Penutup div pembungkus overflow-hidden */}
{/* line 417 : Penutup wadah panel menu mobile */}
{/* garis progres scroll — line 418 : Baris kosong pemisah */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent"> {/* line 419 : Komentar penanda garis indikator progres scroll halaman */}
        <div /* line 420 : Wadah garis progres di tepi paling bawah bilah header dengan tinggi 2px */
          ref={barRef} /* line 421 : Elemen garis progres scroll dinamis dengan referensi ref barRef */
          className="h-full origin-left scale-x-0" /* line 422 : Mengikat referensi barRef untuk transformasi skala secara instan via DOM ref */
          style={{ /* line 423 : Tinggi penuh dengan titik awal skala dari sisi kiri (origin-left) */
            background: `linear-gradient(90deg, ${C.caramel}, ${C.dark})`, /* line 424 : Gradien warna linier horizontal dari karamel menuju cokelat gelap */
          }} /* line 425 : Warna gradien 90 derajat */
        /> {/* line 426 : Penutup style gradien progres */}
      </div> {/* line 427 : Penutup div elemen garis progress */}
    </header> // line 428 : Penutup wadah garis progres
  ); {/* line 429 : Penutup tag elemen header */}
} // line 430 : Penutup return komponen Navbar
// line 431 : Penutup fungsi komponen utama Navbar
