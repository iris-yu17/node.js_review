//// 把02.http_server2.js 寫成promise ////

// 'http'和'fs'是node內建的套件，直接require它
const http = require('http');
const fs = require('fs');

// 兩個參數: 路徑跟內容
function myWriteFile(path, content) {

    return new Promise((resolve, reject) => {
        // writefile(1.檔案(路徑),2.要寫進去的資料是甚麼(儲存的內容),3.callback func)
        fs.writeFile(
            // 1. __dirname是內建常數，指的是這支js所在的資料夾
            // __dirname + '/../data/headers01.txt',
            path,

            // 2.內容
            // JSON.stringify(req.headers),
            content,

            // 3.cb function
            error => {
                if (error) {
                    // res.end('Fail: ' + error);
                    reject(error);
                } else {
                    // res.end('OK');
                    resolve('ok');
                }
            }
        );
    });
}

const server = http.createServer((req, res)=>{
    myWriteFile(
        __dirname + '/../data/headers02.txt',
        JSON.stringify(req.headers)
    ).then(msg=>{
        res.end(msg);
    }).catch(ex=>{
        res.end('Fail: ' + error);
    })

});

server.listen(3000);
