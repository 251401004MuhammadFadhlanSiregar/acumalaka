function Hero() { // line 1 : Mendefinisikan komponen fungsional Hero untuk bagian banner pembuka halaman utama
  return ( // line 2 : Mengembalikan elemen JSX yang akan dirender ke dalam tampilan layar
    <section className="hero"> {/* line 3 : Elemen section pembungkus hero dengan layout CSS Grid dua kolom */}
      <div className="hero-copy"> {/* line 4 : Kontainer penampung teks copywriting utama di sisi kiri */}
        <p className="eyebrow" data-reveal style={{ transitionDelay: "80ms" }}>Coffee &amp; Good Vibes</p> {/* line 5 : Teks slogan kecil di atas judul dengan animasi reveal delay 80ms */}
        <h1 data-reveal style={{ transitionDelay: "180ms" }}>Tempat singgah,<br />cerita <em>bermula.</em></h1> {/* line 6 : Judul utama (headline) dengan font serif dan penekanan kata bermula */}
        <p className="hero-description" data-reveal style={{ transitionDelay: "280ms" }}> {/* line 7 : Paragraf deskripsi pengantar konsep kedai kopi dengan animasi delay 280ms */}
          Secangkir kopi, ruang yang nyaman, dan waktu untuk menikmati {/* line 8 : Baris pertama kalimat sambutan hangat Kopi Ruang Kita */}
          hal-hal sederhana. Selamat datang di ruang kita. {/* line 9 : Baris kedua teks sambutan penjelas */}
        </p> {/* line 10 : Penutup tag paragraf deskripsi hero */}
        <a className="primary-cta inline-flex items-center gap-5" href="#menu" data-reveal style={{ transitionDelay: "380ms" }}> {/* line 11 : Tombol Call-To-Action utama yang mengarahkan pembaca langsung ke bagian daftar menu (#menu) */}
          Lihat Menu <span aria-hidden="true">→</span> {/* line 12 : Label tombol disertai ikon panah dekoratif */}
        </a> {/* line 13 : Penutup tag anchor CTA */}
        <p className="hero-note" data-reveal style={{ transitionDelay: "460ms" }}>Dibuat dengan hati, disajikan hangat.</p> {/* line 14 : Catatan kaki kecil bernada puitis dan hangat di bawah tombol CTA */}
      </div> {/* line 15 : Penutup kontainer teks hero-copy */}
{/* line 16 : Baris kosong pemisah visual antara kolom teks dan kolom gambar */}
      <div className="hero-image" data-reveal="right" style={{ transitionDelay: "180ms" }}> {/* line 17 : Kontainer gambar hero di sisi kanan dengan animasi slide-in dari arah kanan */}
        <img /* line 18 : Tag gambar utama penampil suasana kedai */
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85" /* line 19 : URL sumber foto resolusi tinggi berlisensi bebas dari Unsplash */
          alt="Suasana hangat di dalam kedai kopi" /* line 20 : Teks alternatif untuk pembaca layar (screen reader) dan aksesibilitas */
          fetchPriority="high" /* line 21 : Menginstruksikan browser agar memprioritaskan pemuatan gambar hero ini lebih awal */
        /> {/* line 22 : Penutup tag gambar img */}
      </div> {/* line 23 : Penutup kontainer pembungkus gambar */}
    </section> /* line 24 : Penutup tag section hero */
  ); // line 25 : Penutup return statement
} // line 26 : Penutup fungsi komponen Hero
// line 27 : Baris kosong pemisah sebelum ekspor
export default Hero; // line 28 : Mengekspor komponen Hero sebagai default export agar dapat diimpor di App.jsx
