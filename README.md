<!-- vim: set fileencoding=utf-8 : -->

# 準備
`npm install`or `yarn install`
json-serverは上記の場合PATHが通っていないのでコマンドが見つからない。
面倒であればjson-serverのみグローバルインストールするか、パスをちゃんと通す

# サンプルデータモデル

db.jsonに格納されているサンプルデータモデル
```
{
  "movies": [
    { "id": <int>, "name": <String>, "director": <String>, "rating": <float> },
    ...
  ]
}

```
上記は`faker`を利用して、`faker-movies-data-generartor.js`で`$ node faker-movies-data-generartor > db.json`を実行して作成

# 起動
`$ json-server --watch db.json`で起動

# JSONコール方法
詳しいことは`json-server`のドキュメント参照[https://github.com/typicode/json-server]

## データに対するCURD
- C
```
$ curl -X POST -H "Content-Type: application/json" -d '{
  "id": 3,
  "name": "Inception",
  "director": "Christopher Nolan",
  "rating": 9.0
}' "http://localhost:3000/movies"
```

- U
PUTメソッドを使えばできる。試してない。

- R
```
$ curl -X GET "http://localhost:3000/movies" -> get all data
$ curl -X GET "http://localhost:3000/movies/3" -> get id is 3.
```

- D
DELETEメソッドでできる。試してない。

## フィルター
```
$ curl -X GET "http://localhost:3000/movies?name=Casablanca"
$ curl -X GET "http://localhost:3000/movies?name=Casablanca&id=2"
```

## レンジ指定
```
$ curl -X GET "http://localhost:3000/movies?rating_gte=9"
$ curl -X GET "http://localhost:3000/movies?rating_gte=5&rating_lte=7"
```

## ページング
```
$ curl -X GET "http://localhost:3000/movies?_page=3"
```
21 - 30件目のデータが戻る。（デフォルトページサイズは10件）

## 並び替え
```
$ curl -X GET "http://localhost:3000/movies?_sort=name&_order=DESC"
```

==========================================================

  <dl>
   <dd>Author:   Takahiro Oshima (tarotora51@gmail.com)
   <dd>License:  MIT License</dd>
   <dd>Created:  2018-01-04</dd>
  </dl>

==========================================================
