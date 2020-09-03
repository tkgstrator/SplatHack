<template>
  <div class="tutorial">
    <h1>インストール</h1>
    <v-text-area>
      コード開発には「スプラトゥーン実行ファイル」「GHIDRA」「NSO Loader」「ARM to HEX Converter」の四つが必要になります.
      「スプラトゥーン実行ファイル」以外は簡単に揃えることができるので, まずは必要なものを集めるところから始めましょう.
    </v-text-area>

    <h2>スプラトゥーン実行ファイル</h2>
    <p>スプラトゥーン実行ファイルはNSOという特別な構造をもつ「main」と呼ばれるファイルで, スプラトゥーンのゲームの全てを管理しているプログラムのことです.</p>
    <p>main自体は暗号化されているのでそのまま逆アセンブラで解析することができないのですが, 有志によってアセンブラへのパッチ（Loader）が開発されているためそれを使って読み込ませることができます.</p>
    <p>ただ, 復号するためのプログラムも開発されているのため個人的にはLoaderを使わずに復号したファイルを読み込ませることを推奨しています.</p>
    <p>復号されたファイルはELFというARMの機械語で書かれた実行ファイルになります. これをそのまま解読することは困難なため, 機械語をアセンブラに変換する必要があります.</p>
    <p>その変換をするのが次に紹介する逆アセンブラであるGHIDRAです.</p>

    <h2 class="external-link" @click="openURL('https://ghidra-sre.org/')">GHIDRA</h2>
    <p>NCAが開発したARMの逆アセンブルに対応した逆アセンブラ.</p>
    <p>Javaで開発されたためいろいろとっつきにくいところがあるものの, 有償であるIDA Proと遜色ない機能があり, 本チュートリアル程度であればそつなくこなせます.</p>

    <h2 class="external-link" @click="openURL('https://github.com/Adubbz/Ghidra-Switch-Loader/releases/tag/1.4.0')">Ghidra Switch Loader</h2>
    <p>GHIDRAで直接NSOを読み込むためのプラグイン.</p>
    <p>ただし, 先述したように本ページでは暗号化されているNSOではなく復号したELFを読み込ませることを推奨しているため, 使い方については省略します.</p>

    <h2 class="external-link" @click="openURL('https://github.com/tkgstrator/nx2elf/releases/tag/v0.1')">nx2elf</h2>
    <p>スプラトゥーン実行ファイルであるNSOに施された暗号化を解除し, ELFへと変換するためのプログラム.</p>
    <p>オリジナルのレポジトリではソースコードがあるだけなので, それをビルドしたうちのレポジトリを紹介します.</p>

    <h2 class="external-link" @click="openURL('https://armconverter.com/')">Online ARM to HEX Converter</h2>
    <p>アセンブラで作成したコードをニンテンドースイッチが認識できる機械語に変換するためのウェブサービス.</p>

    <h1>セットアップ</h1>
    <h2>GHIDRAの設定</h2>
    <p>GHIDRAは初期状態ではメモリを1024MBしか使わない設定になっています. これでは少し足りないので, 設定ファイルを弄って拡張します.</p>```
    "deploy": "gh-pages -d dist"
    ```
  </div>
</template>

<script>
export default {
  methods: {
    openURL(url) {
      window.open(url, '_blank')
    }
  },
  data: () => ({
    cardslv1: [
      {
        title: "スペシャルコスト0",
        text: "まずは全てのブキのスペシャルコストを0にして, いつでも使えるようにしてみましょう.",
        link: "tutorials/01",
        flex: 6
      },
      {
        title: "スペシャルコスト255",
        text: "実用上は不要ですが, 0ではない値への設定方法も覚えておきましょう.",
        link: "tutorials/01",
        flex: 6
      },
      {
        title: "全ブキアンロック",
        text: "参照するパラメータを変更して, 未実装ブキを除く全てのブキをアンロックしてみましょう.",
        link: "tutorials/01",
        flex: 6
      },
      {
        title: "ガチマッチ時間変更",
        text: "ガチマッチの試合時間は300秒ですが, この時間を好きなように変更してみましょう.",
        link: "tutorials/01",
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

p {
  font-size: 16px;
}

h2.external-link {
  color: #00bfff;
  cursor: pointer;
}
</style>