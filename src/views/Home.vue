<template>
  <div class="home">
    <img alt="SplatHack" src="../assets/logo.png" width="300" />
    <div class="description">
      <h1>当ページについて</h1>
      <p>このサイトは任天堂で発売中のスプラトゥーン2のコード開発方法について解説する非公式ウェブサイトです.</p>
      <h1 style="color: #FF0000;">注意点</h1>
      <p>以下の行為は法律に抵触する恐れがあります. 絶対にやらないようにしましょう.</p>
      <ul class="warning">
        <li>改造したデータの販売</li>
        <li>任天堂の著作物（ファイル）のアップロード</li>
        <li>改造したデータでのオンラインプレイ</li>
      </ul>
    </div>
    <div class="contents">
      <div class="left">
        <h1>開発を始める前に</h1>
        <ul class="requirements">
          <li>コードとはなんだろう</li>
          <li>開発に必要なソフト</li>
        </ul>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style>
body {
  background-color: #191919;
}

.home {
  margin-top: 20px;
}

h1 {
  font-family: "SplatFont";
  color: #eeeeee;
}

p {
  /* font-family: "SplatFont"; */
  font-size: 20px;
  /* color: #eeeeee; */
}

.description {
  margin: 0 auto;
  width: 80%;
}

ul.warning {
  list-style: none;
  font-size: 22px;
  color: red;
}

ul.requirements {
  list-style: none;
  font-size: 22px;
}

@media (min-width: 800px) {
  div.left {
    margin: 0 auto;
    float: left;
    width: 40%;
  }

  div.right {
    margin: 0 auto;
    float: right;
    width: 40%;
  }
}
</style>
