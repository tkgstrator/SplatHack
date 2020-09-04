<template>
  <div class="tutorial">
    <h1>チュートリアル</h1>
    <v-text-area>
      SplatHackのチュートリアルは逆アセンブラを用いて誰でも簡単にコード開発の楽しみを体験できるものになっています.
      3.1.0を所持していない方であっても, 同じ手順を踏むことで任意のバージョンで同じコードを作成することができます.
    </v-text-area>

    <h1>初級者向け</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cardslv1" :key="card.title" :cols="card.flex">
          <router-link :to="card.link">
            <v-card class="hack">
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text>{{ card.text }}</v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <h1>中級者向け</h1>
    <h1>上級者向け</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    cardslv1: [
      {
        title: "スペシャルコスト0",
        text: "まずは全てのブキのスペシャルコストを0にして, いつでも使えるようにしてみましょう.",
        link: "/tutorials/01",
        flex: 6
      },
      {
        title: "スペシャルコスト255",
        text: "実用上は不要ですが, 0ではない値への設定方法も覚えておきましょう.",
        link: "/tutorials/01",
        flex: 6
      },
      {
        title: "全ブキアンロック",
        text: "参照するパラメータを変更して, 未実装ブキを除く全てのブキをアンロックしてみましょう.",
        link: "/tutorials/01",
        flex: 6
      },
      {
        title: "ガチマッチ時間変更",
        text: "ガチマッチの試合時間は300秒ですが, この時間を好きなように変更してみましょう.",
        link: "/tutorials/01",
        flex: 6
      },
    ],
  }),
}
</script>

<style>
.tutorial {
  width: 90%;
  margin: 0 auto;
  font-family: "M PLUS 1p";
}

.container {
  display: block;
  margin: 0 auto;
}

.v-card.hack {
  display: block;
  margin: 0 auto;
  max-width: 360px;
}
</style>