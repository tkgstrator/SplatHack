<template>
  <div id="install">
    <h1>スプラトゥーン実行ファイルのイロハ</h1>
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
    <p>NSAが開発したARMの逆アセンブルに対応した逆アセンブラ.</p>
    <p>Javaで開発されたためいろいろとっつきにくいところがあるものの, 有償であるIDA Proと遜色ない機能があり, 本チュートリアル程度であればそつなくこなせます.</p>
    <p>
      実行にはJDK11のインストールが必須で,
      <a
        href="https://download.oracle.com/otn-pub/java/jdk/11.0.8+10/dc5cf74f97104e8eac863698146a7ac3/jdk-11.0.8_windows-x64_bin.exe?AuthParam=1599142386_3d533f455032a14db64efe40bb20a641"
      >公式サイト</a>でも配布されているのでインストールしましょう.
    </p>
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
    <p>GHIDRAはデフォルトの設定だと非常に見づらいため, 外観の変更を行ったほうが良いです.</p>
    <h2>フォントのインストール</h2>
    <p>
      GHIDRAのデフォルトのフォントはmonospacedなのですが, これを別の等幅フォントに変えてしまいましょう. おすすめは
      <a href="https://www.wfonts.com/font/roboto-mono">Roboto Mono</a>ですが
      自分が見やすいと思うフォントであれば何でも構いません.
    </p>
    <h2>フォント・外観の変更</h2>
    <p>Listing Displayの設定から見た目を変更します. また, Listing Fieldsの項目から各種フィールドの表示設定を変えておくと良いでしょう.</p>
    <v-img src="~@/assets/img/ghidra_listing_display.gif" width="80%" max-width="600px"></v-img>
    <v-data-table :headers="headers" :items="settings" dark hide-default-footer></v-data-table>
    <p>以上でインストールとGHIDRAのセットアップは終了です.</p>
    <h1>GHIDRAの基本的な使い方</h1>
    <h2>アドレスジャンプ</h2>
    <v-img src="~@/assets/img/ghidra_jump_address.gif" width="80%" max-width="600px"></v-img>
    <p>指定したアドレスにジャンプします.</p>
    <h2>文字列検索</h2>
    <v-img src="~@/assets/img/ghidra_search_text.gif" width="80%" max-width="600px"></v-img>
    <p>指定した文字列を検索します.</p>
    <h2>参照ジャンプ</h2>
    <v-img src="~@/assets/img/ghidra_jump_xref.gif" width="80%" max-width="600px"></v-img>
    <p>そのデータを使用しているサブルーチンにジャンプします.</p>
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
    headers: [
      {
        text: "Field",
        align: "start",
        sortable: false,
        value: "field"
      },
      {
        text: "Column",
        sortable: false,
        value: "column"
      },
      {
        text: "Value",
        sortable: false,
        value: "value"
      }
    ],
    settings: [
      {
        field: "Address Field",
        column: "Minimum Number of Address digits",
        value: "8",
      },
      {
        field: "Address Field",
        column: "Justification",
        value: "Right",
      },
      {
        field: "Bytes Field",
        column: "Byte Group Size",
        value: "4",
      },
      {
        field: "Bytes Field",
        column: "Display in Upper Case",
        value: "True",
      },
      {
        field: "Bytes Field",
        column: "Maximun Lines to Display",
        value: "1",
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