// 1. require套件
const express = require('express')

// 2. 建立 web server 物件
let app = express()

// 3. 設定路由，類似http.createServer
app.get('/', (req, res) => {
    res.send('<h2>Hello there</h2>');
})

// 4. Server 偵聽
// 後面可放個cb func，啟動以後會去呼叫它
app.listen(3000, function () {
    console.log("伺服器已啟動...");
})
