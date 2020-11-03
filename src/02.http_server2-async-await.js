//// 把02.http_server2.js 寫成async-await ////

const http = require('http');
const fs = require('fs');

function myWriteFile(path, content) {

    return new Promise((resolve, reject) => {
        fs.writeFile(
            path,
            content,
            error => {
                if (error) {
                    reject(error);
                } else {
                    resolve('ok');
                }
            }
        );
    });

}

// 可直接在匿名函式宣告async
const server = http.createServer(async (req, res) => {

    const msg = await myWriteFile(
        __dirname + '/../data/headers01.txt',
        JSON.stringify(req.headers)
    );

    const msg1 = await myWriteFile(
        __dirname + '/../data/test01.txt',
        'Hello!!!'
    );
    const msg2 = await myWriteFile(
        __dirname + '/../data/test02.txt',
        '哈囉'
    );
    res.end(msg);
});

server.listen(3000);