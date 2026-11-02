// 1. Logika Login & Validasi Form (Alert jika salah)
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@toko.com" && password === "123456") {
        window.location.href = "dashboard.html";
    } else {
        alert("Email/password yang anda masukkan salah");
    }
}

// 2. Logika Modal Box
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// 3. Greeting Berdasarkan Waktu Lokal
function initDashboard() {
    const greetingElement = document.getElementById("greetingText");
    const jam = new Date().getHours();
    let text = "";

    if (jam >= 4 && jam < 11) {
        text = "Selamat Pagi, Selamat Datang di Dashboard";
    } else if (jam >= 11 && jam < 15) {
        text = "Selamat Siang, Selamat Datang di Dashboard";
    } else if (jam >= 15 && jam < 18) {
        text = "Selamat Sore, Selamat Datang di Dashboard";
    } else {
        text = "Selamat Malam, Selamat Datang di Dashboard";
    }

    if (greetingElement) greetingElement.innerText = text;
}

// 4. Render Data Katalog Buku Dinamis dari data.js ke Tabel DOM (dengan Tag <img>)
function renderKatalog() {
    const tbody = document.getElementById("tabelStok");
    if (!tbody) return;

    tbody.innerHTML = "";
    dataKatalog.forEach((buku, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${buku.gambar}" alt="${buku.judul}" class="buku-img" onerror="this.src='https://via.placeholder.com/50x65?text=Buku'"></td>
            <td><strong>${buku.judul}</strong></td>
            <td>${buku.penulis}</td>
            <td>Rp ${buku.harga.toLocaleString("id-ID")}</td>
            <td>${buku.stok} pcs</td>
        `;
        tbody.appendChild(tr);
    });
}

// 5. Fitur Tambah Baris Stok Baru
function tambahStok(event) {
    event.preventDefault();
    const judul = document.getElementById("judul").value;
    const penulis = document.getElementById("penulis").value;
    const harga = parseInt(document.getElementById("harga").value);
    const stok = parseInt(document.getElementById("stok").value);

    dataKatalog.push({
        id: dataKatalog.length + 1,
        gambar: "img/buku1.png",
        judul: judul,
        penulis: penulis,
        harga: harga,
        stok: stok
    });

    renderKatalog();
    alert("Buku baru berhasil ditambahkan ke katalog!");
    event.target.reset();
}

// 6. Form Checkout Pemesanan
function prosesCheckout(event) {
    event.preventDefault();
    alert("Pesanan berhasil dikonfirmasi! Silahkan cek nomor resi di menu Tracking.");
    window.location.href = "tracking.html";
}

// 7. Tracking Pengiriman
function cariTracking() {
    const inputDO = document.getElementById("inputDO").value.trim();
    const resultBox = document.getElementById("hasilTracking");

    if (dataTracking[inputDO]) {
        const item = dataTracking[inputDO];
        document.getElementById("trackDO").innerText = inputDO;
        document.getElementById("trackNama").innerText = item.nama;
        document.getElementById("trackStatus").innerText = item.status;
        document.getElementById("trackEkspedisi").innerText = item.ekspedisi;
        document.getElementById("trackTanggal").innerText = item.tanggalKirim;
        document.getElementById("trackPaket").innerText = item.jenisPaket;
        document.getElementById("trackTotal").innerText = "Rp " + item.totalBayar.toLocaleString("id-ID");

        const bar = document.getElementById("progressBar");
        bar.style.width = item.progress + "%";
        bar.innerText = item.progress + "%";

        resultBox.style.display = "block";
    } else {
        alert("Nomor Delivery Order tidak ditemukan! Coba gunakan DO12345");
        resultBox.style.display = "none";
    }
}
