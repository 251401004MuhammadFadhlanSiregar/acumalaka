# Kopi Ruang Kita

Website profil coffee shop **Kopi Ruang Kita** — proyek UTS Pemrograman Web (ILK2106), Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Sumatera Utara.

> Live: https://kopi-ruang-kita.vercel.app

## Tentang
Landing page satu halaman (7 section utama) untuk coffee shop fiktif di Kota Medan: memperkenalkan tempat, menu, promo, dan informasi lokasi. Data bersifat dummy/statis — tanpa backend dan tanpa database.

## Teknologi
- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- JavaScript (ES modules)

## Section
Navbar · Hero · Tentang Kami · Menu Coffee Shop · Promo Hari Ini · Hubungi Kami · Footer

## Fitur
- **Filter kategori menu** — tombol All / Coffee / Non-Coffee / Snack menampilkan-menyembunyikan menu (20 produk)
- **Modal promo** — tombol "Lihat Promo" menampilkan detail promo beserta syarat & ketentuan
- **Validasi form** — form "Hubungi Kami" memeriksa seluruh field terisi dan format email
- **Animasi** — scroll-reveal pada section, hover pada card, indikator buka/tutup toko yang diperbarui tiap menit
- **Responsif** — layout menyesuaikan desktop dan smartphone

## Menjalankan secara lokal
```bash
npm install
npm run dev      # server pengembangan
npm run build    # build produksi
npm run preview  # pratinjau hasil build
```

## Struktur
```
src/
├── App.jsx          # komposisi halaman + animasi scroll-reveal
├── App.css          # gaya kustom
├── index.css        # Tailwind
└── components/      # Navbar, Hero, About, Menu, Promo, Contact, Footer
```

## Tim
Proyek dikerjakan secara tim. Kontribusi terlihat di [riwayat commit](https://github.com/axelmychro/kopi-ruang-kita/commits/main).
