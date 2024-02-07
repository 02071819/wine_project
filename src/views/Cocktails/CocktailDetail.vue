<template>
  <div>
    <div v-if="selectedItem" class="selectedItem">
      <img :src="`/assets/alcohol/${selectedItem.imageSrc}`" />
      <div class="words">
        <h3>{{ selectedItem.title }}</h3>
        <ul>
          <li>{{ selectedItem.recipe1 }}</li>
          <li>{{ selectedItem.recipe2 }}</li>
          <li>{{ selectedItem.recipe3 }}</li>
          <li>{{ selectedItem.recipe4 }}</li>
        </ul>
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
      cocktails: [
          {
            title: "美國佬 Americano",
            id: 1,
            recipe1: "金巴利 30 ml",
            recipe2: "甜苦艾酒 30 ml",
            recipe3: "蘇打水 少許",
            recipe4: "葡萄柚皮 裝飾",
            details: "源自於義大利的雞尾酒，經典的苦味調酒。首先出現在發明者 Gaspare Campari 的酒吧，是IBA列出的世界雞尾酒大賽的比賽雞尾酒項目之一，最早的名字叫 Milano-Torino（米蘭—杜林），在美國禁酒令期間，美國人大量湧入義大利和歐洲，當時義大利人發現這群美國佬特別愛喝 Milano-Torino，才將這杯調酒改名為 Americano。",
            imageSrc: "../../assets/cocktail/americano.jpg",
          },
          {
            title: "飛行 Aviation",
            id: 2,
            recipe1: "琴酒 45ml",
            recipe2: "黑櫻桃酒 Maraschino Luxardo 15ml",
            recipe3: "新鮮檸檬汁 15ml",
            recipe4: "紫羅蘭香甜酒 少許",
            details: "這支酒由四個主要元素構成：琴酒、黑櫻桃酒（Maraschino）、檸檬汁、紫羅蘭酒。具有香草調性的琴酒帶上酸甜感，與具有花香的紫羅蘭酒結合之後，產生的迷人香氣，不管你是不是琴酒的愛好者，只要你喜歡花、藥草系的飲品，那麼這隻調酒絕對會讓你上癮。這杯酒的創始人眾說紛紜，一直到了近代才確定是1916年紐約沃利克飯店（Hotel Wallick）調酒師雨果．安司林（Hugo Ensslin）的創作，而酒譜也被編寫在他的著作《Recipes for Mixed Drinks》中。",
            imageSrc: "../../assets/cocktail/aviation.jpg",
          },
          {
            title: "花花公子 Boulevardier",
            id: 3,
            recipe1: "波本威士忌 45ml",
            recipe2: "金巴利苦酒 Campari 30ml",
            recipe3: "甜紅苦艾酒 Sweet vermouth 30ml",
            recipe4: "柳橙皮 裝飾",
            details: "花花公子是一種由威士忌、甜苦艾酒和 金巴利調製而成的調酒。起源於 20 年代末的巴黎，在 2010 年代作為內格羅尼的變體迅速流行起來。，並於 2020 年成為IBA 官方雞尾酒。花花公子使用威士忌替代琴酒，有相當豐富的口感和層次，Boulevardier 首次出現在巴黎雞尾酒書《Barflies and Cocktails》（1927 年）中，作者是出生於美國的作家厄斯金·格溫(Erskine Gwynne) ，他在巴黎創辦了一份名為Boulevardier 的月刊，該雜誌於1927 年至1932 年出版。",
            imageSrc: "../../assets/cocktail/Boulevardier.jpg",
          },
          {
            title: "黛綺莉 Daiquiri",
            id: 4,
            recipe1: "白色蘭姆酒 60ml",
            recipe2: "綠檸檬汁 20ml",
            recipe3: "糖漿 一茶匙",
            recipe4: "檸檬片 裝飾",
            details: "以蘭姆酒為基底，黛綺莉 Daiquiri 如白玉般清透的酒液，搭配上微酸甜的口感，據說是由一位在古巴南部 Daiquiri 礦區工作的美國工程師 Jennings S. Cox 所創作而成。由於當地氣候炎熱，加上礦場工人們必須長時間在密不透風的環境下工作，揮汗如雨十分難受。於是他們想了一個方法，將古巴人的標準配備──蘭姆酒與隨手可得的綠色檸檬、糖全部加在一起，搖晃均勻後，一杯能夠幫助消暑以及提振精神的飲品就這麼誕生了。說起 Daiquiri 與海明威之間的淵源，大概要從他定居古巴開始說起，當時他常常前往哈瓦那（Havana）一間名為 El Floridita 的酒吧，因為他非常熱愛 Daiquiri ，於是改良了原先的版本，依據他喜愛的口味，將原本的糖漿換成黑櫻桃利口酒，藉此降低糖分，並額外添加一些葡萄柚汁來調整味道，而這杯特調也就以海明威為名，稱作 Hemingway Daiquiri。",
            imageSrc: "../../assets/cocktail/Daiquiri.jpg",
          },
          {
            title: "約翰可林斯 John Collins",
            id: 5,
            recipe1: "琴酒 45ml",
            recipe2: "檸檬汁 30ml",
            recipe3: "糖漿 15ml",
            recipe4: "蘇打水 60ml",
            details: "約翰可林斯是一種雞尾酒，經證明在1869年配方被發明，據說這個名字起源於一位在倫敦很受歡迎的一家旅館 Limmer's Old House 工作的服務生 John Collins所發明的，這是在1790-1817年間在倫敦很受歡迎的一家旅館和咖啡館。這款調酒與另一款 Gin Fizz 配方有點相似，差別主要於Gin Fizz最後在容器內是不加冰的、酒感稍為烈一些。John Collins 口感柔和，風味清新怡人，非常適合夏天。近年常把琴酒用波本威士忌取代。",
            imageSrc: "../../assets/cocktail/JohnCollins.jpg",
          },
          {
            title: "臨別一語 Last Word",
            id: 6,
            recipe1: "琴酒 22.5ml",
            recipe2: "綠夏翠絲藥草酒 Green Chartreuse 22.5ml",
            recipe3: "黑櫻桃酒 Maraschino Luxardo 22.5ml",
            recipe4: "萊姆汁 22.5ml",
            details: "Last Word這杯調酒出現的時間算相當早，在美國禁酒令前就曾有過記載。只是隨著時間這杯調酒也逐漸被淡忘，直到 2003年調酒師Murray Stenson在西雅圖Zig Zag咖啡廳任職時，在自己一堆的老調酒書中翻到《Bottoms Up!》，發現了Last Word，才重新讓這杯調酒出現在世人面前。Murray Stenson將這杯調酒加進店裡酒單，不久後便大受歡迎，逐漸傳遍了美國各大城市酒吧，甚至到歐洲一些都市如倫敦、阿姆斯特丹等。差不多也是在2000年這時候，美國各地都有一些酒吧開始專注在精緻調酒、重現經典調酒上，因此Last Word的風行也被視為這個運動中成功的一次案例。現今最早發現Last Word的資料是一份酒單，是底特律運動俱樂部(DAC)在 1916年 5月提供給會員的酒單。只是在這上面只有酒名和價格，並沒有配方。人們真正得知Last Word是由什麼組成的，則要到1951年由Ted Saucier撰寫的調酒書《Bottoms Up!》。這時記載的Last Word酒譜就已經和現在一樣，由等分的四種材料組成。此外書上還有寫到這杯調酒由DAC提供，並是由美國一位相當知名的戲劇藝人Frank Fogarty 在30年前介紹的。",
            imageSrc: "../../assets/cocktail/LastWord.jpg",
          },
          {
            title: "曼哈頓 Manhattan",
            id: 7,
            recipe1: "裸麥威士忌 Rye Whisky 50ml",
            recipe2: "甜苦艾酒 Sweet Vermouth 20ml",
            recipe3: "香味苦精 Aromatic Bitters 少許",
            recipe4: "酒漬櫻桃 裝飾",
            details: "曼哈頓（Manhattan）是一種由威士忌、香艾酒和苦精調製的雞尾酒。曼哈頓較常使用的威士忌包括黑麥威士忌（傳統選擇）、加拿大威士忌、波本威士忌、調和式威士忌，和田納西州威士忌。關於曼哈頓雞尾酒的起源，一般流傳這個飲品最早出現在1870年代紐約市的曼哈頓酒吧，由Iain Marshall博士在Jennie Jerome所主持的一場宴會上所發明。也有一種說法它是由在百老匯酒吧附近休斯頓街的一名叫做Black的酒保在1860年代所發明。原始的曼哈頓是用美國威士忌，義大利苦艾酒和安格仕苦精混合而成，但在禁酒時期中，由於美國禁止釀製酒精飲料，因此改以較容易取得的加拿大威士忌替代。傳統上認為，曼哈頓需要使用美國黑麥威士忌調製。然而往往不是這樣，現在的曼哈頓更多是使用波本或加拿大威士忌調製。曼哈頓是一種具有相當大變化和創新空間的飲品，往往是調酒師展現自己創造力的最佳利器。在 David A. Embury’s 的《 The Fine Art of Mixing Drinks 》中，甚至將曼哈頓（Manhattan）列為六種基本混合飲品之一。",
            imageSrc: "../../assets/cocktail/Manhattan.jpg",
          },
          {
            title: "馬丁尼 Martini",
            id: 8,
            recipe1: "琴酒 60ml",
            recipe2: "苦艾酒 10ml",
            recipe3: "橙皮或苦精 增添香氣",
            recipe4: "檸檬皮或綠橄欖 裝飾",
            details: "馬丁尼（Martini）被稱做「雞尾酒之王」，屬於餐前酒的一種。在所有調酒中，馬丁尼的調法最多，也是公認最難做的調酒。然而，馬丁尼也是最簡單的調酒。馬丁尼的材料極度簡單，但這兩種極具魅力的基酒讓每一位調酒師都有極大的發揮空間。廣義的來說，只要符合琴酒（Gin）跟不甜苦艾酒（Dry Vermouth）的搭配都可以稱作馬丁尼（Martini）。經典馬丁尼是以琴酒為基礎，但以伏特加取代琴酒也是可以的。琴酒帶有草本植物香味，與苦艾酒很搭配，但有些人覺得這股辛香太濃郁。伏特加馬丁尼會是比較純淨清爽的選擇。「乾」或「濕」則指的是馬丁尼裡苦艾酒的份量。馬丁尼中琴酒與苦艾的比例一般是 6 比 1，點用乾馬丁尼的意思是少點苦艾酒。濕馬丁尼相對比較少見，但意思就是加入更多苦艾酒。",
            imageSrc: "../../assets/cocktail/Martini.jpg",
          },
          {
            title: "馬丁尼茲 Martinez",
            id: 9,
            recipe1: "琴酒 45ml",
            recipe2: "甜味紅苦艾酒 Sweet Red Vermouth 45ml",
            recipe3: "黑櫻桃香甜酒 Maraschino Liqueur 1 bar spoon",
            recipe4: "柑橘苦精 Orange Bitters 2dashes",
            details: "馬丁尼茲 ( Martinez ) 被認為是馬丁尼的前身，起源於19世紀中期，馬丁尼斯是在加利福尼亞的馬丁尼茲鎮（Martinez）由一位名叫朱利奧·里卡爾多（Julio Richelieu）的酒保為一位發現金礦的礦工所創造，而後馬丁尼茲出現在1880年代 Jerry Thomas《Bartender's Guide》( 調酒師指南 )中，知名度便開始上升。這本書首次記錄了Martinez的配方，將其介紹給更廣泛的觀眾。這本書對於晚19世紀和20世紀初的調酒文化產生了重大影響。隨著時間的推移，Martinez演變成更為人們所熟知的馬丁尼（Martini），在20世紀初開始廣受歡迎，尤其是在禁酒時期後，它成為了美國雞尾酒文化的標誌之一。馬丁尼茲整杯飲品用了跟曼哈頓一樣的甜苦艾酒，加入少量黑櫻桃酒。在味道上使用琴酒相對比較被女性所喜愛的，並較能呈現其它元素的風味、口感也較甜。",
            imageSrc: "../../assets/cocktail/martinez.jpg",
          },
          {
            title: "內格羅尼 Negroni",
            id: 10,
            recipe1: "琴酒 30 ml",
            recipe2: "甜苦艾酒 Sweet Red Vermouth 30 ml",
            recipe3: "金巴利 Bitter Campari 30 ml",
            recipe4: "柳橙皮 裝飾",
            details: "尼格羅尼（Negroni）屬於重酒感系的調酒，味道以甜、苦為主要基調。甜味來源是甜苦艾酒（Sweet Vermouth ）、苦味來源則是金巴利酒（Campari）。有關內格羅尼 Negroni 歷史起源，是在1919年義大利某家酒吧，從美國回來的 Negroni 先生點了一杯他最愛的 Americano(美國佬) 原本是以 Campari 為基酒並加了蘇打水，較為清爽的調酒但酒感較低，當天他心情很不好想買醉一波，於是要求調酒師把蘇打水直接換成琴酒，讓酒感更濃厚，同時美國佬裝飾用的檸檬皮也換成了柳橙皮，Negroni 就誕生了，而且非常受歡迎。",
            imageSrc: "../../assets/cocktail/Negroni.jpg",
          },
          {
            title: "往日情懷 Old Fashioned",
            id: 11,
            recipe1: "波本威士忌或裸麥威士忌 Bourbon or Rye Whiskey 45ml",
            recipe2: "方糖 1顆",
            recipe3: "芳香型苦精 Angostura Bitters 2 dashes",
            recipe4: "柳橙皮 裝飾",
            details: "早期製瓶技術尚未普及化，也沒有物流業者幫 Bar 進行今日下單明日到貨的高效率服務，因此只能以最傳統的方式，利用馬車運輸一桶又一桶的波本威士忌或裸麥威士忌的「原酒」到酒吧。因為原酒的口味不穩定且酒精濃度非常高，於是以前的人才會想到可以加點糖或是苦精來掩蓋刺鼻的味道與辛辣的口感，也因此成為了調酒的起點。基本上每間酒吧製作 Old Fashioned 的方式都大同小異，素材包括了威士忌、苦精、糖、橙皮（也有人會放其他柑橘類或櫻桃作為替代）。糖能夠緩和波本威士忌所產生的辛辣口感，水可以降低酒精濃度並帶出威士忌的自然甜味，而苦精則會增加香氣和層次感。藉由調酒師的習慣，改變基酒的強弱、甜度與口感厚度，呈現出的每一杯 Old Fashioned 都擁有獨一無二的風格。在烈酒的選擇上，一般會使用美國波本威士忌，但也可以依照自己的喜好，選擇其他的基酒。粗獷的口感，直接卻不複雜。Old Fashioned 是一杯屬於成熟大人的調酒，不但男性愛喝，也非常適合女性飲用。",
            imageSrc: "../../assets/cocktail/OldFashioned .jpg",
          },
          {
            title: "拉莫斯琴費茲 Ramos Gin Fizz",
            id: 12,
            recipe1: "琴酒 45 ml",
            recipe2: "檸檬汁 15 ml",
            recipe3: "蛋白 30ml 鮮奶油 30 ml",
            recipe4: "糖漿 30 ml 橙花水 3滴 蘇打水 適量",
            details: "這杯調酒發源於美國紐奧良，是由一位名叫 Henry C. Ramos 的調酒師在 1888 年所發明。這是款號稱最費時費力的調酒，最原始酒譜中需搖整整 12 分鐘。之後在 1935 年時，Roosevelt 飯店向 Henry Ramos 的兒子買下這杯酒的版權，才改名為現在的 Ramos Gin Fizz。可以看到  Ramos Gin Fizz 還是有 Gin Fizz 必備的琴酒與蘇打水，也加了鮮奶油和蛋白，這就讓這杯調酒和 Gin Fizz 各方面都產生了天壤之別。Ramos Gin Fizz 雖然麻煩，但卻是一杯非常好喝的調酒。因為加了鮮奶油，喝起來有點像是可爾必思的口感，但還有一些橙花水的柑橘香氣。外觀也是非常吸睛。",
            imageSrc: "../../assets/cocktail/RamosGinFizz.jpg",
          },
          {
            title: "賽澤瑞克 Sazerac",
            id: 13,
            recipe1: "裸麥威士忌/干邑白蘭地 Cognac 50 ml",
            recipe2: "艾碧斯 Absinthe 10 ml",
            recipe3: "方糖 1顆",
            recipe4: "裴喬苦精 Peychaud’s Bitters 2 dash",
            details: "賽澤瑞克做法和 Old Fashioned 有非常相似，一樣都有威士忌、方糖、苦精，但比較特別的是還使用了艾碧斯，讓它增添了更多草本風味。賽澤瑞克被稱為第一杯調酒，這杯調酒出現在 1850 年左右，當時的紐奧良一間咖啡店中出現了這杯調酒。這間咖啡廳的前老闆把店賣掉，跑去做干邑白蘭地的代理商，而接任的老闆則用那支干邑和裴喬苦精、糖製作了一杯調酒，並以那款干邑命名—Sazerac。賽澤瑞克原本其實是一款干邑的名字，而這杯調酒也在紐奧良大受歡迎。後來咖啡店頂讓給店裡的會計 Thomas H. Handy，這位湯瑪士大大非常會做生意。首先它把咖啡廳的名字也改名成「賽澤瑞克咖啡廳」，之後更收購了裴喬苦精，接著就遇到了歐洲葡萄的大災難—根瘤蚜蟲。這種害蟲幾乎要滅絕整個葡萄酒產業，Thomas 便把干邑改為美國自產的裸麥威士忌，也變為現在所熟知的配方。賽澤瑞克一直到現在都還是紐奧良非常受歡迎的調酒，甚至 2008 年當地政府宣布賽澤瑞克為「紐奧良官方調酒」。",
            imageSrc: "../../assets/cocktail/Sazerac.jpg",
          },
          {
            title: "側車 Side Car",
            id: 14,
            recipe1: "干邑白蘭地 Cognac 50ml",
            recipe2: "橙酒 Triple sec 20ml",
            recipe3: "檸檬汁 20ml",
            recipe4: "橙皮 裝飾",
            details: "喜歡喝調酒的各位應該會發現，似乎白蘭地基底的經典調酒比較少。若要選出一杯最具代表的白蘭地調酒，那非 Sidecar 側車莫屬。Sidecar是一杯白蘭地最著名的調酒，配方就是白蘭地基酒以及橙酒、檸檬汁，很基本的烈酒加上酸甜的搭配，側車的起源最常見的說法是在 20 世紀初一戰時期，一位美國上尉在巴黎酒吧點了一杯白蘭地調酒，調酒師端出的調酒就是現在這杯側車。因為這位美國上尉每次到酒吧，都是乘坐著側車過來，因此調酒師便以「側車」命名。Sidecar原本指的是摩托車旁副駕的側車，當時因無法知悉美國軍官的姓名，調酒師便以軍官所坐的側車Sidecar，為他獨特喜好的特調命名，從此Sidecar就被寫入了傳奇調酒的紀錄中，側車就像許多古老的經典調酒，真實創作出它的調酒師早已不可考；就連是否最早發源於巴黎，也不是十分確定。有些調酒書寫說最早的側車其實是出現在倫敦，但也有些人認為是在巴黎大受歡迎後才傳入倫敦。",
            imageSrc: "../../assets/cocktail/SideCar.jpg",
          },
          {
            title: "老廣場 Vieux Carré",
            id: 15,
            recipe1: "裸麥威士忌 Rye Whiskey 30 ml",
            recipe2: "白蘭地 Cognac 30 ml",
            recipe3: "紅色苦艾酒 Sweet Vermouth 30 ml",
            recipe4: "班尼迪克汀 Bénédictine 1 匙 裴喬苦精 Peychaud’s Bitters 1 dash",
            details: "班尼迪克汀是一款歷史非常悠久的藥草利口酒，雖然可能相對 Campari、野格等比較沒那麼知名，但它也是許多調酒中常見的角色。像是在老廣場中就絕對必加；或是新加坡司令裡面也有它的身影。老廣場這杯調酒被發明於 30 年代，是由調酒師 Walter Bergeron 在紐澳良蒙特萊昂酒店（Hotel Monteleone）的酒吧中所創作的。Vieux Carré 指的就是紐澳良的法語區，這個字也有老街區的意思，因為這區是紐奧良最早期開始發展的地方之一，而蒙特萊昂酒店也位在此區。這杯調酒出現後也成為紐奧良雞尾酒的代表作之一。",
            imageSrc: "../../assets/cocktail/VieuxCarré.jpg",
          },
          {
            title: "威士忌酸酒 Whiskey Sour",
            id: 16,
            recipe1: "波本威士忌 Bourbon Whiskey 45 ml",
            recipe2: "檸檬汁 25 ml",
            recipe3: "糖漿 20 ml",
            recipe4: "蛋白 20ml",
            details: "若要選新手的第一杯調酒，Whiskey Sour 絕對是其中之一。加了蛋白的 Whiskey Sour 又被稱為 Boston Sour，但兩者實在太相近了，漸漸加了蛋白也被稱為 Whiskey Sour。此外還有一種 Whiskey Sour 的變形版也很受歡迎，就是再浮上一層紅酒，這種做法的 Whiskey Sour 最知名的名稱叫做 New York Sour，另外又被稱為Chicago Sour、Continental Sour、Southern Whiskey Sour 等。Whiskey Sour 最早出現的紀錄是在 1870 年報紙上。",
            imageSrc: "../../assets/cocktail/WhiskeySour.jpg",
          },
          {
            title: "貝里尼 Bellini",
            id: 17,
            recipe1: "白桃果泥 White Peach Puree 50ml",
            recipe2: "義大利 Prosecco 氣泡酒 100ml",
            recipe3: "水蜜桃片 裝飾",
            recipe4: "香檳杯",
            details: "貝里尼 ( Bellini ) 這款調酒有著清爽的白桃風味和氣泡感，是不太喝酒的女生也很容易入口的美味調酒。說起義大利，很多人第一時間都會想到水都威尼斯，威尼斯除了優美的風景之外，還有一款用水嫩的水蜜桃醞釀出的經典好酒 Bellini。它是由威尼斯哈利酒吧的老闆，在1934年至1948年間發明的，運用了甜蜜的水蜜桃搗成泥，加上喝起來很爽的氣泡酒，碰撞出甜蜜又清涼的風味。因為主體是水蜜桃的關係，酒的顏色是粉紅色，讓發明者想起了威尼斯藝術家 喬瓦尼·貝里尼 的一幅畫中的聖人長袍，所以就以此作者的名字取名。此款酒因加入不同水果還有其他變化版 Puccini – 加新鮮橘子汁、Rossini – 加新鮮草莓泥、Tintoretto – 加新鮮石榴汁。",
            imageSrc: "../../assets/cocktail/Bellini.jpg",
          },
          {
            title: "血腥瑪麗 Bloody Mary",
            id: 18,
            recipe1: "伏特加 45ml",
            recipe2: "蕃茄汁 90ml 檸檬汁 15ml",
            recipe3: "伍斯特醬 Worcestershire Sauce 2dashes 辣椒醬 (Tabasco)、鹽、胡椒 適量",
            recipe4: "鹽口 & 芹菜 & 醃橄欖  裝飾",
            details: "Bloody Mary 的起源最具代表性的是來自1920年巴黎的 Harry's New York 酒吧，由調酒師 Fernand Petiot 發明。至於為什麼會叫血腥瑪麗，是因為嗆辣的味道加上五味雜陳的風味，還有鮮紅如鮮血的外觀，如同在16世紀時英格蘭和愛爾蘭女王為了剷除異己下令燒死約300名宗教異端人士，得來「血腥瑪麗」的綽號。許多酒吧的調酒師都有自己秘密的修正配方。基酒可以換成各種酒類，而血腥瑪麗如果不含酒精，也叫「處女瑪麗」。",
            imageSrc: "../../assets/cocktail/BloodyMary.jpg",
          },
          {
            title: "卡琵莉亞 Caipirinha",
            id: 19,
            recipe1: "巴西甘蔗酒 Cachaça 60ml",
            recipe2: "檸檬角 切塊 半顆",
            recipe3: "砂糖 4 Teaspoons",
            recipe4: "古典杯",
            details: "卡琵莉亞（Caipirinha）這款由萊姆片點綴的調酒，則是巴西雞尾酒的代表。卡琵莉亞的製作簡易，只要將巴西經典的甘蔗酒卡沙夏（Cachaça）加入糖、冰塊、萊姆汁，並用幾片萊姆片點綴就完成了。卡琵莉亞的前身，是由蜂蜜、大蒜、以及檸檬調和而成的飲料。這款飲料就是巴西家庭用來對付小病小痛的家傳秘方。遺憾的是，1918年西班牙入侵中南美洲，此舉不僅破壞當地文化紋理，也帶來西班牙流感。由蜂蜜、大蒜及檸檬組成的飲料失去療效，巴西人迫切尋找新的秘方，此時他們發現，卡沙夏這款由甘蔗汁蒸餾後的蒸餾酒似乎就是解答，葡萄牙殖民者在1500年代早期將甘蔗引進巴西，當地出現製糖廠後，製糖廠裡的奴隸使用甘蔗汁蒸餾成酒飲，也就是我們現在俗稱的卡沙夏。在當時，飲酒後酒精在喉嚨及胃引發的灼熱感，讓人相信它具有殺菌的功效，因此當地人開始將卡沙夏加進家傳偏方裡，並把蜂蜜換成糖、大蒜換成冰塊，再加上原先的萊姆汁，製成我們現在熟知的卡琵莉亞，對抗由殖民者帶來的西班牙流感。在西班牙流感平息後，卡沙夏及卡琵莉亞的地位也被鞏固。1922年二月，卡琵莉亞正式成了巴西國飲。",
            imageSrc: "../../assets/cocktail/Caipirinha.jpg",
          },
          {
            title: "柯夢波丹 Cosmopolitan",
            id: 20,
            recipe1: "伏特加 Vodka Citron 40ml",
            recipe2: "橙酒 Cointreau 15ml",
            recipe3: "新鮮萊姆汁 15ml",
            recipe4: "蔓越莓汁 30ml",
            details: "柯夢波丹 ( Cosmopolitan ) 是一杯相當精典的調酒，尤其在 90 年代更是廣受歡迎。柯夢波丹大約在 70 年代後半到 80 年代時被發明。80 年代柯夢波丹在舊金山一帶已經是相當熱門的調酒，後來傳到了紐約酒吧 The Odeon，在酒吧中工作的 Toby Cecchini 和 Melissa Huffsmith 被認為將柯夢波丹定型為現在常見樣子的人，其中又以 Toby Cecchini 的名氣更大。柯夢波丹之所以能成為家喻戶曉的經典調酒，主要可以歸功於兩件事。首先是調酒傳奇 Dale “King Cocktail” DeGroff 的推廣。Dale 在舊金山的一間餐廳中遇到這款調酒（是前面有提到的 Neal 後來服務的餐廳），並將這款調酒帶回曼哈頓，以及加入他最著名的對著火焰噴附柑橘皮油。這種作法會讓皮油在碰到火焰後瞬間燃燒，除了視覺上的震撼外也會帶來和新鮮柑橘不同的香氣。而在葛萊美獎的派對上，Dale 為巨星瑪丹娜調製了柯夢波丹，記者也捕捉到瑪丹娜喝柯夢波丹的畫面，讓這杯調酒聲名大噪。雖然因此有些誤傳是 Dale 發明了柯夢波丹，但他本人倒是從沒如此說過。另外一件則是影集《慾望城市》的推波助瀾，這部成功的影集中四位女主角都熱愛啜飲柯夢波丹，瞬時讓柯夢波丹與都會時尚女性畫上等號。的確這杯調酒雖有粉色艷麗的外觀，實際上卻有不低的酒感。",
            imageSrc: "../../assets/cocktail/Cosmopolitan.jpg",
          },
          {
            title: "法式75 French 75",
            id: 21,
            recipe1: "琴酒 30 ml",
            recipe2: "糖漿 15 ml",
            recipe3: "檸檬汁 15 ml",
            recipe4: "香檳 60 ml",
            details: "法式 75 這個名字以法國發明的 75 mm 野戰砲來命名。 75 mm 野戰砲是在一戰時廣泛使用的武器，以精準、快速的射擊聞名。把調酒命名為法式 75 ，當然就是指它可以快速的撂倒人。法式 75 後來更演變出各式不同的版本，但同樣都是以 X 式+數字命名。例如加波本的法式 95、加干邑的法式 125；或是加龍舌蘭和苦精變成墨式 55 等。法式 75 看起來雖然是清爽氣泡系的調酒，但其實也相當猛烈。除了琴酒與香檳本身都有一定濃度外，香檳的微小氣泡也更容易把酒精帶進血液裡。因此酒意很容易上來。",
            imageSrc: "../../assets/cocktail/French75.jpg",
          },
          {
            title: "長島冰茶 Long Island Iced Tea",
            id: 22,
            recipe1: "伏特加 15ml 琴酒 15ml",
            recipe2: "龍舌蘭 15ml 蘭姆酒 White rum 15ml",
            recipe3: "君度橙酒 Cointreau 15ml",
            recipe4: "糖漿 20ml 檸檬汁 30ml 可樂 適量",
            details: "雞尾酒界的「混酒之王」，其高濃度的酒精和柔順的酒感著名，是快速將自己進入微醺、酒醉狀況的首選利器。長島冰茶的起源有兩種說法，一種是1972 年Robert Butt這位調酒師聲稱在紐約長島的橡樹攤客棧工作時，創作了這杯調酒。另有一說，長島冰茶源自於美國禁酒令的時期，當時無法明目張膽地飲酒及賣酒，酒保們將4種烈酒混合，加入可樂調成茶色，並取名為冰茶，來躲避警察的查緝。很多酒吧都會將其原料進行調整，有些會將基酒的種類做變化，有些則是將君度橙酒與其他利口酒做替換。不過，幾乎都會維持使用四種以上的基酒，搭配可樂。長島冰茶本身就是快速追尋酒感的一杯調酒，因此衍生出許多變種。長島冰茶第二代就是在原來的配方中，多加入一份波本威士忌，長島冰茶第三代則是在第二代中再多加入一份白蘭地，基本上就是六大基酒教科書，讓你一次喝遍六大基酒。而廣島冰茶用生命之水取代vodka，並使用高濃度的151取代一般45％蘭姆酒。長灘冰茶則是用小紅莓汁替代可樂，增加酸甜輕鬆感。",
            imageSrc: "../../assets/cocktail/longisland.jpg",
          },
          {
            title: "邁泰 Mai Tai",
            id: 23,
            recipe1: "白蘭姆酒 30ml",
            recipe2: "高年份金色/深色蘭姆酒 Martinique Molasses Rhum* 30ml",
            recipe3: "庫拉索柑橘酒 Orange Curacao 15ml 杏仁糖漿 Orgeat Syrup (Almond) 15ml",
            recipe4: "新鮮萊姆汁 30ml 糖漿 7.5ml",
            details: "邁泰（Mai-Tai）源自蘭姆酒的故鄉加勒比海，創始人說法眾說紛紜，但比較有趣的就是 “Mai-Tai” 這個詞在大溪地語中是「Very Good！」的意思。據說是 1944 年，由維克商人維克多·伯傑隆（Victor Jules Bergerron）所創作的一款酒，但同樣是 Tiki 風創始人的Donn Beach 也主張自己1933 年先創作的。邁泰算是一杯耳熟能詳的經典雞尾酒，由其熱帶調酒的形象，一直深植人心，華麗的裝飾鳳梨、蘭花還有小雨傘。",
            imageSrc: "../../assets/cocktail/MaiTai.jpeg",
          },
          {
            title: "瑪格麗特 Margarita",
            id: 24,
            recipe1: "龍舌蘭 Tequila 100% Agave 50ml",
            recipe2: "橙酒 Triple Sec 20 ml",
            recipe3: "萊姆汁 15 ml",
            recipe4: "檸檬片、鹽口 裝飾",
            details: "瑪格麗特主要材料有龍舌蘭、橙酒和萊姆，就像許多經典調酒一樣都是照著「基酒+橙酒+酸」這個公式，例如琴酒做基酒是 White Lady；白蘭地則是 Side Car，龍舌蘭的話就是瑪格麗特。瑪格莉特的起源眾說紛紜，一則是瑪格麗特是在1949 年的全美調酒大賽中的冠軍調酒，創作者調酒師約翰在接受訪問時，告訴記者這杯當初的冠軍調酒其實是為了紀念他的初戀情人Margarita。他們一同出遊打獵時，女友瑪格麗特竟然誤中流彈，失血過多倒在約翰的懷中死去。令約翰懊悔不已，他將這份悲痛化為調酒，就以女友之名命名。另一則則是一名餐廳老闆 Herrera ，他宣稱自己 1938 年時，餐廳來了一位舞者，表示除了龍舌蘭她對所有酒都過敏，但她又不喜歡直接純飲。為了完成客人的心願 Herrera 把傳統喝龍舌蘭 shot 的材料組合，就成了這杯瑪格麗特了。除此之外還有十幾個人說他是瑪格麗特發明者。瑪格麗特除了故事充滿傳奇，它也是美國數一數二受歡迎的調酒。美國對於瑪格麗特的喜愛不只如此，除了經典瑪格麗特外，他們還有許多改編的版本，各式不同的顏色與口味，甚至還發明了冰沙版本的凍霜瑪格麗特。",
            imageSrc: "../../assets/cocktail/Margarita.jpeg",
          },
          {
            title: "含羞草 Mimosa",
            id: 25,
            recipe1: "新鮮橙汁 75ml",
            recipe2: "普羅賽柯 Prosecco 75ml",
            recipe3: "橙子皮卷 裝飾",
            recipe4: "笛形香檳杯",
            details: "酒如其名，Mimosa是款像含羞草般清新的調酒，而且和大多數經典款調酒一樣，成分相當簡單，只需將15ml Grand Mariner柑橘酒與60ml新鮮柳橙汁倒入香檳杯中，最後加入60ml冰透的香檳，稍微攪拌就完成。 Mimosa的由來非常有趣，據聞最早的配方是出現在1921年倫敦Buck's Club中，它的招牌雞尾酒Buck's Fizz，就是由1：2的柳橙汁與香檳調製而成；但在4年後，巴黎大飯店Ritz Hotel酒吧中出現了這杯Mimosa，配方是1：1的橙汁與香檳，和4年前那杯看來只有比例上不同，但由於Ritz Hotel是當年世界當紅飯店，Mimosa從此大受歡迎，知名度遠遠超越它的孿生兄弟。這場孿生之謎，最後演變成加料之戰，Buck's Fizz此後開始出現加入紅石榴糖漿的新版本；Mimosa也開始加入法國Grand Mariner柑橘酒調味，兩者風味分歧，變得相當不同。",
            imageSrc: "../../assets/cocktail/mimosa.jpg",
          },
          {
            title: "薄荷朱利普 Mint Julep",
            id: 26,
            recipe1: "波本威士忌 Bourbon Whiskey 60 ml",
            recipe2: "新鮮薄荷葉 fresh Mint sprigs 8~10 片",
            recipe3: "砂糖 Powdered Sugar 1 茶匙",
            recipe4: "水 2 茶匙",
            details: "Julep最早出現在15世紀，當時是一種無酒精、帶甜味的藥用飲品，18世紀左右開始出現加入琴酒、威士忌、蘭姆酒、白蘭地等不同基酒版本的Julep，而無論基酒為何，加入大量碎冰與薄荷葉，是最重要的共同特色，而且Julep標配是裝在銀杯裡。如同許多經典調酒一樣，薄荷朱利普的確切發明者早已不可考，因為這杯調酒的歷史非常悠久，早在 18 世紀時美國馬里蘭、北卡羅來納、維吉尼亞等地就流行這種喝法。根據一些書本紀載，維吉尼亞人在早上起床時就會先喝杯薄荷朱利普，就像現在早餐喝咖啡或牛奶一樣正常。不過早期的薄荷朱利普和現在不大相同，在最早其實是以蘭姆酒作為基底。另外再後來的一些調酒書中，也有出現以白蘭地為基底的薄荷朱利普。現在廣為流傳的波本基底，反而是較後期才誕生的。之所以波本基底會廣為流傳，也跟美國本土的威士忌盛行有關。當時美國威士忌是較便宜的選擇，當薄荷朱利普傳到波本大本營肯塔基時，自然取代了其他基酒。因此薄荷朱利普與其說是這杯酒的名字，還比較像是一種喝法，就像 Fizz、Collins 等，所以其實也可以喝干邑朱利普、裸麥朱利普或蘭姆朱利普。許多薄荷朱利普的照片都是裝在無把金屬銀杯中，並且杯壁上會結了一層霜，看起來非常美型又清涼。",
            imageSrc: "../../assets/cocktail/MintJulep.jpg",
          },
          {
            title: "莫希托 Mojito",
            id: 27,
            recipe1: "薄荷葉 Mint Sprigs 6小片",
            recipe2: "白蘭姆酒 White Cuban Ron 45ml",
            recipe3: "新鮮萊姆汁 20ml",
            recipe4: "糖 2 茶匙 蘇打水 適量",
            details: "如果要從蘭姆基調的調酒之中，選出最有名的一款調酒，說莫希托（Mojito）絕對是首選。光是配方就有無數個版本，是一種傳統的古巴高球雞尾酒。這款調酒基本上不只會在酒吧裡出現，在餐廳、雪茄吧，甚至是一些咖啡店都有超高的現身率。Mojito 是一杯連資深醉漢海明威都拍手叫好的不敗經典，海明威曾經說過「我的 Mojito 在 La Bodeguita 小酒館 ，我的 Daiquiri 在 El Floridita 小酒館」。莫希托（Mojito）名稱的由來有許多種說法，有一派認為是一種以薄荷、檸檬為底做成的類似醬料的質感。另外一種說法則是源自西班牙文 。而在美國南方的方言中「mojo」一詞也有「魔力」的意思。只要不特別討厭薄荷，沒什麼意外的話，這杯酒不但是許多人心中的第一名，也是去新酒吧時的一張安全牌。但點酒時要特別小心，念法上這裡的「J」務必要發「H」音。",
            imageSrc: "../../assets/cocktail/Mojito.jpg",
          },
          {
            title: "莫斯科騾子 Moscow Mule",
            id: 28,
            recipe1: "伏特加 Smirnoff Vodka 45ml",
            recipe2: "新鮮萊姆汁 10ml",
            recipe3: "薑汁啤酒 Ginger Beer 120ml",
            recipe4: "糖 酌量",
            details: "Moscow Mule是一款帶有薑味的調酒，此款調酒發明於1941年，是東岸烈酒商G.F. Heublein Brothers與食品廠商Cock 'n' Bull共同聯手，關於來源不得不提到這三位：傑克摩根（Jack Morgan）、約翰馬丁（John Martin）和魯道夫・卡納（Rudolph Kunett）。傑克是好萊塢著名餐廳「雞與牛」（Cock’n Bull）的老闆，約翰是休伯萊恩（Heublein）公司（思美洛伏特加的經銷商）的總裁，魯道夫則是思美洛（Smirnoff）伏特加部門的主管。這三個人在 1946 年的某個晚上在 Chatham Hotel 的 Bar 裡湊在一起喝酒，三個人各自有煩心事。傑克煩惱店裡的薑汁啤酒銷售不如預期，約翰的倉庫裡堆滿了大量的銅製馬克杯，魯道夫的伏特加銷量也是達不到標準，這三個人在酒吧裡互吐苦水時忽然靈光一閃，並決定以魯道夫的伏特加當基酒，再加上雞與牛的薑汁啤酒，最後用銅製馬克杯盛裝，並以這樣的標準配備做宣傳。它的配方非常簡單，講究一點還會加上新鮮檸檬角、薄荷葉裝飾，喝來口感非常酸甜清爽，極易入口。最後一項重點是杯子，當年為了推廣這款調酒，廠商訂製了大量印有Moscow Mule與驢子圖案的專屬銅杯，是它最原始的樣貌。使用銅杯除了懷舊感十足，比玻璃杯更佳的保冰效果，更是重點。",
            imageSrc: "../../assets/cocktail/MoscowMule.jpg",
          },
          {
            title: "皮斯可酸酒 Pisco Sour",
            id: 29,
            recipe1: "皮斯可Pisco 60ml",
            recipe2: "新鮮檸檬汁 30ml",
            recipe3: "糖漿 20ml",
            recipe4: "蛋白 1顆",
            details: "香水白蘭地，正式名稱是皮斯可（Pisco）。這支酒與大家熟知的威士忌、白蘭地、琴酒等都屬於高酒精濃度的蒸餾酒。討論到皮斯可（Pisco）的發源地，基本上分成兩派，有一派堅持在智利，有一派則強調在秘魯。唯一可以確認的事情，Pisco 是在 16 世紀西班牙人殖民南美洲時傳入釀酒技術後才開始的。當時這兩國的部分區域都屬於印加帝國的領土，殖民體系解體之後，雙方在民族精神與商業利益下，才造成了日後爭論不休的主因。時至今日，這兩個國家也持續出產 Pisco，也曾經為了哪裡是 Pisco 的發源地歸屬引發一場戰爭。現在也仍然因為經濟利益而產生許多角力的競爭。在智利，Pisco 的釀酒師為了追求更純淨的口感，使用連續式蒸餾器蒸餾。連續式蒸餾器在美國被廣為使用，這種蒸餾器的特色是產量大，也可以提高酒精含量。而蒸餾完之後的酒體，智利同意將酒存放於橡木桶中陳年。而在秘魯，釀酒師使用跟蘇格蘭威士忌類似的銅製傳統蒸餾器，均採手工生產，產量雖然較低，但卻可以蒸餾出相當有個性的 Pisco。在釀造之後，僅得存放於玻璃或不鏽鋼中陳年三個月，必須直接裝瓶，且不得添加糖或任何可能改變氣味、風味或外觀的添加物（當然，也包括水），故裝瓶之後是無色透明的。Pisco 的香氣來源和當地的風土有著極深的關係，不管是秘魯還是智利，都是在缺水的沙漠中種植葡萄，在缺水的環境下，使葡萄的香氣與其他國家有著顯著的差別。",
            imageSrc: "../../assets/cocktail/PiscoSour.jpg",
          },
          {
            title: "性感海灘 Sex on the beach",
            id: 30,
            recipe1: "伏特加 40ml",
            recipe2: "蜜桃利口酒 Peach Schnapps 20ml",
            recipe3: "新鮮橘子汁 40ml",
            recipe4: "蔓越莓汁 40ml",
            details: "性感海灘 Sex on the beach 在經典調酒之中，算是一杯比較年輕的調酒， 1987 年的佛羅里達州一位名叫 Ted Pizio  的調酒師參加了一場酒商辦的比賽，Ted Pizio 當時受到一支蜜桃利口酒 Peach Schnapps 的啟發，於是他就以佛羅里達假期最受歡迎的兩樣東西「海灘」、「性愛」幫這杯調酒命名為 Sex on the beach。炎炎夏日的海邊，慵懶的躺在沙灘上喝著性感海灘，這就是這杯調酒想要表達的意境。 安全的性感海灘 Safe sex on the beach 簡單來說就是沒有酒精的性感海灘，也叫做 Virgins on the Beach ，把柳橙汁換成葡萄柚汁、蜜桃酒換成蜜桃花蜜、在去掉伏特加就完成了。",
            imageSrc: "../../assets/cocktail/SexBeach.jpg",
          },
          {
            title: "龍舌蘭日出 Tequila Sunrise",
            id: 31,
            recipe1: "龍舌蘭 45ml",
            recipe2: "新鮮橘子汁 90ml",
            recipe3: "紅石柳糖漿 Grenadine Syrup 15ml",
            recipe4: "柳橙片、紅櫻桃 裝飾",
            details: "龍舌蘭日出早期的配方是用Tequila、檸檬汁加上蘇打水調製而成，表面漂浮一層黑醋栗利口酒展現日出的效果。而最终版本是在1970年代加州三叉戟餐廳的調酒師 Bobby Lozoff 發明的，他在飲料中加入了柳橙汁和石榴汁代替檸檬汁和黑醋栗利口酒而，創造了今天最熟悉的版本。美國的滾石樂隊在1972年的美洲巡迴演唱會命名為：'可卡因和龍舌蘭日出之旅'，使這款雞尾酒在美國盛行開來。寓意在生長著星星點點仙人掌，但又荒涼到極點的墨西哥平原上，正升起鮮紅的太陽，陽光把墨西哥平原照耀得一片燦爛。其色彩艷麗鮮明，由黃色逐步過渡到紅色，就像日出時天空泛起的絢爛，果香味加上龍舌蘭酒特有的熱烈火辣，飲後使人回味無窮。",
            imageSrc: "../../assets/cocktail/TequilaSunrise.jpg",
          },
          {
            title: "薇絲朋 Vesper",
            id: 32,
            recipe1: "琴酒 45ml",
            recipe2: "伏特加 15ml",
            recipe3: "Lillet Blanc (法國開胃酒) 7.5ml",
            recipe4: "檸檬皮 裝飾",
            details: "這款調酒首次出現，是在 Ian Fleming 在1953年發表的的小說著作《皇家夜總會》中 ，提到了這款酒的做法，而這也正是無人不知無人不曉的007系列首部作品。作者伊恩本人就曾在二戰時期從事情報工作，是傳說中的間諜來著，也曾擔任過編輯與記者。所以文筆不錯的他，在戰後就以自身經歷創作出一系列的詹姆士·龐德。當時詹姆士龐德想拿下摯愛 Vesper Lynd 時，這款酒就被命名為 Vesper，Vesper 是一款純混酒的調酒，是比較成熟風味的，比起馬丁尼，Vesper 因為裡頭 Lillet Blanc (法國開胃酒)，會顯得更圓潤些，還帶點異國風情。",
            imageSrc: "../../assets/cocktail/Vesper.jpg",
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
      this.selectedItem = this.cocktails.find(
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
