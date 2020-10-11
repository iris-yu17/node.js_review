// step1. require express套件
const express = require('express')

// step2. 建立 web server 物件
// 建立方法: 看api寫法，有時要用new，有時直接呼叫
let app = express()

// step3. 設定路由，類似http.createServer
// get是html方法
app.get('/', (req, res) => {
    res.send('<h2>Hello there</h2>');
})


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
