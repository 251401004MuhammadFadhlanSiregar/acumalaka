import about1 from "../assets/section-about-1.jpg"; // line 1 : Mengimpor gambar lokal pertama untuk bagian galeri tentang kami
import about2 from "../assets/section-about-2.jpg"; // line 2 : Mengimpor gambar lokal kedua yang menampilkan area duduk kedai
function About() { // line 3 : Mendeklarasikan komponen About untuk menampilkan profil dan keunggulan Kopi Ruang Kita
  return ( // line 4 : Mengembalikan elemen JSX untuk dirender ke halaman
    <section className="about-section" id="tentang"> {/* line 5 : Section pembungkus dengan latar belakang krem lebar penuh dan anchor id='tentang' */}
      <div className="about-content"> {/* line 6 : Kontainer isi dengan CSS grid responsif untuk membagi teks dan galeri */}
        <div className="about-copy" data-reveal="left"> {/* line 7 : Kolom teks deskripsi cerita kedai dengan animasi reveal bergeser dari kiri */}
          <h2>Tentang Kami</h2> {/* line 8 : Judul bagian Tentang Kami dengan tipografi serif elegan */}
          <p> {/* line 9 : Paragraf pertama tentang visi dan pengenalan Kopi Ruang Kita */}
            <strong>Kopi Ruang Kita</strong> adalah coffee shop baru di Kota {/* line 10 : Teks tebal nama kedai kopi dan lokasinya di Kota Medan */}
            Medan yang menyajikan kopi pilihan nusantara dan dunia dalam suasana {/* line 11 : Informasi mengenai jenis kopi yang disajikan */}
            yang nyaman dan hangat. Kami percaya secangkir kopi bisa menjadi {/* line 12 : Filosofi kedai mengenai kenyamanan dan kehangatan */}
            awal dari banyak cerita baru. {/* line 13 : Nilai kebersamaan yang diusung oleh kedai kopi */}
          </p> {/* line 14 : Penutup paragraf pertama */}
          <p> {/* line 15 : Paragraf kedua mengenai ragam menu dan fasilitas kedai */}
            Dari Kopi Susu Gula Aren andalan sampai camilan hangat seperti Roti {/* line 16 : Menu favorit minuman dan makanan pendamping */}
            Bakar dan Croissant, semua disajikan segar setiap hari. Tersedia {/* line 17 : Jaminan kesegaran bahan makanan yang disajikan */}
            area indoor dan corner Wi-Fi untuk kamu yang ingin work-from-cafe. {/* line 18 : Informasi fasilitas WFC (work from cafe) dan Wi-Fi */}
          </p> {/* line 19 : Penutup paragraf kedua */}
          <ul className="about-highlights"> {/* line 20 : Daftar unordered list poin-poin keunggulan kedai kopi */}
            <li> {/* line 21 : Butir keunggulan pertama */}
              <span aria-hidden="true">✓</span> Biji kopi pilihan Gayo &amp; {/* line 22 : Ikon centang hijau dekoratif dan asal biji kopi Gayo */}
              Toraja {/* line 23 : Asal biji kopi Toraja nusantara */}
            </li> {/* line 24 : Penutup butir keunggulan pertama */}
            <li> {/* line 25 : Butir keunggulan kedua */}
              <span aria-hidden="true">✓</span> Area nyaman &amp; Wi-Fi gratis {/* line 26 : Fasilitas ruangan yang nyaman dan akses koneksi internet cepat */}
            </li> {/* line 27 : Penutup butir keunggulan kedua */}
            <li> {/* line 28 : Butir keunggulan ketiga */}
              <span aria-hidden="true">✓</span> Buka setiap hari 08.00 – 22.00 {/* line 29 : Informasi jadwal jam operasional kedai kopi */}
            </li> {/* line 30 : Penutup butir keunggulan ketiga */}
          </ul> {/* line 31 : Penutup daftar poin keunggulan */}
        </div> {/* line 32 : Penutup kolom teks about-copy */}
{/* line 33 : Baris kosong pemisah kolom visual */}
        <div className="about-gallery" aria-label="Suasana Kopi Ruang Kita"> {/* line 34 : Kolom galeri foto dua gambar bertumpuk asimetris */}
          <img /* line 35 : Gambar pertama galeri suasana meja barista */
            className="about-photo about-photo-first" /* line 36 : Class styling foto dengan sudut membulat dan bayangan lembut */
            data-reveal="right" /* line 37 : Animasi reveal geser dari kanan */
            style={{ transitionDelay: "100ms" }} /* line 38 : Waktu tunda animasi sebesar 100ms */
            src={about1} /* line 39 : Mengaitkan file gambar hasil impor about1 */
            alt="Bar kopi dengan suasana hangat" /* line 40 : Deskripsi aksesibilitas gambar bar kopi */
            loading="lazy" /* line 41 : Lazy loading agar gambar dimuat hanya saat mendekati layar pengguna */
          /> {/* line 42 : Penutup tag gambar pertama */}
          <img /* line 43 : Gambar kedua galeri suasana ruang duduk */
            className="about-photo about-photo-second" /* line 44 : Class styling foto kedua dengan pergeseran vertikal translateY(12px) */
            data-reveal="right" /* line 45 : Animasi reveal geser dari kanan */
            style={{ transitionDelay: "220ms" }} /* line 46 : Waktu tunda animasi sebesar 220ms untuk efek berjenjang */
            src={about2} /* line 47 : Mengaitkan file gambar hasil impor about2 */
            alt="Area duduk nyaman di kedai kopi" /* line 48 : Deskripsi aksesibilitas gambar area duduk */
            loading="lazy" /* line 49 : Lazy loading untuk efisiensi transfer data */
          /> {/* line 50 : Penutup tag gambar kedua */}
        </div> {/* line 51 : Penutup kolom galeri about-gallery */}
      </div> {/* line 52 : Penutup kontainer about-content */}
    </section> /* line 53 : Penutup section tentang kami */
  ); // line 54 : Penutup return statement
} // line 55 : Penutup fungsi komponen About
export default About; // line 56 : Mengekspor komponen About agar dapat digunakan di App.jsx
