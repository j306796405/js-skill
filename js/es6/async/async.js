/**
 * async.js
 * @author jianglj
 * @create 2016-02-15 15:38
 */
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 50);
