let barang = [
    { kode: "001", nama: "A", harga: 10000 }, 
    { kode: "002", nama: "B", harga: 20000 }, 
    { kode: "003", nama: "C", harga: 30000 }
];

function cariBarang(kode) {
    for (let i = 0; i < barang.length; i++) {
        if (barang[i].kode === kode) {
            return barang[i];
        }
    }
    return null
}

function proses() {
    let kode = document.getElementById("kode").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);

    let dataBarang = cariBarang(kode);

    if (!dataBarang) {
        alert("Barang tidak di temukan");
        return;
    }

    let total = dataBarang.harga * jumlah;

    alert("Total yang harus di bayarkan: " + total);

    let bayar = parseInt(prompt("Uang yang di bayar:"));

    let kembalian = bayar - total;

    alert("kembalian: " + kembalian);
}