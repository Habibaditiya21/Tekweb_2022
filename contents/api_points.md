```

<!--  Tabel Users -->

GET: /users

data: [
{
        "id"    : "1",
        "name"  : "Habib Aditiya",
        "motto" : "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "ig_url": "https://www.instagram.com/habib_aditiya21/",
        "fb_url": "https://www.facebook.com/habib.aditiya.75/",
        "github_url": "https://github.com/Habibaditiya21",
        "avatar_url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
},
{
        "id": "4",
        "name": "Syawal Saputra",
        "motto": "Jangan Lupa Bahagia",
        "ig_url": "https://www.instagram.com/syawalaja_/",
        "fb_url": "https://www.facebook.com/syawalaja/",
        "github_url": "https://github.com/syawalaja",
        "avatar_url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}
]


GET: /users/[1]

data:{
        "id"    : "1",
        "name"  : "Habib Aditiya",
        "motto" : "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "ig_url": "https://www.instagram.com/habib_aditiya21/",
        "fb_url": "https://www.facebook.com/habib.aditiya.75/",
        "github_url": "https://github.com/Habibaditiya21",
        "avatar_url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}

POST: /users

data:{
        "name": "Syawal Saputra",
        "motto": "Jangan Lupa Bahagia",
        "ig_url": "https://www.instagram.com/syawalaja_/",
        "fb_url": "https://www.facebook.com/syawalaja/",
        "github_url": "https://github.com/syawalaja",
        "avatar_url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}

PUT: /users/[4]

data:{
        "name": "Faishal Umar",
        "motto": "Jangan Lupa Senyum Hari Ini",
        "ig_url": "https://www.instagram.com/syawalaja_/",
        "fb_url": "https://www.facebook.com/syawalaja/",
        "github_url": "https://github.com/syawalaja",
        "avatar_url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fasset-a.grid.id%2Fcrop%2F0x0%3A0x0%2F36"
}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
        "id": "3",
        "title01": "Habib Aditiya Julianto",
        "title02": "2000016047",
        "description": "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "thumbnail_url": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png"
},
{
        "id": "6",
        "title01": "Faishal Umar",
        "title02": "2000016003",
        "description": "Jangan Lupa Senyum Hari Ini",
        "thumbnail_url": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png"
}
]

GET: /portofolio/[3]

data:{
        "id": "3",
        "title01": "Habib Aditiya Julianto",
        "title02": "2000016047",
        "description": "Jangan Takut Gagal, Takutlah Jika Tidak Pernah Mencoba",
        "thumbnail_url": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png"
}


POST: /portofolio

data:{
        "title01": "Syawal Saputra",
        "title02": "2000016001",
        "description": "Jangan Lupa Bahagia",
        "thumbnail_url": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png"
}


PUT: /portofolio/[6]

data:{
        "title01": "Anhar Suryadi",
        "title02": "2000016003",
        "description": "Jangan Lupa Senyum Hari Ini",
        "thumbnail_url": "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png"
}


<!--  Tabel Articles -->

GET: /articles

data:[
{
        "Id": "5",
        "title": "Berjalan Perlahan",
        "author_id": "1"
},
{
        "Id": "6",
        "title": "Menjadi Manusia",
        "author_id": "1"
},
{
        "Id": "7",
        "title": "Sebuah Garis Waktu",
        "author_id": "1"
},
{
        "Id": "8",
        "title": "My Trip My Sleep",
        "author_id": "1"
}
]


GET: /articles/[6]

data:{
        "Id": "6",
        "title": "Menjadi Manusia",
        "author_id": "1"
}


POST: /articles

data:{
        "title": "Menjadi Manusia UPDATE",
        "author_id": "1"
}


PUT: /articles/[10]

data:{
        "title": "Menjadi Manusia Merdeka",
        "author_id": "1"
}

```
