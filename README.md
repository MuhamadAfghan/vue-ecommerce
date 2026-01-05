# Shop.co - Platform E-commerce Modern

Aplikasi web e-commerce yang komprehensif dan responsif dibangun dengan **Vue 3** dan **Tailwind CSS**. Proyek ini mendemonstrasikan desain minimalis premium yang berfokus pada pengalaman pengguna, performa, dan praktik pengembangan web modern.
 
> **Catatan:** Proyek ini adalah etalase kemampuan pengembangan frontend dan ditujukan untuk tujuan informasi dan demonstrasi.

## 🚀 Teknologi yang Digunakan

- **Framework Utama:** [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Komponen UI:** [PrimeVue](https://primevue.org/) (Drawer, Paginator, Dropdown)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Manajemen State:** [Pinia](https://pinia.vuejs.org/) (Tersedia/Dikonfigurasi)

## ✨ Fitur Utama

### 🛍️ Penjelajahan & Penyaringan Produk
- **Daftar Produk Dinamis:** Jelajahi produk dengan penyortiran real-time (Terbaru, Harga, Populer) dan opsi penyaringan.
- **Penyaringan Lanjutan:** Filter berdasarkan Kategori, Rentang Harga, Warna, dan Gaya Pakaian (Kasual, Formal, Pesta, Gym).
- **Tata Letak Responsif:** Grid adaptif yang terlihat bagus di desktop, tablet, dan seluler.
- **Mobile Drawer:** Laci filter khusus untuk pengalaman seluler yang mulus.

### 📄 Detail Produk
- **Tampilan Produk Kaya:** Galeri gambar berkualitas tinggi.
- **Variasi Produk:** Antarmuka pemilihan Warna dan Ukuran.
- **Sistem Ulasan:** Bagian ulasan pelanggan terintegrasi dengan peringkat dan umpan balik.
- **Produk Terkait:** Rekomendasi "Anda mungkin juga suka".

### 🛒 Keranjang Belanja
- **Keranjang Fungsional:** Kelola item, perbarui jumlah, dan hapus produk.
- **Ringkasan Pesanan:** Perhitungan subtotal, diskon, dan biaya pengiriman secara real-time.
- **Kode Promo:** UI untuk menerapkan kode promosi.

### 🔐 Halaman Otentikasi
- **Alur Lengkap:** Antarmuka Login, Registrasi, dan Lupa Kata Sandi.
- **Desain:** Layar otentikasi yang konsisten dan bermerek.

### 🌐 Navigasi & UX
- **Mega Menu:** Menu hover desktop interaktif untuk akses kategori cepat.
- **Navigasi Seluler:** Integrasi PrimeVue Drawer yang mulus untuk menu seluler.
- **Breadcrumbs:** Navigasi breadcrumb dinamis untuk hierarki situs yang lebih jelas.
- **Showcase Merek:** Halaman khusus yang menampilkan merek mitra.

## 🛠️ Instalasi Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Instal Dependensi**
    ```bash
    npm install
    ```

2.  **Jalankan Server Pengembangan**
    ```bash
    npm run dev
    ```

3.  **Build untuk Produksi**
    ```bash
    npm run build
    ```

## 📂 Struktur Proyek

```
src/
├── assets/          # Aset statis (font, css utama)
├── components/      # Komponen UI yang dapat digunakan kembali (Navbar, Hero, ProductCard, dll.)
├── data/            # Sumber data tiruan (products.js)
├── router/          # Konfigurasi Vue Router
├── views/           # Komponen Halaman (HomeView, ProductListView, CartView, dll.)
└── App.vue          # Komponen Root
```

## 🎨 Sistem Desain

Proyek ini mematuhi sistem desain yang ketat:
- **Font:** *Integral CF* untuk judul (Tebal/Kuat) dan *Satoshi* untuk teks isi (Keterbacaan bersih).
- **Palet Warna:** Fondasi monokrom (Hitam/Putih/Abu-abu) dengan aksen halus.
- **Komponen:** Komponen modular dan dapat digunakan kembali yang digayakan dengan kelas utilitas Tailwind.

