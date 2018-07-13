# doukaku-node-mocha

「オフラインリアルタイムどう解く」を Node.js & Mocha & power-assert 使って TDD で解くための環境です。

## 構成

- lib/doukaku.js
  - ここにメインのロジックを書く
  - コマンドライン引数を main()の仮引数 args で受け取る
  - 関数を作ったら、テスト用に module.exports すること
- test/doukaku-test.js
  - ここにテストを書く
  - アセットライブラリは [power-assert](https://github.com/power-assert-js/power-assert)
- index.js
  - コマンドラインからの実行用
  - このコードは全く編集しなくて OK

## 実行方法

CLI

```
$ node index.js 123
```

テスト

```
$ mocha
```
