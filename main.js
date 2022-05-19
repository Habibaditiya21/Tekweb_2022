Vue.createApp({
  data() {
    return {
      mesage: "Hello Vue!",
      header: {
        nama: "Habib Aditiya Julianto",
        nim: "NIM : 2000016047",
        description: '"Saya Adalah Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta"',
        imageprofile: "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Profil.png",
      },
      portofolio: [
        {
          title: "Berjalan Perlahan",
          desc: "Oleh : Habib Aditiya",
          image: "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel01.jpg",
        },
        {
          title: "Menjadi Manusia",
          desc: "Oleh : Habib Aditiya",
          image: "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel02.jpg",
        },
        {
          title: "Garis Waktu",
          desc: "Oleh : Habib Aditiya",
          image: "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel03.jpg",
        },
        {
          title: "My Trip My Sleep",
          desc: "Oleh : Habib Aditiya",
          image: "https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/img/Artikel04.jpg",
        },
      ],
      list_markdown: [],
      tabel: {
        judul: "Tabel Skill",
        nama: ["No.", "Keahlian", "Skill"],
        list: [
          {
            Keahlian: "Python",
            Skill: "Intermediate",
          },
          {
            Keahlian: "CSS",
            Skill: "Basic",
          },
          {
            Keahlian: "HTML",
            Skill: "Advance",
          },
          {
            Keahlian: "Javascript",
            Skill: "Basic",
          },
          {
            Keahlian: "Java",
            Skill: "Basic",
          },
          {
            Keahlian: "Microsoft",
            Skill: "Advance",
          },
        ],
      },
    };
  },
  methods: {
    getListMarkdown() {
      axios
        .get(("https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/contents/articles.json"))
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.list_markdown = res.data; //memperbarui variabel header pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
  },
  beforeMount() {
    this.getListMarkdown();
  },
}).mount("#app");
