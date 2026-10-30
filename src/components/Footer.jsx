function Footer() { // line 1 : Mendefinisikan komponen fungsional Footer untuk bagian kaki halaman website
  return ( // line 2 : Mengembalikan elemen JSX untuk dirender
    <footer className="site-footer mt-16 border-t border-[#EBE3D5] bg-[#FAF7F2] px-6 py-12 sm:px-12" id="footer"> {/* line 3 : Elemen semantik footer dengan border atas krem dan id='footer' untuk target navigasi */}
      <div className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-8 text-sm md:grid-cols-4"> {/* line 4 : Kontainer grid 4 kolom responsif untuk informasi footer pada layar desktop */}
        {/* Kolom 1: Brand & Bio */} {/* line 5 : Komentar penanda bagian kolom 1: identitas merek dan bio singkat */}
        <div className="md:col-span-1" data-reveal> {/* line 6 : Kolom pertama dengan animasi reveal */}
          <a className="brand footer-brand mb-3 inline-flex" href="#home"> {/* line 7 : Logo brand yang dapat diklik untuk kembali ke bagian atas halaman */}
            <span className="brand-mark" aria-hidden="true">K</span> {/* line 8 : Inisial huruf 'K' dalam lingkaran estetis */}
            <span> {/* line 9 : Pembungkus teks nama brand dan slogan */}
              <strong>Kopi Ruang Kita</strong> {/* line 10 : Nama bisnis coffee shop */}
              <small>Tempat pulang sejenak</small> {/* line 11 : Tagline kedai kopi */}
            </span> {/* line 12 : Penutup pembungkus teks brand */}
          </a> {/* line 13 : Penutup link brand */}
          <p className="mt-2 text-xs leading-relaxed text-[#746658]"> {/* line 14 : Paragraf deskripsi ringkas tentang kedai */}
            Ruang hangat untuk kopi dan cerita sederhana di Kota Medan. {/* line 15 : Teks penjelasan lokasi dan esensi Kopi Ruang Kita */}
          </p> {/* line 16 : Penutup paragraf deskripsi */}
        </div> {/* line 17 : Penutup kolom 1 */}
{/* line 18 : Baris kosong pemisah antar kolom */}
        {/* Kolom 2: Alamat */} {/* line 19 : Komentar penanda bagian kolom 2: alamat fisik lokasi kedai */}
        <div data-reveal style={{ transitionDelay: "100ms" }}> {/* line 20 : Kolom kedua dengan delay animasi 100ms */}
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Alamat</h4> {/* line 21 : Judul subbagian Alamat dengan font serif */}
          <p className="text-xs leading-relaxed text-[#746658]"> {/* line 22 : Detail teks alamat kedai */}
            Jl. Sudirman No. 45 (Area Komersial &amp; Work-space)<br /> {/* line 23 : Nama jalan dan keterangan kawasan dengan jeda baris */}
            Kota Medan, Sumatera Utara 20151 {/* line 24 : Kota, provinsi, dan kode pos lokasi kedai */}
          </p> {/* line 25 : Penutup paragraf alamat */}
        </div> {/* line 26 : Penutup kolom 2 */}
{/* line 27 : Baris kosong pemisah antar kolom */}
        {/* Kolom 3: Jam Buka & Kontak */} {/* line 28 : Komentar penanda bagian kolom 3: jam operasional dan kanal komunikasi */}
        <div data-reveal style={{ transitionDelay: "200ms" }}> {/* line 29 : Kolom ketiga dengan delay animasi 200ms */}
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Jam Buka &amp; Kontak</h4> {/* line 30 : Judul subbagian jam operasional dan kontak */}
          <p className="mb-2 text-xs leading-relaxed text-[#746658]"> {/* line 31 : Informasi jadwal operasional harian */}
            <strong>Setiap Hari:</strong> 08.00 – 22.00 WIB {/* line 32 : Jam operasional buka pagi hingga malam */}
          </p> {/* line 33 : Penutup paragraf jadwal */}
          <p className="text-xs leading-relaxed text-[#746658]"> {/* line 34 : Detail nomor telepon WhatsApp dan alamat email resmi */}
            <strong>Telepon / WA:</strong> +62 812-3456-7890<br /> {/* line 35 : Nomor kontak layanan pelanggan kedai */}
            <strong>Email:</strong> halo@kopiruangkita.com {/* line 36 : Alamat surel kontak resmi */}
          </p> {/* line 37 : Penutup paragraf kontak */}
        </div> {/* line 38 : Penutup kolom 3 */}
{/* line 39 : Baris kosong pemisah antar kolom */}
        {/* Kolom 4: Media Sosial */} {/* line 40 : Komentar penanda bagian kolom 4: tautan akun sosial media */}
        <div data-reveal style={{ transitionDelay: "300ms" }}> {/* line 41 : Kolom keempat dengan delay animasi 300ms */}
          <h4 className="mb-3 font-serif text-base font-bold text-[#513722]">Media Sosial</h4> {/* line 42 : Judul subbagian Media Sosial */}
          <div className="flex flex-col gap-2 text-xs"> {/* line 43 : Daftar link media sosial vertikal dengan jarak rapat */}
            <a href="https://www.instagram.com/kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]"> {/* line 44 : Tautan ke akun profil Instagram dengan keamanan rel noopener */}
              Instagram: @kopiruangkita {/* line 45 : Username Instagram Kopi Ruang Kita */}
            </a> {/* line 46 : Penutup link Instagram */}
            <a href="https://www.tiktok.com/@kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]"> {/* line 47 : Tautan ke akun profil TikTok resmi */}
              TikTok: @kopiruangkita {/* line 48 : Username akun TikTok */}
            </a> {/* line 49 : Penutup link TikTok */}
            <a href="https://www.facebook.com/kopiruangkita" target="_blank" rel="noopener noreferrer" className="text-[#746658] transition hover:text-[#513722]"> {/* line 50 : Tautan ke halaman Facebook resmi */}
              Facebook: Kopi Ruang Kita {/* line 51 : Nama halaman Facebook */}
            </a> {/* line 52 : Penutup link Facebook */}
          </div> {/* line 53 : Penutup daftar link media sosial */}
        </div> {/* line 54 : Penutup kolom 4 */}
      </div> {/* line 55 : Penutup baris grid konten utama footer */}
{/* line 56 : Baris kosong pemisah */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#EBE3D5] pt-6 text-xs text-[#8b897f] sm:flex-row" data-reveal> {/* line 57 : Baris pembatas bawah footer untuk hak cipta dan navigasi kembali ke atas */}
        <span className="copyright">© {new Date().getFullYear()} Kopi Ruang Kita. Hak cipta dilindungi.</span> {/* line 58 : Informasi hak cipta dinamis menggunakan tahun saat ini melalui new Date().getFullYear() */}
        <a className="back-to-top font-medium text-[#513722] hover:underline" href="#home"> {/* line 59 : Tombol pintas untuk melompat kembali ke bagian atas website (#home) */}
          Kembali ke atas <span aria-hidden="true">↑</span> {/* line 60 : Teks tombol dilengkapi simbol panah ke atas */}
        </a> {/* line 61 : Penutup link kembali ke atas */}
      </div> {/* line 62 : Penutup baris bawah footer */}
    </footer> /* line 63 : Penutup elemen tag footer */
  ); // line 64 : Penutup return
} // line 65 : Penutup fungsi komponen Footer
// line 66 : Baris kosong pemisah
export default Footer; // line 67 : Mengekspor komponen Footer sebagai default export
