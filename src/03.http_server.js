//// 簡易web server ////

// 'http'是node內建的套件，直接require它
const http = require('http');

// 建立一個server
// req, res 是自訂變數
// createrServer裡面是個callback function，兩個參數(request, response)
// request: 接收需求(用戶端會發需求)，response: server回應給用戶端
// (req, res) => {} 是個cb func，有訪客來拜訪時就會被呼叫
const server = http.createServer((req, res) => {
    // res回應: 用writeHead設定檔頭(狀態碼,{要設定的檔頭})
    // 這邊的檔頭是我們要丟給用戶端的 比較: 03.http_server2.js的檔頭是用戶端丟來的(req.headers)
    res.writeHead(246, {
        // content-type設為純文字
        'Content-Type': 'text/plain'
        
        // content-type設為html
        // 'Content-Type': 'text/html'

    });
    // 設定傳給用戶端的內容
    // request有個url屬性
    // end:結束(送出去就結束了)
    res.end(`
        <h2>Hello</h2>
        <p>${req.url}</p>
    `);
});

// 建立好後，啟動用listen
server.listen(5000);