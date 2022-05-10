Vue.createApp({
  data() {
    return {
      mesage: "Hello Vue!",
      header: {
        nama: "Habib Aditiya Julianto",
        NIM: "NIM : 2000016047",
        description: '"Saya Adalah Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta"',
        imageprofile: "../img/Profil.png",
      },
      portofolio: [
        {
          title: "Berjalan Perlahan",
          desc: "Oleh : Habib Aditiya",
          image: "../img/Artikel01.jpg",
        },
        {
          title: "Menjadi Manusia",
          desc: "Oleh : Habib Aditiya",
          image: "../img/Artikel02.jpg",
        },
        {
          title: "Tetaplah Bersama",
          desc: "Oleh : Habib Aditiya",
          image: "../img/Artikel03.jpg",
        },
        {
          title: "My Trip My Sleep",
          desc: "Oleh : Habib Aditiya",
          image: "../img/Artikel04.jpg",
        },
      ],
    };
  },
}).mount("#app");
