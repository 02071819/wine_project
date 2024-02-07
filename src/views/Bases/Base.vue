<template>
  <div class="baseLine">
    <div v-for="base in bases" :key="base.id" class="base">
      <RouterLink :to="{ name: 'BaseDetail', params: { id: base.id } }">
        <h3>{{ base.title }}</h3>
        <img :src="`../src/assets/alcohol/${base.imageSrc}`" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bases: [
        {
          title: "Vodka 伏特加",
          id: 1,
          details: "lorem",
          imageSrc: "../assets/alcohol/vodka.jpg",
        },
        {
          title: "蘭姆酒 Rum",
          id: 2,
          details: "lorem",
          imageSrc: "../../assets/alcohol/rum.jpg",
        },
        {
          title: "琴酒 Gin ",
          id: 3,
          details: "lorem",
          imageSrc: "../../assets/alcohol/gin.jpg",
        },
        {
          title: "龍舌蘭 Tequila ",
          id: 4,
          details: "lorem",
          imageSrc: "../../assets/alcohol/tequila.jpg",
        },
        {
          title: "威士忌 Whiskey ",
          id: 5,
          details: "lorem",
          imageSrc: "../../assets/alcohol/whiskey.jpg",
        },
        {
          title: "白蘭地 Brandy ",
          id: 6,
          details: "lorem",
          imageSrc: "../../assets/alcohol/brandy.jpg",
        },
        {
          title: "啤酒 Beer",
          id: 7,
          details: "lorem",
          imageSrc: "../../assets/alcohol/beer.jpg",
        },
        {
          title: "葡萄酒 Wine",
          id: 8,
          details: "lorem",
          imageSrc: "../../assets/alcohol/Wine.jpg",
        },
        {
          title: "苦艾酒 Absinthe",
          id: 9,
          details: "lorem",
          imageSrc: "../../assets/alcohol/Absinthe.jpg",
        },
        {
          title: "清酒 Sake",
          id: 10,
          details: "lorem",
          imageSrc: "../../assets/alcohol/japan.jpg",
        },
        {
          title: "燒酒 ",
          id: 11,
          details: "lorem",
          imageSrc: "../../assets/alcohol/shojou.jpg",
        },
        {
          title: "蛋酒 Eggnog",
          id: 12,
          details: "lorem",
          imageSrc: "../../assets/alcohol/Eggnog.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.baseLine {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  margin: 0 100px 0 100px;
}
.base {
  padding: 20px;
}
.base h3 {
  background: "#f4f4f4";
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #ddd;
}
.base h3:hover {
  background: #fff;
  color: #000
}
.base a {
  text-decoration: none;
}
.base img {
  width: 250px;
  height: 250px;
}
</style>
