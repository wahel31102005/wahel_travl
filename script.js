// Menyeleksi beberapa inputan textfield
const nama = document.getElementById("nama");
const destinasi = document.getElementById("destinasi");
const status = document.getElementById("status");
const jumlah = document.getElementById("jumlah");
const subtotal = document.getElementById("subtotal");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const cetakPesanan = document.querySelector(".output");

// Menyeleksi bagian tombol dan menjalnkan apabila tombol pesan di klik
const tombolPesan = document.getElementById("pesan");
tombolPesan.addEventListener("click", function (e) {
  e.preventDefault();

    // Pengecekan jika inputan-nya kosong atau tidak diisi
    if (nama.value == "" || destinasi.value == "" || status.value == "" || jumlah.value == "") {
        alert("Inputan nilai harus diisi terlebih dahulu!");
      } else {
        // Mengecek jika inputan nama nya sudah tidak kosong
        if (nama.value != "") {
          document.getElementById("namaoutput").innerText = nama.value;
        }
    
        // Mengecek inputan destinasi sesuai 3 Pilihan: Bandung, Jakarta dan Surabaya
        if (destinasi.value == "bandung") {
          document.getElementById("destinasioutput").innerText = destinasi.value;
        } else if (destinasi.value == "jakarta") {
          document.getElementById("destinasioutput").innerText = destinasi.value;
        } else if (destinasi.value == "surabaya") {
          document.getElementById("destinasioutput").innerText = destinasi.value;
        } else {
          alert("Pilihan Destinasi hanya bandung, jakarta dan surabaya");
        }

         // Mengecek inputan status sesuai 2 pilihan: Dewasa dan Anak-anak
    if (status.value == "dewasa") {
        document.getElementById("statusoutput").innerText = status.value;
      } else if (status.value == "anak-anak") {
        document.getElementById("statusoutput").innerText = status.value;
      } else {
        alert("Pilihan status hanya untuk dewasa dan anak-anak saja!");
      }
  
      let harga = 0;
      let hargaPerTiket = document.getElementById("hargatiket");
  
      // Mengecek antara status dan destinasi
      if (destinasi.value == "bandung" && status.value == "dewasa") {
        harga = 200000;
        hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
      } else if (destinasi.value == "bandung" && status.value == "anak-anak") {
        harga = 100000;
        hargaPerTiket.innerText = harga + " (Seratus Ribu)";
      } else if (destinasi.value == "jakarta" && status.value == "dewasa") {
        harga = 300000;  hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    } else if (destinasi.value == "jakarta" && status.value == "anak-anak") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (destinasi.value == "surabaya" && status.value == "dewasa") {
      harga = 400000;
      hargaPerTiket.innerText = harga + " (Empat Ratus Ribu)";
    } else if (destinasi.value == "surabaya" && status.value == "anak-anak") {
      harga = 300000;
      hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    }

       // Mengecek inputan jumlah / tiket jika lebih dari 5 maka akan dikasih diskon, jika dibawah 5 tidak dapat diskon
    // Ubah dulu yang tipe data nya string menjadi number
    const convertToNumber = Number(jumlah.value);
    subtotal.value = harga * convertToNumber;
    document.getElementById("subtotaloutput").innerText = harga * convertToNumber;

    let discount = 0;
    if (convertToNumber >= 6) {
      discount = (subtotal.value / 100) * 15;
    } else if (convertToNumber <= 6) {
      discount = 0;
    }

    document.getElementById("jumlahoutput").innerText = convertToNumber;
    diskon.value = discount;
    document.getElementById("diskonoutput").innerText = discount;

    let totalPaid = subtotal.value - discount;
    total.value = totalPaid;
    document.getElementById("totaloutput").innerText = totalPaid;

    if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != "") {
      // Mengecek jika user memasukkan nilai 0 pada inputan jumlah tiket
      if (jumlah.value == 0) {
        alert("Jumlah tiket tidak boleh 0");
        cetakPesanan.classList.remove("tampil");
      } else {
        cetakPesanan.classList.add("tampil");
      }
    }
  }
});

// Menyeleksi bagian tombol dan menjalankan apabila tombol hapus di klik
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", function () {
  // Menghapus bagian output pada html
  if (nama.value == "" && destinasi.value == "" && status.value == "" && jumlah.value == "") {
    alert("Data masih kosong, apa yang mau dihapus?");
  } else if (nama.value != "" || destinasi.value != "" || status.value != "" || jumlah.value != "") {
    nama.value = "";
    destinasi.value = "";
    status.value = "";
    jumlah.value = "";
    subtotal.value = "";
    diskon.value = "";
    total.value = "";
    cetakPesanan.classList.remove("tampil");
  }
});