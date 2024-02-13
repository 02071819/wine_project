<template>
  <div class="about">
    <div class="title">
      <h3>
        在這個充滿品味的網站裡，我們致力於分享各種令人陶醉的酒類文化和經典調酒秘笈，帶領您進入一趟豐富的美酒之旅。無論您是酒迷、調酒愛好者，抑或是對於烈酒世界感到好奇的新手，這裡都是您探索、學習的理想場所。
      </h3>
      <br />
      <h3>
        In this tasteful website, we are dedicated to sharing various
        intoxicating aspects of wine culture and classic cocktail techniques,
        leading you on a journey through the rich world of fine spirits. Whether
        you're a wine enthusiast, a cocktail aficionado, or a curious newcomer
        to the world of spirits, this is the ideal place for you to explore and
        learn.
      </h3>
    </div>
  </div>
</template>

<style>
.about {
  background-image: url("../assets/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}
.about .title {
  position: absolute;
  width: 450px;
  padding-left: 100px;
  padding-top: 150px;
  color: #ffffff;
}
@media (max-width: 1024px) {
  .about .title {
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 800;
  }
}
@media (max-width: 700px) {
  .about .title {
    width: 380px;
  }
}
@media (max-width: 500px) {
  .about .title {
    width: 300px;
  }
}
@media (max-width: 400px) {
  .about .title {
    width: 250px;
  }
}
</style>
