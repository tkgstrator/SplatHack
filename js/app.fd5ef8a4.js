(function(t){function e(e){for(var a,o,i=e[0],c=e[1],s=e[2],v=0,f=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},l=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/SplaHack/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=c;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10e1":function(t,e,n){"use strict";var a=n("fdbb"),r=n.n(a);r.a},"256a":function(t,e,n){"use strict";var a=n("79d6"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("router-view")],1)},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"grey lighten-4",flat:"",tile:""}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap",rel:"stylesheet"}}),n("v-toolbar",{attrs:{dense:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",{attrs:{width:"100px"}},[t._v("SplatHack")]),n("v-spacer"),n("v-tabs",{attrs:{right:"","show-arrows":"true"}},[n("v-tab",[n("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),n("v-tab",[n("router-link",{attrs:{to:"/install"}},[t._v("INSTALL")])],1),n("v-tab",[n("router-link",{attrs:{to:"/tutorials"}},[t._v("TUTORIAL")])],1)],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1)},i=[],c=(n("8baf"),n("2877")),s=n("6544"),u=n.n(s),v=n("5bc1"),f=n("8336"),p=n("b0af"),d=n("132d"),b=n("2fa4"),h=n("71a3"),_=n("fe57"),x=n("71d9"),m=n("2a7f"),k={},g=Object(c["a"])(k,o,i,!1,null,null,null),w=g.exports;u()(g,{VAppBarNavIcon:v["a"],VBtn:f["a"],VCard:p["a"],VIcon:d["a"],VSpacer:b["a"],VTab:h["a"],VTabs:_["a"],VToolbar:x["a"],VToolbarTitle:m["a"]});var y={name:"App",components:{Header:w}},O=y,S=(n("5c0b"),n("7496")),C=Object(c["a"])(O,r,l,!1,null,null,null),L=C.exports;u()(C,{VApp:S["a"]});var A=n("f309");a["a"].use(A["a"]);var V=new A["a"]({}),H=n("8c4f"),R=n("bb51"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tutorial"},[n("h1",[t._v("チュートリアル")]),n("v-text-area",[t._v(" SplatHackのチュートリアルは逆アセンブラを用いて誰でも簡単にコード開発の楽しみを体験できるものになっています. 3.1.0を所持していない方であっても, 同じ手順を踏むことで任意のバージョンで同じコードを作成することができます. ")]),n("h1",[t._v("初級者向け")]),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},t._l(t.cardslv1,(function(e){return n("v-col",{key:e.title,attrs:{cols:e.flex}},[n("router-link",{attrs:{to:e.link}},[n("v-card",{staticClass:"hack"},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-text",[t._v(t._s(e.text))])],1)],1)],1)})),1)],1),n("h1",[t._v("中級者向け")]),n("h1",[t._v("上級者向け")])],1)},T=[],E={data:function(){return{cardslv1:[{title:"スペシャルコスト0",text:"まずは全てのブキのスペシャルコストを0にして, いつでも使えるようにしてみましょう.",link:"tutorials/01",flex:6},{title:"スペシャルコスト255",text:"実用上は不要ですが, 0ではない値への設定方法も覚えておきましょう.",link:"tutorials/01",flex:6},{title:"全ブキアンロック",text:"参照するパラメータを変更して, 未実装ブキを除く全てのブキをアンロックしてみましょう.",link:"tutorials/01",flex:6},{title:"ガチマッチ時間変更",text:"ガチマッチの試合時間は300秒ですが, この時間を好きなように変更してみましょう.",link:"tutorials/01",flex:6}]}}},I=E,M=(n("256a"),n("99d9")),P=n("62ad"),N=n("a523"),U=n("0fd9"),$=Object(c["a"])(I,j,T,!1,null,null,null),G=$.exports;u()($,{VCard:p["a"],VCardText:M["a"],VCardTitle:M["b"],VCol:P["a"],VContainer:N["a"],VRow:U["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tutorial"},[n("h1",[t._v("インストール")]),n("v-text-area",[t._v(" コード開発には「スプラトゥーン実行ファイル」「GHIDRA」「NSO Loader」「ARM to HEX Converter」の四つが必要になります. 「スプラトゥーン実行ファイル」以外は簡単に揃えることができるので, まずは必要なものを集めるところから始めましょう. ")]),n("h2",[t._v("スプラトゥーン実行ファイル")]),n("p",[t._v("スプラトゥーン実行ファイルはNSOという特別な構造をもつ「main」と呼ばれるファイルで, スプラトゥーンのゲームの全てを管理しているプログラムのことです.")]),n("p",[t._v("main自体は暗号化されているのでそのまま逆アセンブラで解析することができないのですが, 有志によってアセンブラへのパッチ（Loader）が開発されているためそれを使って読み込ませることができます.")]),n("p",[t._v("ただ, 復号するためのプログラムも開発されているのため個人的にはLoaderを使わずに復号したファイルを読み込ませることを推奨しています.")]),n("p",[t._v("復号されたファイルはELFというARMの機械語で書かれた実行ファイルになります. これをそのまま解読することは困難なため, 機械語をアセンブラに変換する必要があります.")]),n("p",[t._v("その変換をするのが次に紹介する逆アセンブラであるGHIDRAです.")]),n("h2",{staticClass:"external-link",on:{click:function(e){return t.openURL("https://ghidra-sre.org/")}}},[t._v("GHIDRA")]),n("p",[t._v("NCAが開発したARMの逆アセンブルに対応した逆アセンブラ.")]),n("p",[t._v("Javaで開発されたためいろいろとっつきにくいところがあるものの, 有償であるIDA Proと遜色ない機能があり, 本チュートリアル程度であればそつなくこなせます.")]),n("h2",{staticClass:"external-link",on:{click:function(e){return t.openURL("https://github.com/Adubbz/Ghidra-Switch-Loader/releases/tag/1.4.0")}}},[t._v("Ghidra Switch Loader")]),n("p",[t._v("GHIDRAで直接NSOを読み込むためのプラグイン.")]),n("p",[t._v("ただし, 先述したように本ページでは暗号化されているNSOではなく復号したELFを読み込ませることを推奨しているため, 使い方については省略します.")]),n("h2",{staticClass:"external-link",on:{click:function(e){return t.openURL("https://github.com/tkgstrator/nx2elf/releases/tag/v0.1")}}},[t._v("nx2elf")]),n("p",[t._v("スプラトゥーン実行ファイルであるNSOに施された暗号化を解除し, ELFへと変換するためのプログラム.")]),n("p",[t._v("オリジナルのレポジトリではソースコードがあるだけなので, それをビルドしたうちのレポジトリを紹介します.")]),n("h2",{staticClass:"external-link",on:{click:function(e){return t.openURL("https://armconverter.com/")}}},[t._v("Online ARM to HEX Converter")]),n("p",[t._v("アセンブラで作成したコードをニンテンドースイッチが認識できる機械語に変換するためのウェブサービス.")])],1)},F=[],J={methods:{openURL:function(t){window.open(t,"_blank")}},data:function(){return{cardslv1:[{title:"スペシャルコスト0",text:"まずは全てのブキのスペシャルコストを0にして, いつでも使えるようにしてみましょう.",link:"tutorials/01",flex:6},{title:"スペシャルコスト255",text:"実用上は不要ですが, 0ではない値への設定方法も覚えておきましょう.",link:"tutorials/01",flex:6},{title:"全ブキアンロック",text:"参照するパラメータを変更して, 未実装ブキを除く全てのブキをアンロックしてみましょう.",link:"tutorials/01",flex:6},{title:"ガチマッチ時間変更",text:"ガチマッチの試合時間は300秒ですが, この時間を好きなように変更してみましょう.",link:"tutorials/01",flex:6}]}}},B=J,X=(n("10e1"),Object(c["a"])(B,D,F,!1,null,null,null)),z=X.exports;a["a"].use(H["a"]);var q=[{path:"/",name:"Home",component:R["default"]},{path:"/tutorials",name:"Tutorial",component:G},{path:"/install",name:"Install",component:z}],K=new H["a"]({mode:"hash",base:"/SplaHack/",routes:q}),Q=K;a["a"].config.productionTip=!1,new a["a"]({vuetify:V,router:Q,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5ced":function(t,e,n){},6860:function(t,e,n){},"79d6":function(t,e,n){},"7ad4":function(t,e,n){"use strict";var a=n("9cae"),r=n.n(a);e["default"]=r.a},"8baf":function(t,e,n){"use strict";var a=n("6860"),r=n.n(a);r.a},"9c0c":function(t,e,n){},"9cae":function(t,e){},a9a5:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"SplatHack",src:n("cf05"),width:"300"}}),a("div",{staticClass:"description"},[a("h1",[t._v("当ページについて")]),a("p",[t._v("このサイトは任天堂で発売中のスプラトゥーン2のコード開発方法について解説する非公式ウェブサイトです.")]),a("h1",{staticStyle:{color:"#FF0000"}},[t._v("注意点")]),a("p",[t._v("以下の行為は法律に抵触する恐れがあります. 絶対にやらないようにしましょう.")]),a("ul",{staticClass:"top-warning"},[a("li",[t._v("改造したデータの販売")]),a("li",[t._v("任天堂の著作物（ファイル）のアップロード")]),a("li",[t._v("改造したデータでのオンラインプレイ")])])])])}]},bb51:function(t,e,n){"use strict";var a=n("a9a5"),r=n("7ad4"),l=(n("cccb"),n("2877")),o=Object(l["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},cccb:function(t,e,n){"use strict";var a=n("5ced"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.2dce808a.png"},fdbb:function(t,e,n){}});