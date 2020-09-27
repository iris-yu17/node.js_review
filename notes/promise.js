// 例子: public/01.promise01.html
// 例子: public/01.promise02-error.html
// 非同步操作時才須要把它包成promise，否則原則上不需要用到promise

// 用new
// 要給一個callback function(要做的事情放cb funct裡面)，他會給你2個參數:resolve, reject，(resolve, reject是形式參數，習慣上用這兩個名稱，要叫別的名字也可)，這2個東西都是function
// 若正常執行完，就呼叫resolve; 若發生錯誤，呼叫reject
new Promise((resolve, reject) => {
    console.log('Initial');

    // 若呼叫resolve，就會進到下面的then
    resolve();
})
// then要自己定義，裡面是另外一個cb funct
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
// 如果reject，就跑到catch
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});