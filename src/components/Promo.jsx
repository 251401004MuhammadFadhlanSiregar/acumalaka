import { useState } from "react"; // line 1 : Mengimpor hook useState dari React untuk mengelola state modal popup promo
// line 2 : Baris kosong pemisah impor modul
import kopiSusu from "../assets/menu-coffee-susu_gula_aren.jpg"; // line 3 : Mengimpor aset foto menu es kopi susu gula aren
import cappuccino from "../assets/menu-coffee-cappuccino.jpg"; // line 4 : Mengimpor aset foto cangkir kopi cappuccino hangat
import croissant from "../assets/menu-food-croissant.jpg"; // line 5 : Mengimpor aset foto pastry croissant renyah
// line 6 : Baris kosong pemisah
function Promo() { // line 7 : Mendefinisikan komponen fungsional Promo untuk menampilkan daftar promo dan diskon
  const [showPromo, setShowPromo] = useState(null); // line 8 : State untuk menyimpan data promo yang sedang dipilih untuk dibuka di modal pop-up (null jika tertutup)
// line 9 : Baris kosong pemisah
  const promos = [ // line 10 : Array objek yang menyimpan seluruh data penawaran promo yang tersedia
    { // line 11 : Objek data penawaran promo ke-1
      id: 1, // line 12 : ID unik untuk promo Buy 1 Get 1
      discount: "50%", // line 13 : Nilai setara diskon sebesar 50 persen
      subtitle: "KOPI ANDALAN", // line 14 : Subjudul kategori penawaran kopi andalan
      title: "Buy 1 Get 1 Kopi Susu", // line 15 : Judul promo beli satu gratis satu
      image: kopiSusu, // line 16 : Variabel gambar produk yang terhubung ke aset impor
      description: // line 17 : Properti kunci untuk ringkasan deskripsi promo
        "Beli 1 gelas Kopi Susu Gula Aren, gratis 1 gelas lagi.", // line 18 : Teks detail ketentuan benefit promo beli 1 dapat 2
      terms: [ // line 19 : Array daftar syarat dan ketentuan promo 1
        "Berlaku untuk Kopi Susu Gula Aren", // line 20 : Ketentuan jenis produk yang berlaku
        "Tidak dapat digabungkan dengan promo lain", // line 21 : Ketentuan isolasi promosi
        "Berlaku setiap hari" // line 22 : Ketentuan periode waktu berlaku
      ] // line 23 : Penutup array terms promo 1
    }, // line 24 : Penutup objek promo 1
    { // line 25 : Objek data penawaran promo ke-2
      id: 2, // line 26 : ID unik promo diskon pelajar
      discount: "20%", // line 27 : Besaran potongan harga diskon 20%
      subtitle: "HEMAT MAHASISWA", // line 28 : Subjudul target segmen mahasiswa dan pelajar
      title: "Diskon Pelajar 20%", // line 29 : Judul promosi khusus pelajar
      image: cappuccino, // line 30 : Gambar pendukung promo berupa sajian cappuccino
      description: // line 31 : Kunci deskripsi singkat promo pelajar
        "Khusus pelajar dan mahasiswa dengan kartu pelajar aktif.", // line 32 : Keterangan syarat kepemilikan kartu pelajar/mahasiswa
      terms: [ // line 33 : Array syarat dan ketentuan promo pelajar
        "Tunjukkan kartu pelajar/mahasiswa", // line 34 : Syarat verifikasi identitas fisik kepada kasir
        "Berlaku setiap hari", // line 35 : Ketentuan hari operasional
        "Maksimal 2 item" // line 36 : Batas kuota pembelian per transaksi
      ] // line 37 : Penutup array terms promo 2
    }, // line 38 : Penutup objek promo 2
    { // line 39 : Objek data penawaran promo ke-3
      id: 3, // line 40 : ID unik paket kombo hemat
      discount: "15%", // line 41 : Besaran potongan harga 15% untuk paket bundling
      subtitle: "PAKET KOMBO", // line 42 : Subjudul promo bundling makanan dan minuman
      title: "Paket Ngopi + Croissant", // line 43 : Judul paket pairing kopi pilihan dan pastry
      image: croissant, // line 44 : Gambar ilustrasi croissant renyah
      description: // line 45 : Kunci deskripsi keuntungan paket kombo
        "Nikmati kopi pilihan dengan Croissant dalam satu paket hemat.", // line 46 : Teks penjelasan kenikmatan ngopi sambil ngemil
      terms: [ // line 47 : Array syarat dan ketentuan paket kombo
        "Berlaku untuk menu paket tertentu", // line 48 : Pilihan menu kopi yang termasuk paket
        "Selama persediaan tersedia", // line 49 : Ketergantungan stok harian dapur
        "Tidak dapat ditukar dengan menu lain" // line 50 : Ketentuan fiksasi menu bundling
      ] // line 51 : Penutup array terms promo 3
    } // line 52 : Penutup objek promo 3
  ]; // line 53 : Penutup array promos
// line 54 : Baris kosong pemisah
  return ( // line 55 : Mengembalikan elemen JSX antarmuka bagian promo
    <section /* line 56 : Tag pembuka elemen section penampung promo */
      id="promo" /* line 57 : Anchor id untuk tautan menu navigasi #promo */
      className="bg-[#f8f3ed] px-8 py-20" /* line 58 : Styling latar belakang krem lembut dengan padding vertikal dan horizontal */
    > {/* line 59 : Penutup tag pembuka section */}
      <div className="mb-12 text-center" data-reveal> {/* line 60 : Header judul section promo dengan animasi data-reveal dan teks tengah */}
        <h2 /* line 61 : Tag heading judul utama */
          className="text-4xl font-bold text-[#4b2e1f]" /* line 62 : Ukuran font besar 4xl, tebal, dengan warna cokelat tua pekat */
        > {/* line 63 : Penutup tag pembuka h2 */}
          Promo Hari Ini {/* line 64 : Teks headline judul promo */}
        </h2> {/* line 65 : Penutup tag h2 */}
{/* line 66 : Baris kosong pemisah */}
        <p className="mt-3 text-gray-600"> {/* line 67 : Subjudul kecil deskripsi promo berwarna abu-abu */}
          Penawaran spesial dari Kopi Ruang Kita {/* line 68 : Teks subjudul pengantar promo */}
        </p> {/* line 69 : Penutup tag paragraf subjudul */}
      </div> {/* line 70 : Penutup div header promo */}
{/* line 71 : Baris kosong pemisah */}
      <div /* line 72 : Wadah pembungkus daftar kartu promo */
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3" /* line 73 : Grid responsif 1 kolom pada ponsel dan 3 kolom pada layar tablet/desktop */
      > {/* line 74 : Penutup tag pembuka grid */}
        {promos.map((promo) => ( // line 75 : Mengiterasi array promos untuk membuat kartu promo secara dinamis
          <div /* line 76 : Kartu masing-masing item promo */
            key={promo.id} /* line 77 : Kunci unik React untuk efisiensi reconciler DOM */
            data-reveal /* line 78 : Atribut pemicu animasi scroll reveal */
            style={{ transitionDelay: `${(promo.id - 1) * 100}ms` }} /* line 79 : Waktu delay animasi berjenjang (0ms, 100ms, 200ms) */
            className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl" /* line 80 : Gaya kartu modern dengan sudut rounded-3xl dan efek hover melayang ke atas */
          > {/* line 81 : Penutup pembuka kartu */}
            <div className="relative overflow-hidden"> {/* line 82 : Pembungkus gambar dengan posisi relative untuk menampung badge diskon */}
              <img /* line 83 : Elemen foto promo produk */
                src={promo.image} /* line 84 : Sumber URL/path gambar promo */
                alt={promo.title} /* line 85 : Teks alternatif aksesibilitas foto */
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110" /* line 86 : Tinggi 56 satuan (224px), object cover, dengan animasi zoom saat hover */
              /> {/* line 87 : Penutup tag img */}
{/* line 88 : Baris kosong pemisah */}
              <span /* line 89 : Elemen label badge diskon */
                className="absolute top-4 left-4 rounded-full bg-[#d6a85f] px-4 py-2 text-sm font-bold text-white" /* line 90 : Posisi badge mengambang di pojok kiri atas berwarna emas karamel */
              > {/* line 91 : Penutup pembuka span badge */}
                Diskon {promo.discount} {/* line 92 : Menampilkan persentase diskon */}
              </span> {/* line 93 : Penutup span badge */}
            </div> {/* line 94 : Penutup div pembungkus foto dan badge */}
{/* line 95 : Baris kosong pemisah */}
            <div className="flex flex-1 flex-col p-6"> {/* line 96 : Kontainer teks informasi di dalam kartu promo dengan layout flex column */}
              <p /* line 97 : Paragraf penampil subjudul */
                className="text-sm font-semibold text-[#b88646]" /* line 98 : Teks kategori berukuran kecil warna emas karamel */
              > {/* line 99 : Penutup tag pembuka p */}
                {promo.subtitle} {/* line 100 : Teks subjudul promo */}
              </p> {/* line 101 : Penutup tag p */}
{/* line 102 : Baris kosong pemisah */}
              <h3 /* line 103 : Heading nama penawaran promo */
                className="mt-3 text-2xl font-bold text-[#4b2e1f]" /* line 104 : Tipografi berukuran 2xl tebal dengan warna kopi tua */
              > {/* line 105 : Penutup pembuka h3 */}
                {promo.title} {/* line 106 : Menampilkan nama judul promo */}
              </h3> {/* line 107 : Penutup tag h3 */}
{/* line 108 : Baris kosong pemisah */}
              <p /* line 109 : Paragraf ringkasan isi promo */
                className="mt-3 flex-1 text-sm text-gray-600" /* line 110 : Kelas flex-1 agar tinggi paragraf mengisi ruang kartu secara seragam */
              > {/* line 111 : Penutup pembuka p */}
                {promo.description} {/* line 112 : Menampilkan deskripsi promo */}
              </p> {/* line 113 : Penutup tag p */}
{/* line 114 : Baris kosong pemisah */}
              <button /* line 115 : Tombol interaktif untuk membuka popup detail promo */
                onClick={() => setShowPromo(promo)} /* line 116 : Mengisi state showPromo dengan data item yang diklik agar modal terbuka */
                className="mt-6 cursor-pointer rounded-full bg-[#8b5e3c] px-6 py-3 font-semibold text-white transition hover:bg-[#6f4e37]" /* line 117 : Gaya tombol melingkar penuh bernuansa cokelat dengan efek transisi warna hover */
              > {/* line 118 : Penutup pembuka button */}
                Lihat Promo {/* line 119 : Label teks pada tombol kartu */}
              </button> {/* line 120 : Penutup tag button */}
            </div> {/* line 121 : Penutup kontainer informasi kartu */}
            {/* line 122 : Penutup tag kartu promo */}
          </div>
        ))} {/* line 123 : Penutup perulangan map */}
      </div> {/* line 124 : Penutup kontainer grid kartu */}
{/* line 125 : Baris kosong pemisah */}
      {showPromo && ( // line 126 : Modal hanya dirender ketika state showPromo memiliki objek data promo terpilih
        <div /* line 127 : Lapisan overlay latar belakang gelap di seluruh layar */
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" /* line 128 : Posisi fixed di z-index 50 dengan latar hitam transparan 50% */
        > {/* line 129 : Penutup pembuka overlay */}
          <div /* line 130 : Kotak dialog modal konten */
            className="relative w-full max-w-xl rounded-3xl bg-[#f8f3ed] p-8" /* line 131 : Kotak dialog selebar maksimal xl bernuansa krem lembut dengan padding 8 */
          > {/* line 132 : Penutup pembuka dialog */}
            <button /* line 133 : Tombol silang untuk menutup modal */
              onClick={() => setShowPromo(null)} /* line 134 : Mengembalikan state showPromo menjadi null sehingga modal tertutup */
              className="absolute top-5 right-6 cursor-pointer text-3xl text-[#6f4e37]" /* line 135 : Posisi tombol di pojok kanan atas modal */
            > {/* line 136 : Penutup pembuka tombol close */}
              × {/* line 137 : Simbol tanda silang (close) */}
            </button> {/* line 138 : Penutup button close */}
{/* line 139 : Baris kosong pemisah */}
            <p /* line 140 : Teks subjudul dan badge diskon di dalam modal */
              className="font-semibold text-[#b88646]" /* line 141 : Tipografi tebal warna emas karamel */
            > {/* line 142 : Penutup tag pembuka p */}
              {showPromo.subtitle} · DISKON {showPromo.discount} {/* line 143 : Menampilkan nama subkategori dan nilai potongan diskon */}
            </p> {/* line 144 : Penutup tag p */}
{/* line 145 : Baris kosong pemisah */}
            <img /* line 146 : Gambar produk promo di dalam modal popup */
              src={showPromo.image} /* line 147 : Path sumber gambar produk yang sedang dilihat */
              alt={showPromo.title} /* line 148 : Teks alternatif foto promo */
              className="mt-4 h-56 w-full rounded-2xl object-cover" /* line 149 : Gambar setinggi 224px dengan sudut membulat 2xl */
            /> {/* line 150 : Penutup tag img */}
{/* line 151 : Baris kosong pemisah */}
            <h2 /* line 152 : Judul nama promo di dalam popup modal */
              className="mt-6 text-3xl font-bold text-[#4b2e1f]" /* line 153 : Teks judul ukuran 3xl warna cokelat tua */
            > {/* line 154 : Penutup pembuka h2 */}
              {showPromo.title} {/* line 155 : Menampilkan judul promo yang aktif */}
            </h2> {/* line 156 : Penutup tag h2 */}
{/* line 157 : Baris kosong pemisah */}
            <p /* line 158 : Paragraf deskripsi detail promo di modal */
              className="mt-4 text-gray-600" /* line 159 : Teks deskripsi abu-abu mudah dibaca */
            > {/* line 160 : Penutup pembuka p */}
              {showPromo.description} {/* line 161 : Isi penjelasan rinci promo */}
            </p> {/* line 162 : Penutup tag p */}
{/* line 163 : Baris kosong pemisah */}
            <ul /* line 164 : Daftar poin syarat & ketentuan promo */
              className="mt-5 list-disc space-y-2 pl-5 text-gray-600" /* line 165 : Format bullet list disc dengan jarak vertikal rapi */
            > {/* line 166 : Penutup tag pembuka ul */}
              {showPromo.terms.map((term, index) => ( // line 167 : Melakukan iterasi daftar syarat promo (terms)
                <li key={index}> {/* line 168 : Butir daftar syarat promo dengan indeks sebagai key */}
                  {term} {/* line 169 : Teks butir syarat dan ketentuan */}
                  {/* line 170 : Penutup butir li */}
                </li>
              ))} {/* line 171 : Penutup pemetaan terms */}
            </ul> {/* line 172 : Penutup daftar ul */}
{/* line 173 : Baris kosong pemisah */}
            <a /* line 174 : Tombol aksi penutup modal untuk mengarahkan pengguna ke kontak pemesanan */
              href="#kontak" /* line 175 : Menghubungkan langsung ke formulir kontak di bawah */
              className="mt-8 inline-block cursor-pointer rounded-full bg-[#c88b38] px-8 py-3 font-semibold text-[#4b2e1f] transition hover:bg-[#b77a2d]" /* line 176 : Tombol berdesain bundar dengan warna emas hangat */
            > {/* line 177 : Penutup tag pembuka a */}
              Tanya Promo {/* line 178 : Teks label tombol aksi penanya promo */}
            </a> {/* line 179 : Penutup tag anchor a */}
          </div> {/* line 180 : Penutup wadah isi dialog modal */}
        </div> /* line 181 : Penutup wadah overlay modal */
      )} {/* line 182 : Penutup conditional rendering modal */}
    </section> /* line 183 : Penutup section promo */
  ); // line 184 : Penutup pernyataan return
} // line 185 : Penutup fungsi komponen Promo
// line 186 : Baris kosong pemisah
export default Promo; // line 187 : Mengekspor komponen Promo sebagai default export
