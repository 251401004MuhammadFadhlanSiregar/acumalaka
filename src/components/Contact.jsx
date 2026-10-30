import { useState } from "react"; // line 1 : Mengimpor hook useState dari pustaka React untuk manajemen state lokal formulir
// line 2 : Baris kosong pemisah visual
export default function Contact() { // line 3 : Mendefinisikan dan mengekspor fungsi komponen formulir Kontak (Contact)
  const [formData, setFormData] = useState({ // line 4 : Mendeklarasikan state formData untuk menampung nilai input pengguna
    nama: "", // line 5 : Nilai awal field input nama berupa string kosong
    email: "", // line 6 : Nilai awal field input email berupa string kosong
    pesan: "", // line 7 : Nilai awal field textarea saran/pesan berupa string kosong
  }); // line 8 : Penutup inisialisasi state formData
  const [errorMsg, setErrorMsg] = useState(""); // line 9 : State untuk menyimpan dan menampilkan pesan error validasi input
  const [successMsg, setSuccessMsg] = useState(""); // line 10 : State untuk menyimpan dan menampilkan pesan konfirmasi berhasil kirim
// line 11 : Baris kosong pemisah
  const handleChange = (e) => { // line 12 : Handler event onChange generik untuk menangkap ketikan pada seluruh elemen input
    const { name, value } = e.target; // line 13 : Melakukan destructuring nama atribut input (name) dan isi nilainya (value)
    setFormData((prev) => ({ ...prev, [name]: value })); // line 14 : Memperbarui state secara immutable dengan mempertahankan field lainnya
  }; // line 15 : Penutup fungsi handleChange
// line 16 : Baris kosong pemisah
  const handleSubmit = (e) => { // line 17 : Handler event onSubmit yang dieksekusi saat tombol 'Kirim Pesan' diklik
    e.preventDefault(); // line 18 : Mencegah aksi submit default browser (mencegah reload seluruh halaman)
    setErrorMsg(""); // line 19 : Mereset pesan error sebelumnya menjadi kosong
    setSuccessMsg(""); // line 20 : Mereset pesan sukses sebelumnya menjadi kosong
// line 21 : Baris kosong pemisah
    const trimmedNama = formData.nama.trim(); // line 22 : Menghilangkan spasi kosong di awal dan akhir teks nama
    const trimmedEmail = formData.email.trim(); // line 23 : Menghilangkan spasi kosong di awal dan akhir teks email
    const trimmedPesan = formData.pesan.trim(); // line 24 : Menghilangkan spasi kosong di awal dan akhir teks pesan
// line 25 : Baris kosong pemisah
    if (!trimmedNama || !trimmedEmail || !trimmedPesan) { // line 26 : Validasi kelengkapan: mengecek apakah ada field yang masih belum diisi
      setErrorMsg("Semua field wajib diisi dengan lengkap."); // line 27 : Menetapkan pesan peringatan bahwa semua kolom formulir wajib diisi
      return; // line 28 : Menghentikan proses pengiriman formulir jika validasi gagal
    } // line 29 : Penutup kondisi validasi kelengkapan
// line 30 : Baris kosong pemisah
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // line 31 : Pola ekspresi reguler (Regex) untuk memverifikasi keabsahan struktur alamat email
    if (!emailRegex.test(trimmedEmail)) { // line 32 : Menguji apakah email yang diinput sesuai format regex
      setErrorMsg("Format email tidak valid (pastikan mengandung '@' dan domain yang benar)."); // line 33 : Memberitahu pengguna bahwa format email salah
      return; // line 34 : Menghentikan alur submit jika format email tidak valid
    } // line 35 : Penutup kondisi validasi format email
// line 36 : Baris kosong pemisah
    setSuccessMsg("Terima kasih! Pesanmu berhasil dikirim ke ruang kita."); // line 37 : Menampilkan pesan apresiasi dan status berhasil kirim ke pengguna
    setFormData({ nama: "", email: "", pesan: "" }); // line 38 : Mengosongkan kembali seluruh input formulir (reset form) setelah sukses
  }; // line 39 : Penutup fungsi handleSubmit
// line 40 : Baris kosong pemisah
  return ( // line 41 : Mengembalikan elemen JSX untuk antarmuka formulir kontak
    <section className="contact-section bg-[#FAF7F2] px-6 py-20" id="kontak"> {/* line 42 : Section pembungkus dengan latar belakang krem dan id='kontak' */}
      <div className="mx-auto max-w-180 rounded-2xl border border-[#EBE3D5] bg-white p-8 shadow-md sm:p-12" data-reveal> {/* line 43 : Kartu formulir putih di tengah layar dengan bayangan lembut dan sudut melengkung */}
        <div className="mb-10 text-center"> {/* line 44 : Header bagian kontak dengan teks rata tengah */}
          <h2 className="mb-3 font-serif text-3xl font-bold text-[#513722] sm:text-4xl">Hubungi Kami</h2> {/* line 45 : Judul utama formulir dengan font serif bernuansa hangat */}
          <p className="text-sm leading-relaxed text-[#746658] sm:text-base"> {/* line 46 : Kalimat ajakan ramah kepada pengunjung */}
            Punya saran, pertanyaan, atau ingin menyapa? Kirim pesan ke ruang kita. {/* line 47 : Teks deskripsi pengantar formulir kontak */}
          </p> {/* line 48 : Penutup paragraf ajakan */}
        </div> {/* line 49 : Penutup header formulir */}
{/* line 50 : Baris kosong pemisah */}
        {errorMsg && ( // line 51 : Conditional rendering: kotak alert merah hanya muncul jika terdapat pesan error
          <div className="animate-fade-in mb-6 rounded-lg border border-[#F5C6CB] bg-[#FDF2F2] p-4 text-sm text-[#A94442]"> {/* line 52 : Kotak peringatan error bernuansa merah lembut dengan animasi fade-in */}
            {errorMsg} {/* line 53 : Menampilkan teks pesan kesalahan validasi */}
          </div> /* line 54 : Penutup kotak pesan error */
        )} {/* line 55 : Penutup blok conditional rendering error */}
{/* line 56 : Baris kosong pemisah */}
        {successMsg && ( // line 57 : Conditional rendering: kotak alert hijau hanya muncul jika pesan sukses terisi
          <div className="animate-fade-in mb-6 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-sm text-[#15803D]"> {/* line 58 : Kotak notifikasi sukses bernuansa hijau segar */}
            {successMsg} {/* line 59 : Menampilkan teks pesan konfirmasi keberhasilan pengiriman */}
          </div> /* line 60 : Penutup kotak pesan sukses */
        )} {/* line 61 : Penutup blok conditional rendering sukses */}
{/* line 62 : Baris kosong pemisah */}
        <form onSubmit={handleSubmit} className="space-y-6"> {/* line 63 : Elemen tag form yang terikat dengan event handler handleSubmit */}
          <div> {/* line 64 : Grup field input nama */}
            <label htmlFor="nama" className="mb-2 block text-sm font-semibold text-[#513722]"> {/* line 65 : Label teks untuk input nama pengguna */}
              Nama <span className="text-amber-700">*</span> {/* line 66 : Label nama dengan tanda bintang merah kecokelatan penanda wajib diisi */}
            </label> {/* line 67 : Penutup label nama */}
            <input /* line 68 : Elemen input field teks nama */
              type="text" /* line 69 : Tipe input berbasis teks */
              id="nama" /* line 70 : ID unik untuk menghubungkan input dengan label htmlFor='nama' */
              name="nama" /* line 71 : Atribut nama input yang sesuai dengan properti pada state formData */
              value={formData.nama} /* line 72 : Mengikat nilai input secara langsung ke state formData.nama (controlled component) */
              onChange={handleChange} /* line 73 : Memicu pembaruan state setiap kali pengguna mengetik karakter baru */
              placeholder="Masukkan nama lengkap" /* line 74 : Teks placeholder petunjuk pengisian nama */
              className="w-full rounded-lg border border-[#D9CEBF] bg-[#FCFBF8] px-4 py-3 text-sm text-[#34291f] transition focus:bg-white focus:ring-2 focus:ring-[#8E6F53] focus:outline-none" /* line 75 : Styling border, efek fokus ring kecokelatan, dan transisi halus */
            /> {/* line 76 : Penutup tag input nama */}
          </div> {/* line 77 : Penutup grup field nama */}
{/* line 78 : Baris kosong pemisah */}
          <div> {/* line 79 : Grup field input email */}
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#513722]"> {/* line 80 : Label teks untuk input email */}
              Email <span className="text-amber-700">*</span> {/* line 81 : Label email dengan penanda bintang wajib diisi */}
            </label> {/* line 82 : Penutup label email */}
            <input /* line 83 : Elemen input field email */
              type="email" /* line 84 : Tipe input khusus email untuk validasi bawaan browser */
              id="email" /* line 85 : ID unik elemen input email */
              name="email" /* line 86 : Atribut name yang merujuk pada formData.email */
              value={formData.email} /* line 87 : Nilai input yang terikat langsung ke state (controlled component) */
              onChange={handleChange} /* line 88 : Memperbarui state email saat input diketik */
              placeholder="contoh@email.com" /* line 89 : Contoh format alamat email sebagai panduan pengguna */
              className="w-full rounded-lg border border-[#D9CEBF] bg-[#FCFBF8] px-4 py-3 text-sm text-[#34291f] transition focus:bg-white focus:ring-2 focus:ring-[#8E6F53] focus:outline-none" /* line 90 : Styling visual input email yang konsisten */
            /> {/* line 91 : Penutup tag input email */}
          </div> {/* line 92 : Penutup grup field email */}
{/* line 93 : Baris kosong pemisah */}
          <div> {/* line 94 : Grup field input pesan / saran */}
            <label htmlFor="pesan" className="mb-2 block text-sm font-semibold text-[#513722]"> {/* line 95 : Label teks untuk textarea pesan */}
              Saran / Pesan / Masukan <span className="text-amber-700">*</span> {/* line 96 : Label pesan dengan tanda bintang wajib */}
            </label> {/* line 97 : Penutup label pesan */}
            <textarea /* line 98 : Elemen textarea multi-baris untuk saran atau pertanyaan panjang */
              id="pesan" /* line 99 : ID unik elemen textarea pesan */
              name="pesan" /* line 100 : Atribut nama yang merujuk pada formData.pesan */
              rows="4" /* line 101 : Menetapkan tinggi tampilan awal sebanyak 4 baris teks */
              value={formData.pesan} /* line 102 : Menghubungkan isi teks textarea dengan state (controlled component) */
              onChange={handleChange} /* line 103 : Mengupdate isi state setiap terjadi perubahan teks */
              placeholder="Tuliskan pesan atau masukanmu di sini..." /* line 104 : Petunjuk teks di dalam area ketikan pesan */
              className="w-full resize-y rounded-lg border border-[#D9CEBF] bg-[#FCFBF8] px-4 py-3 text-sm text-[#34291f] transition focus:bg-white focus:ring-2 focus:ring-[#8E6F53] focus:outline-none" /* line 105 : Pengaturan style input area teks dengan izin resize vertikal */
            ></textarea> {/* line 106 : Penutup tag textarea */}
          </div> {/* line 107 : Penutup grup field pesan */}
{/* line 108 : Baris kosong pemisah */}
          <button /* line 109 : Elemen tombol untuk mengirimkan data formulir */
            type="submit" /* line 110 : Menentukan tombol bertipe submit untuk mengeksekusi form */
            className="inline-flex w-full transform cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#513722] px-8 py-3.5 text-sm font-medium text-[#FFFDF8] shadow-md transition hover:-translate-y-0.5 hover:bg-[#3D2817] sm:w-auto" /* line 111 : Styling tombol cokelat kopi hangat dengan efek hover terangkat sedikit */
          > {/* line 112 : Pembungkus isi teks tombol */}
            Kirim Pesan <span aria-hidden="true">→</span> {/* line 113 : Label tombol dilengkapi tanda panah dekoratif */}
          </button> {/* line 114 : Penutup tombol submit */}
        </form> {/* line 115 : Penutup elemen form */}
      </div> {/* line 116 : Penutup kartu formulir */}
    </section> /* line 117 : Penutup section kontak */
  ); // line 118 : Penutup return statement
} // line 119 : Penutup fungsi komponen Contact
