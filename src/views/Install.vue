<template>
  <div id="install">
    <h1>インストール</h1>
    <p>
      コード開発には「スプラトゥーン実行ファイル」「GHIDRA」「NSO Loader」「ARM to HEX Converter」の四つが必要になります.
      「スプラトゥーン実行ファイル」以外は簡単に揃えることができるので, まずは必要なものを集めるところから始めましょう.
    </p>

    <h2>スプラトゥーン実行ファイル</h2>
    <p>スプラトゥーン実行ファイルはNSOという特別な構造をもつ「main」と呼ばれるファイルで, スプラトゥーンのゲームの全てを管理しているプログラムのことです.</p>
    <p>main自体は暗号化されているのでそのまま逆アセンブラで解析することができないのですが, 有志によってアセンブラへのパッチ（Loader）が開発されているためそれを使って読み込ませることができます.</p>
    <!-- <p>ただ, 復号するためのプログラムも開発されているのため個人的にはLoaderを使わずに復号したファイルを読み込ませることを推奨しています.</p> -->
    <p>復号されたファイルはELFというARMの機械語で書かれた実行ファイルになります. これをそのまま解読することは困難なため, 機械語をアセンブラに変換する必要があります.</p>
    <p>その変換をするのが次に紹介する逆アセンブラであるGHIDRAです.</p>

    <h2 class="external-link" @click="openURL('https://ghidra-sre.org/')">GHIDRA</h2>
    <p>NCAが開発したARMの逆アセンブルに対応した逆アセンブラ.</p>
    <p>Javaで開発されたためいろいろとっつきにくいところがあるものの, 有償であるIDA Proと遜色ない機能があり, 本チュートリアル程度であればそつなくこなせます.</p>

    <h2 class="external-link" @click="openURL('https://github.com/Adubbz/Ghidra-Switch-Loader/releases/tag/1.4.0')">Ghidra Switch Loader</h2>
    <p>GHIDRAで直接NSOを読み込むためのプラグイン.</p>
    <!-- <p>ただし, 先述したように本ページでは暗号化されているNSOではなく復号したELFを読み込ませることを推奨しているため, 使い方については省略します.</p> -->

    <!-- <h2 class="external-link" @click="openURL('https://github.com/tkgstrator/nx2elf/releases/tag/v0.1')">nx2elf</h2>
    <p>スプラトゥーン実行ファイルであるNSOに施された暗号化を解除し, ELFへと変換するためのプログラム.</p>
    <p>オリジナルのレポジトリではソースコードがあるだけなので, それをビルドしたうちのレポジトリを紹介します.</p>-->

    <h2 class="external-link" @click="openURL('https://armconverter.com/')">Online ARM to HEX Converter</h2>
    <p>アセンブラで作成したコードをニンテンドースイッチが認識できる機械語に変換するためのウェブサービス.</p>

    <h1>GHIDRAの設定</h1>
    <h2>メモリ使用量</h2>
    <p>GHIDRAは初期状態ではメモリを1024MBしか使わない設定になっています. これでは少し足りないので, 設定ファイルである「ghidraRun.bat」を弄って拡張します.</p>
    <highlight-code auto>
      <pre>
:: Ghidra launch
@echo off
setlocal

:: Maximum heap memory size
:: Default for Windows 32-bit is 768M and 64-bit is 1024M
:: Raising the value too high may cause a silent failure where
:: Ghidra fails to launch.
:: Uncomment MAXMEM setting if non-default value is needed

REM ::set MAXMEM=2048M

call "%~dp0support\launch.bat" bg Ghidra "%MAXMEM%" "" ghidra.GhidraRun %*
      </pre>
    </highlight-code>
    <p>こうすることで指定したメモリ上限まで使うことができるようになります.</p>
    <h2>新規プロジェクトの作成</h2>
    <p>まずは新規プロジェクトを作成する必要があります. プロジェクト名は何でも構いません.</p>
    <v-img src="~@/assets/img/ghidra_new_project.gif" width="80%" max-width="600px"></v-img>
    <p>プロジェクトが作成できたらTool Chestからドラゴンのアイコンをクリックしましょう.</p>
    <h2>NSO Loaderの設定</h2>
    <p>暗号化されているNSOを読み込むためにはNSO LoaderをGHIDRAに追加する必要があります.</p>
    <v-img src="~@/assets/img/ghidra_import_loader.gif" width="80%" max-width="600px"></v-img>
    <p>FileからInstall Extensionsを選択し, 右上の+ボタンからダウンロードしたプラグインのZIPファイルをそのまま読み込ませてください.</p>
    <p>最後にSwitchLoaderにチェックが入っていればプラグインの追加は成功です.</p>
    <h2>mainの読み込み</h2>
    <p>ここまでの設定ができたらGHIDRAにmainを読み込ませます. 読み込ませるのはmainをCodeBrowserにドラッグアンドドロップするだけでいけます.</p>
    <v-img src="~@/assets/img/ghidra_load_main.png" width="80%" max-width="600px"></v-img>
    <p>ここでOKを押せば解析が始まります.</p>
    <h2>mainの解析</h2>
    <p>mainを読み込ませることができたら, 解析しましょう.</p>
    <v-img src="~@/assets/img/ghidra_analysis_main.gif" width="80%" max-width="600px"></v-img>
    <p>(Switch) IPC Analyzerにチェックを入れておくことでvtableの解析も可能になります.</p>
    <p>パソコンのスペックにもよりますが, 解析には30分~60分ほどかかります.</p>
    <h1>GHIDRAの外観の変更</h1>
    <p>GHIDRAはデフォルトの設定だと非常に</p>
    <p></p>
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
#install {
  width: 90%;
  margin: 0 auto;
  font-family: "M PLUS 1p";
}

p {
  font-size: 16px;
}

h2.external-link {
  color: #00bfff;
  cursor: pointer;
}

.v-application code {
  all: unset;
  /* color: #eee; */
}

/* Or with increased specificity */
.v-application code.code--custom {
  all: unset;
  /* color: #eee; */
}

.v-image {
  display: block;
  margin: 0 auto;
}

pre {
  padding: 10px;
  text-align: left !important;
  background-color: #111111;
}
</style>