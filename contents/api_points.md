```

<!--  Tabel Users -->

GET: /users

data: [
{
        "id": "1",
        "name": "Habib Aditiya",
        "motto": "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
},
{
        "id": "3",
        "name": "Syawal Saputra",
        "motto": "Jangan Lupa Bahagia",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
},
{
        "id": "5",
        "name": "Syawal Saputra",
        "motto": "Jangan Lupa Bahagia",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}
]

GET: /users/[1]

data:{
        "id": "1",
        "name": "Habib Aditiya",
        "motto": "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}

POST: /users

data:{
        "name": "David Bukan Gadgetin",
        "motto": "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}

PUT: /users/[4]

data:{
        "name": "David UPDATE",
        "motto": "Takutlah Jika Tidak Pernah Mencoba",
        "gambar": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
        "id": "3",
        "deskripsi01": "HALLO DULURS\r\n\r\nDengan Habib Aditiya Disini. Saya adalah mahasiswa Sistem Informasi 2020. ",
        "deskripsi02": "Pemrograman adalah hal yang menarik bagi saya terutama website development, Oleh karna itu"
},
{
        "id": "6",
        "deskripsi01": "Garis Waktu UPDATE",
        "deskripsi02": "Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau bertemu dengan satu oran"
},
{
        "id": "8",
        "deskripsi01": "Menjadi Manusia",
        "deskripsi02": "Jangan terlalu dalam, nanti susah keluar.\r\njangan terlalu terikat, nanti susah lepas.\r\njan"
},
{
        "id": "13",
        "deskripsi01": "Garis Waktu",
        "deskripsi02": "Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau bertemu dengan satu oran"
}
]


GET: /portofolio/[3]

data:{
        "id": "3",
        "deskripsi01": "HALLO DULURS\r\n\r\nDengan Habib Aditiya Disini. Saya adalah mahasiswa Sistem Informasi 2020. ",
        "deskripsi02": "Pemrograman adalah hal yang menarik bagi saya terutama website development, Oleh karna itu"
}


POST: /portofolio

data:{
        "deskripsi01": "Garis Waktu",
        "deskripsi02": "Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau bertemu dengan satu orang yang mengubah hidupmu untuk selamanya."
}


PUT: /portofolio/[6]

data:{
        "deskripsi01": "Garis Waktu UPDATE",
        "deskripsi02": "Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau bertemu dengan satu orang yang mengubah hidupmu untuk selamanya."
}



<!--  Tabel Articles -->

GET: /articles

data:[
{
        "Id": "5",
        "title": "Berjalan Perlahan Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel01.jpg"
},
{
        "Id": "6",
        "title": "Menjadi Manusia Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel02.jpg"
},
{
        "Id": "7",
        "title": "Sebuah Garis Waktu Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel03.jpg"
},
{
        "Id": "8",
        "title": "My Trip My Sleep Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel04.jpg"
},
{
        "Id": "11",
        "title": "Menjadi Manusia UPDATE Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel04.jpg"
},
{
        "Id": "24",
        "title": "Menjadi Manusia Merdeka Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": ""
},
{
        "Id": "25",
        "title": "Menjadi Manusia Merdeka Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": ""
}
]


GET: /articles/[6]

data:{
        "Id": "6",
        "title": "Menjadi Manusia Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel02.jpg"
}


POST: /articles

data:{
        "title": "Menjadi Manusia Merdeka Oleh : Habib Aditiya",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel02.jpg"
}


PUT: /articles/[10]

data:{
        "title": "UPDATE Menjadi Manusia Oleh : Syawal Saputra",
        "author_id": "1",
        "thumbnail": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel02.jpg"
}

```
