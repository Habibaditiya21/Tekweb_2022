Vue.createApp({
  data() {
    return {
      header: {},
      articles: [],
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/SK1-Latihan%203/contents/header.json")
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get("https://raw.githubusercontent.com/Habibaditiya21/tekweb2022/master/SK1-Latihan%203/contents/articles.json")
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
  },
}).mount("#app");
