Laporan Hasil Pengerjaan UTS Pemrograman Web 1

Sistem Aplikasi Web Pemesanan Buku Online (BookStore.id)

📌 Data Mahasiswa

Nama: Aditiya Yoga pratama

Mata Kuliah: Pemrograman Web 1

Topik Tugas: Front-End Pemesanan Buku Online

🛠️ Ringkasan Project & Arsitektur Sistem

Aplikasi ini merupakan antarmuka web front-end sederhana namun interaktif yang dirancang untuk mengelola pemesanan buku online. Data dalam aplikasi disimulasikan menggunakan struktur JSON lokal yang disimpan pada file JavaScript terpisah (data.js).

Indikator Capaian Pembelajaran yang Dipenuhi:

Struktur HTML Semantik & Valid: Menggunakan elemen HTML5 terstruktur seperti <header>, <nav>, <form>, <table>, dan <section>.

Pengelolaan Gaya Antarmuka (CSS): Desain antarmuka bersih dan responsif menggunakan variabel CSS, layouting grid/flexbox, shadow, dan animasi interaksi pengguna.

Manipulasi DOM & JavaScript: Implementasi manipulasi elemen DOM dinamis, validasi formulir input, respons waktu lokal (greeting), modal box, serta progress bar status pengiriman.

📂 Struktur Folder Project

Struktur folder dibangun secara modular sesuai ketentuan tugas:

tugas-uts-web1/
├── index.html        (Halaman Utama Login & Modal Box)
├── dashboard.html    (Dashboard Navigasi & Dynamic Greeting)
├── stok.html         (Katalog Stok & Form Tambah Buku DOM)
├── tracking.html     (Lacak Status Pengiriman & Progress Bar)
├── checkout.html     (Formulir Pemesanan & Pembayaran)
├── README.md         (Dokumentasi Laporan Project)
├── css/
│   └── style.css     (Pengaturan Gaya UI Modern)
├── js/
│   ├── data.js       (Penyimpanan Data Dummy JSON Terpisah)
│   └── script.js     (Logika Event, DOM, & Interaktivitas UI)
└── img/
    ├── buku1.png     (Asset Gambar Sampul Buku 1)
    └── buku2.png     (Asset Gambar Sampul Buku 2)


🚀 Fitur & Fungsionalitas Aplikasi

1. Halaman Login (index.html)

Fitur Email & Password: Kredensial default untuk pengujian:

Email: admin@toko.com

Password: 123456

Validasi Alert: Jika data yang diinput salah/kosong, JavaScript akan merespon dengan pesan peringatan/alert Email/password yang anda masukkan salah.

Modal Box Interaktif: Terdapat tombol Lupa Password dan Daftar Akun yang memicu munculnya jendela Modal Box transparan (menggunakan manipulasi CSS display: flex/none via JavaScript DOM).

2. Dashboard Menu (dashboard.html)

Header & Navigasi: Menu navigasi antar halaman yang konsisten di bagian atas.

Dynamic Local Time Greeting: Menampilkan salam pengenal (Pagi / Siang / Sore / Malam) yang berganti secara otomatis dengan membaca waktu perangkat user menggunakan fungsi new Date().getHours().

Grid Navigation: Tombol kartu pintas menuju seluruh halaman operasional toko.

3. Informasi Stok / Katalog (stok.html)

Render Dynamic JSON Data: Data buku di-load secara dinamis dari objek array dataKatalog pada file data.js ke dalam elemen tabel HTML via DOM manipulation.

Form Tambah Stok Baru: Fitur untuk menambahkan baris katalog buku baru ke dalam tabel secara real-time tanpa refresh halaman.

4. Halaman Pemesanan (checkout.html)

Form Checkout: Isian data pemesan (Nama, Alamat, No. Telp) dan detail pembelian (Pilihan Buku, Jumlah, dan Metode Pembayaran).

Konfirmasi Transaksi: Merespon aksi submit formulir dan mengarahkan pengguna secara otomatis ke halaman tracking pengiriman.

5. Informasi Pengiriman (tracking.html)

Pencarian Nomor DO: Fitur input Nomor Delivery Order (Kode pengujian: DO12345 atau DO67890).

Progress Bar Status Pengiriman: Menggambarkan persentase proses delivery order secara visual menggunakan elemen progress bar.

Rincian Ekspedisi: Menampilkan detail pemesan, jenis paket, ekspedisi, tanggal pengiriman, dan total pembayaran.

🎥 Panduan Presentasi Video UTS (Maksimal 15 Menit)

Alur penyampaian yang dapat digunakan saat merekam video penjelasan:

Pendahuluan & Struktur File (00:00 - 02:00): Perkenalan diri, tujuan aplikasi, dan demonstrasi keutuhan struktur folder project.

Demo Login & Modal Box (02:00 - 04:30): Memperlihatkan validasi form salah (alert) dan fungsionalitas pop-up Modal Box.

Demo Dashboard & Local Time (04:30 - 06:30): Menjelaskan logika logika JavaScript pengubah kalimat greeting berdasarkan jam lokal.

Demo Katalog & DOM (06:30 - 09:30): Penjelasan mengenai pemisahan data.js serta fungsi renderKatalog() dan tambahStok().

Demo Checkout & Tracking (09:30 - 13:00): Memperlihatkan alur pengisian pesanan hingga lacak resi dengan Progress Bar.

Penutup (13:00 - 15:00): Kesimpulan keterhubungan HTML, CSS, dan JS dalam aplikasi.

✒️ Kesimpulan

Aplikasi web ini telah memenuhi seluruh kriteria indikator penilaian UTS Pemrograman Web 1, mulai dari penerapan struktur HTML semantik, estetika layouting CSS, modularitas file data JSON, hingga manipulasi DOM dan logika



Lnk youtube: https://youtu.be/erEwBTHbHz8   