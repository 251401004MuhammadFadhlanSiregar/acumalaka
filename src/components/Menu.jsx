import { useState } from "react"; // line 1 : Mengimpor hook useState dari pustaka React untuk manajemen state filter kategori menu
// line 2 : Baris kosong pemisah impor modul eksternal
import kopiSusu from "../assets/menu-coffee-susu_gula_aren.jpg"; // line 3 : Mengimpor aset gambar es kopi susu gula aren
import americano from "../assets/menu-coffee-americano.jpg"; // line 4 : Mengimpor aset gambar kopi americano
import cappuccino from "../assets/menu-coffee-cappuccino.jpg"; // line 5 : Mengimpor aset gambar cangkir kopi cappuccino
import caramel from "../assets/menu-coffee-caramel_macchiato.jpg"; // line 6 : Mengimpor aset gambar caramel macchiato
import espresso from "../assets/menu-coffee-espresso.jpg"; // line 7 : Mengimpor aset gambar espresso pekat
import latte from "../assets/menu-coffee-latte.jpg"; // line 8 : Mengimpor aset gambar minuman cafe latte
import moka from "../assets/menu-coffee-mocha.jpg"; // line 9 : Mengimpor aset gambar kopi moka dengan cokelat
// line 10 : Baris kosong pemisah kategori gambar kopi dan non-kopi
import matcha from "../assets/menu-coffee-matcha_latte.jpg"; // line 11 : Mengimpor aset gambar matcha latte premium
import thaiTea from "../assets/menu-drink-thai_tea.jpg"; // line 12 : Mengimpor aset gambar es thai tea segar
import redVelvet from "../assets/menu-coffee-red_velvet_latte.jpg"; // line 13 : Mengimpor aset gambar minuman red velvet latte
import taro from "../assets/menu-coffee-taro_latte.jpg"; // line 14 : Mengimpor aset gambar minuman taro latte ungu
import lemonTea from "../assets/menu-drink-iced_lemon_tea.jpg"; // line 15 : Mengimpor aset gambar es lemon tea segar
import cokelat from "../assets/menu-drink-cokelat_klasik.jpg"; // line 16 : Mengimpor aset gambar minuman cokelat klasik creamy
// line 17 : Baris kosong pemisah kategori gambar non-kopi dan makanan ringan
import croissant from "../assets/menu-food-croissant.jpg"; // line 18 : Mengimpor aset gambar pastry croissant renyah
import brownies from "../assets/menu-food-brownies.jpg"; // line 19 : Mengimpor aset gambar brownies cokelat lembut
import kentang from "../assets/menu-food-kentang_goreng.jpg"; // line 20 : Mengimpor aset gambar kentang goreng gurih
import roti from "../assets/menu-food-roti_bakar.jpg"; // line 21 : Mengimpor aset gambar roti bakar hangat
import donat from "../assets/menu-food-donat.jpg"; // line 22 : Mengimpor aset gambar donat lembut
import pisang from "../assets/menu-food-pisang_goreng.jpg"; // line 23 : Mengimpor aset gambar pisang goreng renyah
import cookies from "../assets/menu-food-cookies.jpg"; // line 24 : Mengimpor aset gambar camilan cookies manis
// line 25 : Baris kosong pemisah sebelum deklarasi fungsi komponen
function Menu() { // line 26 : Mendefinisikan komponen fungsional Menu untuk katalog produk makanan dan minuman
  const [category, setCategory] = useState("All"); // line 27 : Mendeklarasikan state category dengan nilai awal All untuk menyaring jenis menu yang ditampilkan
// line 28 : Baris kosong pemisah visual sebelum daftar data produk
  const menus = [ // line 29 : Mendeklarasikan array objek menus yang berisi seluruh data 20 item menu kedai
    { // line 30 : Awal objek data menu Kopi Susu Gula Aren
      id: 1, // line 31 : ID unik menu bernilai 1
      name: "Kopi Susu Gula Aren", // line 32 : Nama produk: Kopi Susu Gula Aren
      category: "Coffee", // line 33 : Kategori produk: Coffee
      price: "Rp18.000", // line 34 : Harga jual per porsi menu Kopi Susu Gula Aren
      image: kopiSusu, // line 35 : Mengaitkan referensi variabel gambar impor produk
      description: "Espresso, susu segar, dan gula aren khas Nusantara.", // line 36 : Deskripsi komposisi dan cita rasa Kopi Susu Gula Aren
    }, // line 37 : Penutup objek data menu Kopi Susu Gula Aren
// line 38 : Baris kosong pemisah antar item produk menu
    { // line 39 : Awal objek data menu Americano
      id: 2, // line 40 : ID unik menu bernilai 2
      name: "Americano", // line 41 : Nama produk: Americano
      category: "Coffee", // line 42 : Kategori produk: Coffee
      price: "Rp15.000", // line 43 : Harga jual per porsi menu Americano
      image: americano, // line 44 : Mengaitkan referensi variabel gambar impor produk
      description: "Kopi hitam dengan rasa espresso yang kuat.", // line 45 : Deskripsi komposisi dan cita rasa Americano
    }, // line 46 : Penutup objek data menu Americano
// line 47 : Baris kosong pemisah antar item produk menu
    { // line 48 : Awal objek data menu Cappuccino
      id: 3, // line 49 : ID unik menu bernilai 3
      name: "Cappuccino", // line 50 : Nama produk: Cappuccino
      category: "Coffee", // line 51 : Kategori produk: Coffee
      price: "Rp20.000", // line 52 : Harga jual per porsi menu Cappuccino
      image: cappuccino, // line 53 : Mengaitkan referensi variabel gambar impor produk
      description: "Espresso dengan susu steamed dan foam lembut.", // line 54 : Deskripsi komposisi dan cita rasa Cappuccino
    }, // line 55 : Penutup objek data menu Cappuccino
// line 56 : Baris kosong pemisah antar item produk menu
    { // line 57 : Awal objek data menu Caramel Macchiato
      id: 4, // line 58 : ID unik menu bernilai 4
      name: "Caramel Macchiato", // line 59 : Nama produk: Caramel Macchiato
      category: "Coffee", // line 60 : Kategori produk: Coffee
      price: "Rp22.000", // line 61 : Harga jual per porsi menu Caramel Macchiato
      image: caramel, // line 62 : Mengaitkan referensi variabel gambar impor produk
      description: "Espresso creamy dengan caramel manis.", // line 63 : Deskripsi komposisi dan cita rasa Caramel Macchiato
    }, // line 64 : Penutup objek data menu Caramel Macchiato
// line 65 : Baris kosong pemisah antar item produk menu
    { // line 66 : Awal objek data menu Espresso
      id: 5, // line 67 : ID unik menu bernilai 5
      name: "Espresso", // line 68 : Nama produk: Espresso
      category: "Coffee", // line 69 : Kategori produk: Coffee
      price: "Rp12.000", // line 70 : Harga jual per porsi menu Espresso
      image: espresso, // line 71 : Mengaitkan referensi variabel gambar impor produk
      description: "Kopi espresso murni dengan rasa intens.", // line 72 : Deskripsi komposisi dan cita rasa Espresso
    }, // line 73 : Penutup objek data menu Espresso
// line 74 : Baris kosong pemisah antar item produk menu
    { // line 75 : Awal objek data menu Cafe Latte
      id: 6, // line 76 : ID unik menu bernilai 6
      name: "Cafe Latte", // line 77 : Nama produk: Cafe Latte
      category: "Coffee", // line 78 : Kategori produk: Coffee
      price: "Rp20.000", // line 79 : Harga jual per porsi menu Cafe Latte
      image: latte, // line 80 : Mengaitkan referensi variabel gambar impor produk
      description: "Espresso dengan susu creamy.", // line 81 : Deskripsi komposisi dan cita rasa Cafe Latte
    }, // line 82 : Penutup objek data menu Cafe Latte
// line 83 : Baris kosong pemisah antar item produk menu
    { // line 84 : Awal objek data menu Moka
      id: 7, // line 85 : ID unik menu bernilai 7
      name: "Moka", // line 86 : Nama produk: Moka
      category: "Coffee", // line 87 : Kategori produk: Coffee
      price: "Rp23.000", // line 88 : Harga jual per porsi menu Moka
      image: moka, // line 89 : Mengaitkan referensi variabel gambar impor produk
      description: "Perpaduan espresso dan cokelat.", // line 90 : Deskripsi komposisi dan cita rasa Moka
    }, // line 91 : Penutup objek data menu Moka
// line 92 : Baris kosong pemisah antar item produk menu
    { // line 93 : Awal objek data menu Matcha Latte
      id: 8, // line 94 : ID unik menu bernilai 8
      name: "Matcha Latte", // line 95 : Nama produk: Matcha Latte
      category: "Non-Coffee", // line 96 : Kategori produk: Non-Coffee
      price: "Rp22.000", // line 97 : Harga jual per porsi menu Matcha Latte
      image: matcha, // line 98 : Mengaitkan referensi variabel gambar impor produk
      description: "Matcha premium dengan susu creamy.", // line 99 : Deskripsi komposisi dan cita rasa Matcha Latte
    }, // line 100 : Penutup objek data menu Matcha Latte
// line 101 : Baris kosong pemisah antar item produk menu
    { // line 102 : Awal objek data menu Thai Tea
      id: 9, // line 103 : ID unik menu bernilai 9
      name: "Thai Tea", // line 104 : Nama produk: Thai Tea
      category: "Non-Coffee", // line 105 : Kategori produk: Non-Coffee
      price: "Rp20.000", // line 106 : Harga jual per porsi menu Thai Tea
      image: thaiTea, // line 107 : Mengaitkan referensi variabel gambar impor produk
      description: "Thai tea segar khas Thailand.", // line 108 : Deskripsi komposisi dan cita rasa Thai Tea
    }, // line 109 : Penutup objek data menu Thai Tea
// line 110 : Baris kosong pemisah antar item produk menu
    { // line 111 : Awal objek data menu Red Velvet Latte
      id: 10, // line 112 : ID unik menu bernilai 10
      name: "Red Velvet Latte", // line 113 : Nama produk: Red Velvet Latte
      category: "Non-Coffee", // line 114 : Kategori produk: Non-Coffee
      price: "Rp22.000", // line 115 : Harga jual per porsi menu Red Velvet Latte
      image: redVelvet, // line 116 : Mengaitkan referensi variabel gambar impor produk
      description: "Minuman red velvet lembut.", // line 117 : Deskripsi komposisi dan cita rasa Red Velvet Latte
    }, // line 118 : Penutup objek data menu Red Velvet Latte
// line 119 : Baris kosong pemisah antar item produk menu
    { // line 120 : Awal objek data menu Taro Latte
      id: 11, // line 121 : ID unik menu bernilai 11
      name: "Taro Latte", // line 122 : Nama produk: Taro Latte
      category: "Non-Coffee", // line 123 : Kategori produk: Non-Coffee
      price: "Rp21.000", // line 124 : Harga jual per porsi menu Taro Latte
      image: taro, // line 125 : Mengaitkan referensi variabel gambar impor produk
      description: "Taro creamy dengan rasa manis.", // line 126 : Deskripsi komposisi dan cita rasa Taro Latte
    }, // line 127 : Penutup objek data menu Taro Latte
// line 128 : Baris kosong pemisah antar item produk menu
    { // line 129 : Awal objek data menu Es Lemon Tea
      id: 12, // line 130 : ID unik menu bernilai 12
      name: "Es Lemon Tea", // line 131 : Nama produk: Es Lemon Tea
      category: "Non-Coffee", // line 132 : Kategori produk: Non-Coffee
      price: "Rp15.000", // line 133 : Harga jual per porsi menu Es Lemon Tea
      image: lemonTea, // line 134 : Mengaitkan referensi variabel gambar impor produk
      description: "Teh lemon segar.", // line 135 : Deskripsi komposisi dan cita rasa Es Lemon Tea
    }, // line 136 : Penutup objek data menu Es Lemon Tea
// line 137 : Baris kosong pemisah antar item produk menu
    { // line 138 : Awal objek data menu Cokelat Klasik
      id: 13, // line 139 : ID unik menu bernilai 13
      name: "Cokelat Klasik", // line 140 : Nama produk: Cokelat Klasik
      category: "Non-Coffee", // line 141 : Kategori produk: Non-Coffee
      price: "Rp20.000", // line 142 : Harga jual per porsi menu Cokelat Klasik
      image: cokelat, // line 143 : Mengaitkan referensi variabel gambar impor produk
      description: "Minuman cokelat creamy.", // line 144 : Deskripsi komposisi dan cita rasa Cokelat Klasik
    }, // line 145 : Penutup objek data menu Cokelat Klasik
// line 146 : Baris kosong pemisah antar item produk menu
    { // line 147 : Awal objek data menu Croissant
      id: 14, // line 148 : ID unik menu bernilai 14
      name: "Croissant", // line 149 : Nama produk: Croissant
      category: "Snack", // line 150 : Kategori produk: Snack
      price: "Rp15.000", // line 151 : Harga jual per porsi menu Croissant
      image: croissant, // line 152 : Mengaitkan referensi variabel gambar impor produk
      description: "Croissant butter renyah.", // line 153 : Deskripsi komposisi dan cita rasa Croissant
    }, // line 154 : Penutup objek data menu Croissant
// line 155 : Baris kosong pemisah antar item produk menu
    { // line 156 : Awal objek data menu Brownies Cokelat
      id: 15, // line 157 : ID unik menu bernilai 15
      name: "Brownies Cokelat", // line 158 : Nama produk: Brownies Cokelat
      category: "Snack", // line 159 : Kategori produk: Snack
      price: "Rp18.000", // line 160 : Harga jual per porsi menu Brownies Cokelat
      image: brownies, // line 161 : Mengaitkan referensi variabel gambar impor produk
      description: "Brownies cokelat lembut.", // line 162 : Deskripsi komposisi dan cita rasa Brownies Cokelat
    }, // line 163 : Penutup objek data menu Brownies Cokelat
// line 164 : Baris kosong pemisah antar item produk menu
    { // line 165 : Awal objek data menu Kentang Goreng
      id: 16, // line 166 : ID unik menu bernilai 16
      name: "Kentang Goreng", // line 167 : Nama produk: Kentang Goreng
      category: "Snack", // line 168 : Kategori produk: Snack
      price: "Rp17.000", // line 169 : Harga jual per porsi menu Kentang Goreng
      image: kentang, // line 170 : Mengaitkan referensi variabel gambar impor produk
      description: "Kentang crispy.", // line 171 : Deskripsi komposisi dan cita rasa Kentang Goreng
    }, // line 172 : Penutup objek data menu Kentang Goreng
// line 173 : Baris kosong pemisah antar item produk menu
    { // line 174 : Awal objek data menu Roti Bakar
      id: 17, // line 175 : ID unik menu bernilai 17
      name: "Roti Bakar", // line 176 : Nama produk: Roti Bakar
      category: "Snack", // line 177 : Kategori produk: Snack
      price: "Rp16.000", // line 178 : Harga jual per porsi menu Roti Bakar
      image: roti, // line 179 : Mengaitkan referensi variabel gambar impor produk
      description: "Roti bakar hangat.", // line 180 : Deskripsi komposisi dan cita rasa Roti Bakar
    }, // line 181 : Penutup objek data menu Roti Bakar
// line 182 : Baris kosong pemisah antar item produk menu
    { // line 183 : Awal objek data menu Donat
      id: 18, // line 184 : ID unik menu bernilai 18
      name: "Donat", // line 185 : Nama produk: Donat
      category: "Snack", // line 186 : Kategori produk: Snack
      price: "Rp12.000", // line 187 : Harga jual per porsi menu Donat
      image: donat, // line 188 : Mengaitkan referensi variabel gambar impor produk
      description: "Donat lembut.", // line 189 : Deskripsi komposisi dan cita rasa Donat
    }, // line 190 : Penutup objek data menu Donat
// line 191 : Baris kosong pemisah antar item produk menu
    { // line 192 : Awal objek data menu Pisang Goreng
      id: 19, // line 193 : ID unik menu bernilai 19
      name: "Pisang Goreng", // line 194 : Nama produk: Pisang Goreng
      category: "Snack", // line 195 : Kategori produk: Snack
      price: "Rp15.000", // line 196 : Harga jual per porsi menu Pisang Goreng
      image: pisang, // line 197 : Mengaitkan referensi variabel gambar impor produk
      description: "Pisang goreng renyah.", // line 198 : Deskripsi komposisi dan cita rasa Pisang Goreng
    }, // line 199 : Penutup objek data menu Pisang Goreng
// line 200 : Baris kosong pemisah antar item produk menu
    { // line 201 : Awal objek data menu Cookies
      id: 20, // line 202 : ID unik menu bernilai 20
      name: "Cookies", // line 203 : Nama produk: Cookies
      category: "Snack", // line 204 : Kategori produk: Snack
      price: "Rp14.000", // line 205 : Harga jual per porsi menu Cookies
      image: cookies, // line 206 : Mengaitkan referensi variabel gambar impor produk
      description: "Cookies teman kopi.", // line 207 : Deskripsi komposisi dan cita rasa Cookies
    }, // line 208 : Penutup objek data menu Cookies
  ]; // line 209 : Baris kosong pemisah antar item produk menu
// line 210 : Baris kosong pemisah sebelum proses filtering data
  const filteredMenus = // line 211 : Mendeklarasikan variabel filteredMenus untuk menampung hasil penyaringan menu
    category === "All" // line 212 : Kondisi ternary: jika kategori yang dipilih adalah All
      ? menus // line 213 : Maka kembalikan seluruh array daftar menus tanpa penyaringan
      : menus.filter((item) => item.category === category); // line 214 : Jika bukan All, filter menus berdasarkan kesesuaian kategori yang aktif
// line 215 : Baris kosong pemisah sebelum blok return tampilan antarmuka
  return ( // line 216 : Mengembalikan elemen JSX untuk antarmuka bagian katalog menu
    <section /* line 217 : Tag pembuka elemen section utama katalog menu */
      id="menu" /* line 218 : ID target navigasi anchor #menu */
      className="bg-[#f8f3ed] px-8 py-20" /* line 219 : Styling latar belakang krem lembut dengan padding vertikal dan horizontal */
    > {/* line 220 : Penutup tag pembuka section */}
      <div className="mb-12 text-center" data-reveal> {/* line 221 : Header judul bagian menu dengan efek animasi reveal dan rata tengah */}
        <h2 /* line 222 : Heading judul Menu Coffee Shop */
          className="text-4xl font-bold text-[#4b2e1f]" /* line 223 : Ukuran font besar 4xl tebal dengan nuansa warna kopi tua */
        > {/* line 224 : Penutup tag pembuka h2 */}
          Menu Coffee Shop {/* line 225 : Teks judul Menu Coffee Shop */}
        </h2> {/* line 226 : Penutup tag h2 */}
{/* line 227 : Baris kosong pemisah */}
        <p className="mt-3 text-gray-600"> {/* line 228 : Paragraf subjudul ajakan menikmati pilihan minuman dan makanan */}
          Nikmati pilihan kopi, non-coffee, dan snack terbaik kami. {/* line 229 : Teks deskripsi pengantar bagian menu kopi, non-kopi, dan snack */}
        </p> {/* line 230 : Penutup tag paragraf subjudul */}
      </div> {/* line 231 : Penutup div header judul menu */}
{/* line 232 : Baris kosong pemisah */}
      <div /* line 233 : Kontainer pembungkus tombol filter kategori menu */
        className="mb-12 flex flex-wrap justify-center gap-4" /* line 234 : Layout flexbox dengan jarak gap-4 dan posisi tombol di tengah layar */
        data-reveal /* line 235 : Atribut animasi data-reveal saat discroll */
      > {/* line 236 : Penutup tag pembuka div tombol kategori */}
        {["All", "Coffee", "Non-Coffee", "Snack"].map((item) => ( // line 237 : Iterasi array kategori untuk membuat tombol filter dinamis
          <button /* line 238 : Elemen tombol filter kategori */
            key={item} /* line 239 : Kunci unik React menggunakan nama kategori */
            onClick={() => setCategory(item)} /* line 240 : Event onClick untuk mengubah state category sesuai tombol yang ditekan */
            className="cursor-pointer rounded-full border border-[#6f4e37] bg-white px-6 py-2 text-[#6f4e37] transition hover:bg-[#6f4e37] hover:text-white" /* line 241 : Styling tombol pil bergaris tepi cokelat dengan efek transisi hover */
          >
            {item} {/* line 243 : Menampilkan label nama kategori pada tombol */}
          </button>
        ))} {/* line 245 : Penutup iterasi pemetaan tombol kategori */}
      </div> {/* line 246 : Penutup div pembungkus tombol kategori */}
{/* line 247 : Baris kosong pemisah */}
      <div /* line 248 : Kontainer grid kartu menu produk */
        className="menu-grid grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" /* line 249 : Grid responsif 1 kolom hp, 2 tablet, 4 desktop */
        data-reveal /* line 250 : Atribut animasi scroll reveal */
      > {/* line 250 : Penutup tag pembuka div grid menu */}
        {filteredMenus.map((item, index) => ( // line 251 : Iterasi array filteredMenus untuk merender kartu produk yang sesuai
          <div /* line 252 : Kartu penampung informasi masing-masing menu */
            key={item.id} /* line 253 : Kunci unik item menu berbasis item.id */
            data-reveal /* line 254 : Atribut animasi scroll reveal */
            style={{ transitionDelay: `${(index % 4) * 80}ms` }} /* line 255 : Delay transisi animasi berjenjang setiap 4 kolom (0, 80, 160, 240ms) */
            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl" /* line 256 : Styling kartu putih dengan efek terangkat saat hover */
          >
            <div className="overflow-hidden"> {/* line 258 : Wadah foto produk dengan overflow hidden */}
              <img /* line 259 : Elemen gambar foto sajian menu */
                src={item.image} /* line 260 : Path referensi file gambar yang diambil dari properti item.image */
                alt={item.name} /* line 261 : Teks alternatif aksesibilitas berupa nama menu produk */
                className="h-52 w-full object-cover transition duration-500 hover:scale-110" /* line 262 : Tinggi foto 208px dengan efek zoom 110% saat hover */
              /> {/* line 263 : Penutup tag img produk */}
            </div> {/* line 264 : Penutup wadah foto produk */}
{/* line 265 : Baris kosong pemisah */}
            <div className="p-5"> {/* line 266 : Kontainer detail teks informasi produk dengan padding 5 */}
              <p className="text-sm text-[#8b5e3c]">{item.category}</p> {/* line 267 : Tag penampil label kategori produk */}
{/* line 268 : Baris kosong pemisah */}
              <h3 className="mt-2 text-xl font-bold">{item.name}</h3> {/* line 269 : Heading nama produk berukuran xl tebal */}
{/* line 270 : Baris kosong pemisah */}
              <p className="mt-2 text-sm text-gray-600">{item.description}</p> {/* line 271 : Paragraf deskripsi cita rasa produk */}
{/* line 272 : Baris kosong pemisah */}
              <p /* line 273 : Paragraf penampil harga produk */
                className="mt-4 font-bold text-[#6f4e37]" /* line 274 : Margin atas 4 dengan font tebal dan warna cokelat kopi */
              > {/* line 275 : Penutup tag pembuka p harga */}
                {item.price} {/* line 276 : Menampilkan nominal harga produk */}
              </p> {/* line 277 : Penutup tag p harga */}
            </div> {/* line 278 : Penutup kontainer detail teks p-5 */}
            {/* line 279 : Penutup kartu item menu */}
          </div>
        ))} {/* line 280 : Penutup map iterasi filteredMenus */}
      </div> {/* line 281 : Penutup wadah menu-grid */}
    </section> /* line 282 : Penutup section katalog menu */
  ); // line 283 : Penutup pernyataan return
} // line 284 : Penutup fungsi komponen Menu
// line 285 : Baris kosong pemisah sebelum ekspor
export default Menu; // line 286 : Mengekspor komponen Menu sebagai default export
