<!-- <template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
export default {
  // props: ["id"],
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
</style> -->

<template>
  <div>
    <div v-if="selectedItem" class="selectedItem">
      <img :src="`/assets/alcohol/${selectedItem.imageSrc}`" />
      <div class="words">
        <h3>{{ selectedItem.title }}</h3>
        <p>{{ selectedItem.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      bases: [
        {
          title: "Vodka 伏特加",
          id: 1,
          details:
            "由富含糖或澱粉的物質發酵後進行蒸餾並過濾然後加水稀釋得到的的蒸餾酒，酒精含量通常在35%～50%之間，起源於斯拉夫民族，最早的文獻記錄來自於15世紀的波蘭，並於17世紀發展出現代的釀酒產業，在18世紀後，俄羅斯成為伏特加最大的生產國和消費國並持續至今。在其他的國家大眾化後已經愈見少人用傳統淨飲法品嘗伏特加的獨特口味。近年更多人喜歡將它加上其他飲料或以雞尾酒來飲用。",
          imageSrc: "../../assets/alcohol/vodka.jpg",
        },
        {
          title: "蘭姆酒 Rum",
          id: 2,
          details:
            "由甘蔗副產品（如糖蜜或甘蔗汁）通過發酵和蒸餾製成的酒，屬於蒸餾酒中的一類特殊白蘭地，開始於16世紀的英國、法國和西班牙的西印度群島殖民地，因為西印度群島盛產甘蔗，因此歐洲人用發酵後的甘蔗代替葡萄酒，再加以蒸餾而變為蘭姆酒，到17世紀後期，蘭姆酒已取代法國白蘭地，成為三角貿易中的首選交換酒類。目前蘭姆酒也產地也主要集中在加勒比海地區和拉丁美洲。蘭姆酒在西印度群島以及濱海省和紐芬蘭（加拿大東部島嶼）的大多數島嶼文化中扮演了重要角色。這種飲料與英國皇家海軍和海盜間有著著名的聯繫，蘭姆酒利用廉價的原料，釀出即賣，沒有儲存期，味道辛辣刺喉但價格相當便宜，且對壞血病等海上職業病有抑制的功效，酒精也能對在船上放置已久的淡水殺菌消毒，所以很受生活在艱苦環境的水手和海盜的青睞，迅速在大西洋水手和加勒比海海盜中風行開來，在18世紀蘭姆酒成為英國海軍的配給品。",
          imageSrc: "../../assets/alcohol/rum.jpg",
        },
        {
          title: "琴酒 Gin ",
          id: 3,
          details:
            "一種以穀物為原料經發酵與蒸餾製造出的中性烈酒基底，增添以杜松子為主的多種藥材與香料調味後，所製造出來的一種西洋蒸餾酒。琴酒源自荷蘭，如同許多現代烈酒的祖先一樣，它最早的用途是藥，而不是一種飲品。真正讓琴酒在英國廣為流行的關鍵，卻是瑪莉女王的夫婿英王威廉三世。原本是荷蘭國王的威廉（William of Orange）不只本身就是琴酒的愛好者，他更因為當時英-荷聯合王國跟法國之間的戰爭，下令抵制法國進口的葡萄酒與白蘭地，並且開放使用英格蘭本土的穀物製造烈酒就可以得到免許，這立法幾乎可說是為琴酒量身訂造一個非常有利的環境，於是，英國自此躍昇為最重要的琴酒生產國，甚至較發源地的荷蘭更青出於藍。琴酒經常被喻為是雞尾酒的六大基酒之首（其他五種則是蘭姆酒、伏特加、威士忌、白蘭地與龍舌蘭酒），也因此以琴酒為材料的雞尾酒配方種類繁多。",
          imageSrc: "../../assets/alcohol/gin.jpg",
        },
        {
          title: "龍舌蘭 Tequila ",
          id: 4,
          details:
            "以龍舌蘭屬植物作為原料的酒類的合稱，狹義上特指其中最有名的特基拉酒(Tequila)。原產於墨西哥的特基拉鎮，故名，目前仍為主要產地。在墨西哥本土，特基拉酒是所有酒類之中受到法規限制最嚴格的產品，也是該國重要的外銷商品與經濟支柱，而世界上大部分的市場（例如歐盟）也普遍遵循墨西哥的相關法令規範來制訂這種酒類的界定基準。龍舌蘭是種墨西哥原生的多肉植物。龍舌蘭擁有很大型的鱗莖，內部多汁富含糖分，因此非常適合被用來發酵釀酒。早在歐洲人發現新大陸之前，當地的古文明就已知道用龍舌蘭汁釀酒的技術，而於西班牙殖民後引進的蒸餾技術則得以將這類發酵酒進一步製造出蒸餾酒，至於特基拉酒，則嚴格規定只能使用龍舌蘭多達136種的分支裡面，品質最優良的藍色龍舌蘭（Blue Agave）作為原料。這種主要是生長在哈里斯科州海拔超過1500公尺的高原與山地之品種。2006年時，龍舌蘭酒的產區，被聯合國教科文組織列入世界文化遺產名單中。",
          imageSrc: "../../assets/alcohol/tequila.jpg",
        },
        {
          title: "威士忌 Whiskey ",
          id: 5,
          details:
            "一種以發酵穀物製成的蒸餾酒精飲料。不同種類的穀物能夠製成不同種類的威士忌，例如大麥、黑麥、小麥、玉米，通常於木桶中陳放。「威士忌」一詞源自古老的蓋爾語，意思是「生命之水」，通常蘇格蘭、加拿大的品牌會寫成 「Whisky」，而愛爾蘭和美國則會寫成 「Whiskey」，威士忌酒精濃度稍高，多數都會在40％以上。蘇格蘭是最為人熟知的產地，品項十分豐富且多樣，從果香到煙燻風味通通都有，目前以約翰走路、大摩、麥卡倫為此系列之代表品牌。愛爾蘭則是歷史最為悠久的威士忌發源地，價格較為親民，口感輕盈、柔順，帶有豐富的果香，適合威士忌新手的入門選擇。美國因原料穀物豐富，目前產量最大的威士忌種類為波本威士忌，其中又以傑克丹尼爾（Jack Daniel’s）為此類別代表品牌。",
          imageSrc: "../../assets/alcohol/whiskey.jpg",
        },
        {
          title: "白蘭地 Brandy ",
          id: 6,
          details:
            "一種用水果酒二次蒸餾而得到的酒類，含有 35-60% 的酒精，目前市面上賣得最多的白蘭地是從葡萄酒中蒸餾而來的，白蘭地在歐洲大陸的西南部頗為盛行，主要由法國、荷蘭、西班牙和葡萄牙這四個國家生產。16世紀時荷蘭為海上運輸大國，法國是葡萄酒重要產地，荷蘭船主將法國葡萄酒運往世界各地，但當時英國和法國開戰，海上交通經常中斷，而瓶裝的葡萄酒貯藏佔地費用大，於是荷蘭商人將葡萄酒蒸餾濃縮，以節省貯藏空間和運輸費用，運到目的地後再兌水出售。濃縮後的酒風味更佳、價格低廉、酒精濃度更烈，受到巨大歡迎。遂引發一輪創新風潮，貯藏時間越長的白蘭地酒越醇香，蒸餾酒的範圍也從葡萄酒擴散至所有的水果酒。在蒸餾酒發展的初期，法國白蘭地因為高酒精含量和容易運輸的特性，取代葡萄牙在國際酒品市場的核心角色，成為跨大西洋三角貿易的重要角色。其重要程度受普遍信賴，甚至在三角貿易中，有些在非洲的人力費用得以白蘭地支付。法國白蘭地主導的跨洲酒類貿易一直到 17 世紀後期，才被蘭姆酒所取代。大多數白蘭地是透過葡萄酒蒸餾，因此世界上優質白蘭地產區與葡萄酒產區大致相同。19 世紀末，在西歐市場及其海外帝國，由法國和西班牙的白蘭地主導；東歐則由黑海地區的白蘭地主導，包括保加利亞、克里米亞和喬治亞。傳統上，白蘭地是在室溫下以酒杯或鬱金香杯中飲用，也可以添加到其他飲料中，以製作成流行的雞尾酒。",
          imageSrc: "../../assets/alcohol/brandy.jpg",
        },
        {
          title: "啤酒 Beer",
          id: 7,
          details:
            "最常見的原料是小麥與大麥，利用澱粉水解、發酵產生糖分後製成的酒精飲料。啤酒是世上歷史最悠久，普及範圍最廣的酒精飲料之一，其最早歷史可追溯到公元前3100-3500年前的新石器時代的美索不達米亞。如今，啤酒釀造工業遍布全球，其中包括許多大型的跨國啤酒公司和不計其數的小型酒吧或釀造廠。芬蘭、丹麥、澳洲、德國和愛爾蘭五個國家擁有眾多世界級的啤酒品牌，是當今世界的五大啤酒國。啤酒的基本原料為水，用於轉換成酒精的澱粉，所以水質對啤酒的品質有著很大的影響。當地的水質影響甚至決定了許多啤酒口味。一般啤酒的酒精度數通常在3%以上至14%左右這個範圍。",
          imageSrc: "../../assets/alcohol/beer.jpg",
        },
        {
          title: "葡萄酒 Wine",
          id: 8,
          details:
            "用新鮮葡萄果實或葡萄汁，經過發酵釀製而成的酒精飲料。在水果中，由於葡萄的葡萄糖及果糖含量較高，貯存一段時間就會發出酒味，因此常常以葡萄釀酒。葡萄酒是目前世界上產量最大、普及最廣的單糖釀造酒。「wine」可以被用來指其他的水果酒，但是通常需要冠上那種水果的名稱，如傳統蘋果酒（Apple Wine）。在沒有冠上任何名稱時，它單單用於指葡萄酒。考古發現的最早的葡萄酒是在黑海東岸的喬治亞，距今約8000年前。6000多年前傳到歐洲，以地中海區域為主，兩河流域的蘇美爾人和尼羅河流域的古埃及人也會釀造葡萄酒。西班牙半島也是世界上較早接觸葡萄酒的地點，起源於早期腓尼基入侵，是歐洲最古老的葡萄酒之一，其演變已明顯受到世界上許多偉大的帝國和文明如腓尼基人、希臘人、羅馬人、摩爾人、西班牙和英國的影響。世界各地的紅葡萄酒釀製程序大都是去梗、破碎，再將果汁、果肉、果核和果皮都裝進發酵桶中發酵，這些發酵桶會先被低劑量的二氧化硫處理以防止微生物感染。葡萄汁液在發酵桶中發酵成酒精的同時，果皮和果肉經過在葡萄汁中的浸泡，在5-7日後便會釋出葡萄酒的色素和勁度。與白葡萄酒相比，紅葡萄酒的釀造則要靈活的多。白葡萄酒的釀造是直接將果實放入壓榨機進行壓榨，果汁澄清後入罐發酵。葡萄酒在歐洲廣受歡迎，不論是作為飲料或是地中海式烹飪的佐料，在簡單的或是複雜的用途都被廣泛的使用著。在烹飪中，它的價值不只作為一種飲料，料理人更借重它的酸度，使得料理更加的富有風味。在葡萄酒的世界中十分講究，不同的餐點應搭配不同的葡萄酒類。紅葡萄酒、白葡萄酒和汽泡酒是最受歡迎的，並且也被稱為淡酒，因為他們只包含大約10-14%的酒精。葡萄酒的風味取決於釀酒葡萄的品種。因為不同的葡萄，所釀製出來的香味、喝的方式、收藏的方式都不同，所以風味會有很大的差別。葡萄的品種千變萬化，而不同地區的地理位置、緯度、土質與氣候，都有適合栽培的葡萄品種。世界最有名的葡萄酒大多產自法國，法國葡萄酒的釀造歷史可追溯到羅馬帝國時期。由於法國氣候溫和，除了北部諾曼第一些區域以外，全國都能生產高品質的葡萄。在1996年時，全國共有超過818,000公頃的葡萄園，13個產酒區域，葡萄酒產量超過46億公升。至於其他歐洲國家，義大利與西班牙也是傳統的葡萄酒大國，以往多生產一般餐酒，歐洲國家生產的葡萄酒，通稱為舊世界葡萄酒，其他區域生產的葡萄酒，則稱為新世界葡萄酒，美國、澳洲、紐西蘭、智利、阿根廷、以及南非，是新世界葡萄酒的主要產區。",
          imageSrc: "../../assets/alcohol/Wine.jpg",
        },
        {
          title: "苦艾酒 Absinthe",
          id: 9,
          details:
            "一種茴香味的烈酒，從植物性藥材中萃取，其中包括苦艾的花和葉，綠茴芹、甜茴香和其他藥材和食用香草。本來是透明無色的，但人們自古就喜歡給它注入植物的天然綠色。傳統上苦艾酒裝瓶時是不加糖，因此將其歸類為烈酒。傳統瓶裝的苦艾酒酒精度數很高，但飲用前通常使用冰水稀釋，苦艾酒中酒精占了絕大部分，可以達到45%-89.9%之間。18世紀後期，苦艾酒興起於瑞士納沙泰爾州。在19世紀末和20世紀初，它成為法國大受歡迎的酒精飲料，尤其是在巴黎的藝術家和作家之間，19世紀40年代，苦艾酒的受歡迎程度穩步增長，當時，法國軍隊將苦艾酒作為預防瘧疾的藥物。當部隊返鄉，士兵們將對苦艾酒的嗜好一起帶回了家。在酒吧、小酒館、咖啡館以及歌舞場所，喝苦艾酒的習俗逐漸變得如此受歡迎。歐內斯特·海明威、文森特·梵谷、奧斯卡·王爾德等等都是知名的苦艾酒的愛好者。苦艾酒也經常被描繪成一個危險的容易上癮的精神藥物。到1915年在美國和歐洲大部分國家，包括法國，荷蘭，比利時，瑞士和奧匈帝國，苦艾酒都被取締。19世紀末，一些劣質的苦艾酒品牌偶爾會在酒中摻雜銅、鋅、藍色植物或其他染色材料想方設法使苦艾酒呈現綠色。這些謀取暴利者甚至使用三氯化銻來增強懸乳效果，更有甚者使用低劣的工業酒精以及粗糙的蒸餾技術導致酒中留有甲醇等類似的廢棄蒸餾產物。這也有可能是造成苦艾酒在人們心目中變成了產生幻覺的毒藥或有害飲料的原因。",
          imageSrc: "../../assets/alcohol/Absinthe.jpg",
        },
        {
          title: "清酒 Sake",
          id: 10,
          details:
            "在東亞地區，清酒是指由稻米發酵而成的「釀造酒」，酒色透明。以米、米麴及水，進行發酵後，就形成濁酒，經過濾，去除酒中雜質，再以竹炭或木炭進行脫色後，就成為清酒。而其中只有使用日本國產米，並在日本國內釀造的清酒才被稱為「日本酒」。酒精濃度平均在15%左右。",
          imageSrc: "../../assets/alcohol/japan.jpg",
        },
        {
          title: "燒酒 ",
          id: 11,
          details:
            "是東亞傳統蒸餾酒的一類，是以麴類、酒母為糖化發酵劑，並以穀物等澱粉質（糖質）原料，經蒸煮、糖化、發酵、蒸餾、陳釀和勾兌而釀制而成的酒，色透明。依照出產地區可分為中國燒酒（白酒）、日本燒酒（燒酎）、韓國燒酒等。韓國燒酒最初僅指蒸餾燒酒。傳統韓國燒酒的酒精度較高，一般在30度以上。20世紀中葉後，稀釋式燒酒取代了蒸餾式燒酒成為主要的提煉方式，在1990年代之前，韓國燒酒的酒精含量幾乎佔25％以上。目前市面上的燒酒通常是指酒精含量從16.8％到53％不等的稀釋式燒酒。韓國燒酒一般被認為是在13世紀的高麗王朝高宗忠武時期出現，其正時蒙古入侵高麗，高麗遂成為其附庸國。燒酒在元朝被稱為「燒酎」。「酎」的本意是指糧食經過三次蒸餾，如同接露水一樣得成的酒，因此也叫「露酒」。據《高麗史》紀載，恭愍王時期的慶尚道大護軍金瑨喜愛燒酒，常聚集其部下與名妓開燒酒宴。因為當時釀製燒酒的蒸餾酒技術不發達，所以價格高昂，受富裕階層喜愛；平民雖然也會自釀燒酒，但多作藥用。據說當時的燒酒種類多樣，且由於是以純粹的穀物製作而成，因此味道極佳。1460年，琉球國王尚泰久遣使赴朝鮮，將泡盛贈與朝鮮世祖，當時稱為「天竺酒」。",
          imageSrc: "../../assets/alcohol/shojou.jpg",
        },
        {
          title: "蛋酒 Eggnog",
          id: 12,
          details:
            "是一類飲料。主要成份為牛奶、奶油、雞蛋、再加入糖、肉豆蔻、肉桂、香草等香料。本身不含酒精，但可以在其中加入蘭姆酒或白蘭地，作成雞尾酒，以提升其香味。最早起源於英格蘭，英國人相信蛋酒有治療感冒的功效，常在冬日食用。在美國及加拿大非常流行，特別是在聖誕節、新年等冬季節日。",
          imageSrc: "../../assets/alcohol/Eggnog.jpg",
        },
      ],
    };
  },
  watch: {
    "$route.params.id": "fetchData",
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const itemId = this.$route.params.id;
      // 在實際應用中，你可能需要從後端或其他地方獲取數據
      // 這裡僅為示例，實際中需要根據你的具體情況來獲取數據
      this.selectedItem = this.bases.find(
        (item) => item.id === parseInt(itemId)
      );
    },
  },
};
</script>

<style>
.selectedItem {
  display: flex;
  margin: 100px;
}
.selectedItem img {
  width: 450px;
  height: 400px;
  margin: 15px;
}
.words {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.selectedItem .words h3 {
  margin: 20px;
  font-size: 30px;
  font-weight: 600;
}
.selectedItem .words p {
  margin: 20px;
  font-size: 16px;
}
@media (max-width: 950px) {
  .selectedItem {
    flex-direction: column;
  }
  .selectedItem img {
    position: relative;
    display: flex;
  }
}
@media (max-width: 600px) {
  .selectedItem img {
    width: 350px;
    height: 300px;
  }
}
@media (max-width: 540px) {
  .selectedItem {
    margin: 70px;
  }
}
@media (max-width: 450px) {
  .selectedItem {
    margin: 50px;
  }
  .selectedItem img {
    width: 300px;
    height: 250px;
  }
  .words {
    margin: 10px;
  }
  .selectedItem .words h3 {
    margin: 10px;
    font-size: 24px;
  }
  .selectedItem .words p {
    margin: 10px;
  }
}
@media (max-width: 400px) {
  .selectedItem {
    margin: 30px;
  }
}
</style>
