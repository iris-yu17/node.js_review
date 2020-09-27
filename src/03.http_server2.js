//// 讀寫檔案 ////

// 'http'和'fs'是node內建的套件，直接require它
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // writefile(1.檔案(路徑),2.要寫進去的資料是甚麼(儲存的內容),3.callback func)
    fs.writeFile(
        // 1. __dirname是內建常數，指的是這支js所在的資料夾
        __dirname + '/../data/headers01.txt',

        // 2. 將 JSON 物件(Object)轉成字串後，才能儲存或傳送。這個動作就叫 JSON Stringify(字串化)
        // 這邊的的檔頭是用戶端丟來 比較: 03.http_server.js writeHead的檔頭是我們要丟(寫)給用戶端的
        JSON.stringify(req.headers),

        // 3. writefile時callback func會給你一個錯誤參數，如果他給你空值的話，代表寫入檔案沒出錯，vice versa
        error => {
            if (error) {
                res.end('Fail: ' + error);
            } else {
                res.end('OK');
            }
        }
    );
});

server.listen(3000);
