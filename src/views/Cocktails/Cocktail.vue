<template>
    <div class="cocktailLine">
      <div v-for="cocktail in cocktails" :key="cocktail.id" class="cocktail">
        <RouterLink :to="{ name: 'CocktailDetail', params: { id: cocktail.id } }">
          <h3>{{ cocktail.title }}</h3>
          <img :src="`/assets/alcohol/${cocktail.imageSrc}`" />
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cocktails: [
          {
            title: "美國佬 Americano",
            id: 1,
            details: "lorem",
            imageSrc: "../../assets/cocktail/americano.jpg",
          },
          {
            title: "飛行 Aviation",
            id: 2,
            details: "lorem",
            imageSrc: "../../assets/cocktail/aviation.jpg",
          },
          {
            title: "花花公子 Boulevardier",
            id: 3,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Boulevardier.jpg",
          },
          {
            title: "黛綺莉 Daiquiri",
            id: 4,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Daiquiri.jpg",
          },
          {
            title: "約翰可林斯 John Collins",
            id: 5,
            details: "lorem",
            imageSrc: "../../assets/cocktail/JohnCollins.jpg",
          },
          {
            title: "臨別一語 Last Word",
            id: 6,
            details: "lorem",
            imageSrc: "../../assets/cocktail/LastWord.jpg",
          },
          {
            title: "曼哈頓 Manhattan",
            id: 7,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Manhattan.jpg",
          },
          {
            title: "馬丁尼 Martini",
            id: 8,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Martini.jpg",
          },
          {
            title: "馬丁尼茲 Martinez",
            id: 9,
            details: "lorem",
            imageSrc: "../../assets/cocktail/martinez.jpg",
          },
          {
            title: "內格羅尼 Negroni",
            id: 10,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Negroni.jpg",
          },
          {
            title: "往日情懷 Old Fashioned",
            id: 11,
            details: "lorem",
            imageSrc: "../../assets/cocktail/OldFashioned .jpg",
          },
          {
            title: "拉莫斯琴費茲 Ramos Gin Fizz",
            id: 12,
            details: "lorem",
            imageSrc: "../../assets/cocktail/RamosGinFizz.jpg",
          },
          {
            title: "賽澤瑞克 Sazerac",
            id: 13,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Sazerac.jpg",
          },
          {
            title: "側車 Side Car",
            id: 14,
            details: "lorem",
            imageSrc: "../../assets/cocktail/SideCar.jpg",
          },
          {
            title: "老廣場 Vieux Carré",
            id: 15,
            details: "lorem",
            imageSrc: "../../assets/cocktail/VieuxCarré.jpg",
          },
          {
            title: "威士忌酸酒 Whiskey Sour",
            id: 16,
            details: "lorem",
            imageSrc: "../../assets/cocktail/WhiskeySour.jpg",
          },
          {
            title: "貝里尼 Bellini",
            id: 17,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Bellini.jpg",
          },
          {
            title: "血腥瑪麗 Bloody Mary",
            id: 18,
            details: "lorem",
            imageSrc: "../../assets/cocktail/BloodyMary.jpg",
          },
          {
            title: "卡琵莉亞 Caipirinha",
            id: 19,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Caipirinha.jpg",
          },
          {
            title: "柯夢波丹 Cosmopolitan",
            id: 20,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Cosmopolitan.jpg",
          },
          {
            title: "法式75 French 75",
            id: 21,
            details: "lorem",
            imageSrc: "../../assets/cocktail/French75.jpg",
          },
          {
            title: "長島冰茶 Long Island Iced Tea",
            id: 22,
            details: "lorem",
            imageSrc: "../../assets/cocktail/longisland.jpg",
          },
          {
            title: "邁泰 Mai Tai",
            id: 23,
            details: "lorem",
            imageSrc: "../../assets/cocktail/MaiTai.jpeg",
          },
          {
            title: "瑪格麗特 Margarita",
            id: 24,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Margarita.jpeg",
          },
          {
            title: "含羞草 Mimosa",
            id: 25,
            details: "lorem",
            imageSrc: "../../assets/cocktail/mimosa.jpg",
          },
          {
            title: "薄荷朱利普 Mint Julep",
            id: 26,
            details: "lorem",
            imageSrc: "../../assets/cocktail/MintJulep.jpg",
          },
          {
            title: "莫希托 Mojito",
            id: 27,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Mojito.jpg",
          },
          {
            title: "莫斯科騾子 Moscow Mule",
            id: 28,
            details: "lorem",
            imageSrc: "../../assets/cocktail/MoscowMule.jpg",
          },
          {
            title: "皮斯可酸酒 Pisco Sour",
            id: 29,
            details: "lorem",
            imageSrc: "../../assets/cocktail/PiscoSour.jpg",
          },
          {
            title: "性感海灘 Sex on the beach",
            id: 30,
            details: "lorem",
            imageSrc: "../../assets/cocktail/SexBeach.jpg",
          },
          {
            title: "龍舌蘭日出 Tequila Sunrise",
            id: 31,
            details: "lorem",
            imageSrc: "../../assets/cocktail/TequilaSunrise.jpg",
          },
          {
            title: "薇絲朋 Vesper",
            id: 32,
            details: "lorem",
            imageSrc: "../../assets/cocktail/Vesper.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .cocktailLine {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    margin: 0 100px 0 100px;
  }
  .cocktail {
    padding: 20px;
  }
  .cocktail h3 {
    background: "#f4f4f4";
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #ddd;
  }
  .cocktail h3:hover {
    background: #fff;
    color: #000
  }
  .cocktail a {
    text-decoration: none;
  }
  .cocktail img {
    width: 250px;
    height: 250px;
  }
  </style>
