// 沒有設定contentType時是純文字
res.end()

// 沒有設定contentType時是html
res.send()

// 沒有設定contentType時是html
res.render()

// 沒有設定contentType時是application/json
res.json()

// 以上4個動作都會去寫檔頭，再寫內容，因此四個只有一個能執行