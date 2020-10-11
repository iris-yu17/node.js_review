// step1. require express套件
const express = require('express')

// step2. 建立 web server 物件
// 建立方法: 看api寫法，有時要用new，有時直接呼叫
const app = express()

// 設定樣版引擎
// 放在require後(建立之後做設定)
app.set('view engine', 'ejs');

// step3. 設定路由，類似http.createServer
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

// 使用靜態內容的資料夾，原則上放404頁前面
// 靜態: 後端完全不會去改變到其內容
// 動態: 後端生出來的(eg.404頁面)
// 作法: 呼叫express的static方法
app.use(express.static(__dirname + '/../public'))



// *** 此段放在所有路由設定的後面 ***
// 因express框架是 first in first out
// 自訂404頁面
app.use((req, res) => {
    // type指的是contentType，詳見express doncment
    res.type('text/plain')
    // 設定狀態碼
    res.status(404).send('Page not found');
});

// step4. Server 偵聽
// 後面可放個cb func，啟動以後會去呼叫它
app.listen(3000, function () {
    console.log("埠號:3000，伺服器已啟動...");
})
