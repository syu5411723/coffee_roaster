<template>
  <body>
    <Home :menus="menus" :otherMenus="otherMenus" />
  </body>
</template>

<script>
import Home from "../components/pages/Home.vue";

const sampleData = [
  {
    id: 1,
    name: "パールグラス",
    position: "中景〜後景",
    picture: "/images/banner.jpg",
    difficulty: "Easy",
    addition_amount: "High",
    leaf_length: 2,
    water_quality: "弱酸性～中性  軟水～弱硬水",
  },
  {
    id: 2,
    name: "キューバパールグラス",
    position: "前景",
    picture: "/images/banner.jpg",
    difficulty: "Hard",
    addition_amount: "High",
    leaf_length: 1,
    water_quality: "弱酸性～中性  軟水～弱硬水",
  },
  {
    id: 3,
    name: "ニューラージパールグラス",
    position: "前景",
    picture: "/images/banner.jpg",
    difficulty: "Medium",
    addition_amount: "High",
    leaf_length: 1,
    water_quality: "弱酸性～中性  軟水～弱硬水",
  },
];

export default {
  components: {
    Home,
  },
  data() {
    return {
      menus: [],
      otherMenus: [],
    };
  },
  async asyncData({ $axios, params }) {
    try {
      const menus = await $axios.$get(`/menu/`);
      const otherMenus = await $axios.$get(`/other-menu/`);
      return { menus, otherMenus };
    } catch (e) {
      const data = sampleData
      return {
        menus: data,
        otherMenus: data,
        };
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
body {
  font-family: 'Work Sans', sans-serif;
  letter-spacing: 0.04rem;
  background-color: #edece7;
}
</style>
