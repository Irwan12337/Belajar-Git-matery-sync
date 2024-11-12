//console.log('hello world');

// if (1 + 2 === 3) {
//     console.log('Hitungan benar');
// }

// let nomor = Math.random()
// console.log(nomor);

// if (nomor >= 0.5) {
//     console.log('angka ini lebih besar dari pembanding 0.5')
// }


// if (nomor <= 0.5) {
//     console.log('angka ini lebih kecil dari pembanding 0.5')
// }

// didalam else if kutipan dalam konsol log pastikan menggunakan "", karena kalau '' tidak jalan

// const nilai = prompt ('isi nilai');

// if (nilai < 50) {
//     console.log("F Tolol")
// }else if (nilai < 60) {
//     console.log ("D Belajarlagi")
// }else if (nilai < 70) {
//     console.log("C cukup")
// }else if (nilai < 80) {
//     console.log ("B baik")
// }else if (nilai < 90 ){
//     console.log ("B+ bagus sekali")
// }else if (nilai < 100) {
//     console.log("A Super")
// }else if (nilai == 100) {
//     console.log("Sempurna")
// }


// ELSE

// const iniHari = prompt('isikan hari');
// if (iniHari === 'senin') {
//     console.log ('oh shit');
// }else if (iniHari === 'sabtu') {
//     console.log ('yey liburan bermula');
// }else if (iniHari === 'minggu') {
//     console.log ('yap sehari lagi');
// }else if (iniHari === 'selasa') {
//     console.log ('yah biasa aja');
// }else if (iniHari === 'rabu') {
//     console.log ('yah biasa aja');
// }else if (iniHari === 'kamis') {
//     console.log ('yah biasa aja');
// }else if (iniHari === 'jumat') {
//     console.log ('Kita berada di puncak seluncuran');
// }else {
//     console.log ('Itu bukan hari laa');
// }

// IF didalam IF

// const password = prompt ("Buat kata sandinya");

// if(password.length >= 6) {
//     if(password.indexOf(' ') ==-1) {
//         console.log("password valid")
//     }else {
//         console.log("password tidak boleh ada spasi")
//     }
// }else {
//     console.log("Password minimal 6 karakter")
// }

//Logika ANd &&

// const password = prompt ("Buat kata sandinya");
// if(password.length >= 6 && password.indexOf(' ') ===-1) {
//     console.log ("password valid")
// }else {
//     console.log("password tidak memenuhi kriteria")
// }


//Logika OR ||
// const role = prompt("masuk sebagai?");
// if(role === 'admin' || role === 'spv') {
//     console.log("Akses diterima")
// }else {
//     console.log("Maaf, akses di tolak")
// }

//Logika Not !
const role = prompt("masuk sebagai?");
if (role !== 'admin') {
    console.log('Dilarang mengakses')
}else {
    console.log("Akses diterima")
}