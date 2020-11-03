//--------require--------//
// step1. require express套件
const express = require('express')

//--------建立app-------//
// step2. 建立 web server 物件
// 建立方法: 看api寫法，有時要用new，有時直接呼叫
const app = express()


//---------設定---------//
// 設定樣版引擎
// 放在require後(建立之後做設定)
app.set('view engine', 'ejs');


//---------top-level middleWare---------//
// 用middleWare時都用use(use: http的甚麼方法都接受)
// middleWare: 在中間處理，處裡完往下傳遞
// top-level middleWare
app.use(express.urlencoded({ extended: false }));
// 原本 const parser = express.urlencoded({ extended: false });

// top-level middleWare
// 可放多個top-level middleWare，會自己判斷該用哪個
app.use(express.json());


//----------路由------------//
// step3. 設定路由，類似http.createServer
// 設定路由，然後後面的(req, res) => {} cb func去處理
// get是html方法
app.get('/', (req, res) => {
    // send: 輸出html文字
    // res.send('<h2>Hello there</h2>');

    // 若用樣板引擎(ejs)就不用send，用render
    // 告訴他用'home'這個樣板
    // 要傳給他的資料是object
    res.render('home', { name: 'Iris' })
})

app.get('/json-sales', (req, res) => {
    // require會把他轉為array(因json是array格式)
    // require進來後它會做jsonParse
    const sales = require(__dirname + '/../data/sales');

    // test: require會把它轉為array
    // res.send(sales.constructor.name);

    // require json 檔
    // res.json會做jsonStrinify
    // res.json(sales);

    // template不用斜線
    res.render('json-sales', { sales })
})

// 取的queryString資料
// queryString: get參數(url後面a=1&b=3)
app.get('/try-qs', (req, res) => {
    res.json(req.query);
})

// 取的post資料 & middleWare
// 使用 express 物件的 body-parser 功能
// urlencoded是body-parser裡面的功能
// extended: true就使用qs lib, false使用內建的 querystring lib
// 把parser當top-level middleware放最前面
app.post('/try-post', (req, res) => {
    // 把parser當middleWare，放在第二個參數
    // app.post('/try-post', parser, (req, res) => {
    res.json(req.body);
})


//----------靜態內容------------//
// 使用靜態內容的資料夾，原則上放404頁前面
// 靜態: 後端完全不會去改變到其內容eg.html,css,js檔(除非js檔是後端生出來的)
// 動態: 後端生出來的(eg.404頁面)
// 作法: 呼叫express的static方法
// 這也是一個middleWare(在中間處理，處裡完往下傳遞)
// public裡面所有東西都靜態，"localhost:5000/檔名"就可以看到內容
// 例: localhost:5000/01.promise01.html
app.use(express.static(__dirname + '/../public'))


//----------404頁面------------//
// *** 此段放在所有路由設定的後面 ***
// 因express框架是 first in first out
// 自訂404頁面
// 這不是middleWare，因沒有再往下傳遞)
app.use((req, res) => {
    // type指的是contentType，詳見express doncment
    res.type('text/plain')
    // 設定狀態碼
    res.status(404).send('Page not found');
});

// step4. Server 偵聽
// 後面可放個cb func，啟動以後會去呼叫它
app.listen(5000, function () {
    console.log("埠號:5000，伺服器已啟動...");
})
