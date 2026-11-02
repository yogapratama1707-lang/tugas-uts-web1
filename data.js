// Data Dummy Katalog Buku (Array JSON terpisah)
const dataKatalog = [
    {
        id: 1,
        gambar: "img/buku1.png",
        judul: "Pemrograman Web Modern",
        penulis: "Budi Santoso",
        harga: 85000,
        stok: 15
    },
    {
        id: 2,
        gambar: "img/buku2.png",
        judul: "Belajar JavaScript untuk Pemula",
        penulis: "Siti Rahma",
        harga: 75000,
        stok: 20
    },
    {
        id: 3,
        gambar: "img/buku1.png",
        judul: "Struktur Data & Algoritma",
        penulis: "Andi Wijaya",
        harga: 95000,
        stok: 8
    },
    {
        id: 4,
        gambar: "img/buku2.png",
        judul: "Desain UI/UX dengan Figma",
        penulis: "Eka Putri",
        harga: 65000,
        stok: 12
    }
];

// Data Dummy Tracking Pengiriman
const dataTracking = {
    "DO12345": {
        nama: "Rian Alvio",
        status: "Dalam Pengiriman",
        progress: 75,
        ekspedisi: "JNE Reguler",
        tanggalKirim: "01 November 2026",
        jenisPaket: "Buku & Alat Tulis",
        totalBayar: 160000
    },
    "DO67890": {
        nama: "Budi Kurniawan",
        status: "Terkirim",
        progress: 100,
        ekspedisi: "J&T Express",
        tanggalKirim: "28 Oktober 2026",
        jenisPaket: "Buku Paket",
        totalBayar: 85000
    }
};
