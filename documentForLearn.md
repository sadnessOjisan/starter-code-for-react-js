# Starter Code & 環境構築の解説

## 大規模なReactを案件を行う上で必要になる環境

### 開発のために必須
* npm, yarn: package manager
* babel: トランスパイラ
* webpack: リンカ
* loader: webpackからbabelなどを扱えるようにしてくれるもの
* react, react-dom: stateとUIをうまい具合に扱ってくれるライブラリ

### 大規模アプリケーション開発に必須
* redux, react-redux: 状態管理ライブラリ
* redux-saga: 副作用をreduxで扱うライブラリ
* react-router, react-router-dom: ルーティングライブラリ
* axios: HTTP Client

### 人権ある開発をするために欲しいもの
* eslint: linter
* prettier: formatter
* lint-staged, husky: gitのコマンドにhookをかけられるライブラリ
* flow: 静的型チェッカ
* jest: テストランナー
* react-testing-library: UIをintegration testするライブラリ
* webpack-dev-server: 開発用サーバー

## npmとは
* Node Package Manager です
* NodeJS(サーバーサイドJS)に付いてくるツールです
* NodeJSのツールですが、ClienサイドのJSのライブラリを管理するツールとしても使うことができます
* npmで引っ張ってきたライブラリをClientサイドで使うためには、依存解決という仕組みが必要になります
* 後述するwebpackがその役割を果たしてくれます

## Babelとは
* トランスパイラです
* JSのバージョン(EcmaScript5,6,7など)を変換してくれます
* ブラウザはES5というバージョンに完全対応、ES6にほぼ対応しており、BabelはES6~ で書かれたものを、ES5に変換することができます

## webpackとは
* リンカです
* モジュールの依存解決を行います
* ビルドの設定もここで書いてしまいます
* moduleとはexportされた関数・クラス・変数を指しています
* つまり、export, importされるものをモジュールと呼んでいます

### webpackで指定すべきもの
* mode: ビルドのモード、開発モードだとソースマップ付き、本番モードだと軽くなる
* entry: 依存解決の起点となるファイルを指定(main.jsやindex.jsなど)
* output: 依存解決後のファイルを格納する場所
* module: webpackでmoduleとして扱うものと、それを扱うために必要なloaderを指定する
* resolve: 依存解決対象の拡張子を指定します。importするときにお尻につけなくて済むようになります。
* plugin: webpackの拡張機能を登録する場所
* devserver: 開発サーバーの指定、これを指定するとビルドファイルを吐き出さなくても、アプリを実行できるようになる

### webpackのloader
* webpackは標準では、js, jsonしか依存解決できない
* それ以外の拡張子をimportできるようにするためには、それに見合ったloaderを設定しないといけない
* 例えば、cssをimportしたければ、css-loaderなんてものが必要になる

### よく使うloader(というより使わざるを得ないやつ)
* babel-loader
* style-loader
* css-loader
* url-loader
* file-loader
* source-map-loader

## eslintとは
* JSのlinterです
* linterは構文の誤りを指定してくれます
* 正しい構文のルールは自分で設定したり、有名どころの設定を読み込んだりできます
* 構文が誤っていても、JSとしては正しいこともよくあります。ルール次第です。

### eslintrcに設定を書く
* parser: 構文解析してくれる. `ES6`使うなら、`babel-eslint`を使うのがセオリーであったが、最近は標準でES6対応しているので必要ない。ただし、Flowを使う場合はこの指定が必要だ！
* extends: Shareable configs are designed to work with the extends feature of .eslintrc files. 
* plugins: Plugins can expose additional rules for use in ESLint.
* env: which environments your script is designed to run in. 
* globals: 実行される環境において、global変数として必ず存在するものを指定することができる
* rules: 各ルールの切り替えができる

extendsとpluginsの使い分けがよくわかっていない

## babelとは
* トランスパイラです

設定がややこしい原因: Instead of individual plugins, you can also enable a set of plugins in a preset.

### babelrcに設定を書く

* plugin: コンパイル中に何か振る舞いをたすことができる
* preset: Don't want to assemble your own set of plugins? No problem! Presets can act as an array of Babel plugins or even a sharable options config. つまり色々なpluginを刺した集合体という認識でよろしいかしら
  - `"@babel/plugin-transform-flow-strip-types"` は, `@babel/preset-flow` で置き換えられる
* env: どのNODE_ENV環境変数で使う設定かをかける。jestはデフォでNODE_ENV=testを設定するので、jest用のbabel設定として、
"env": {
    "test": {
      "presets": [["env"], "react"]
    }
  }
を書く。
* modules: ライブラリとしてimportできるようにするかどうかの設定。アプリ開発ならfalseで良い

## prettier 

eslintとprettierの競合

## jest

## flow