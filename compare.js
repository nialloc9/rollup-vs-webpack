const fs = require("fs");

function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats["size"]
    return fileSizeInBytes
}

const rollup = getFilesizeInBytes("./dist/ru.js");
const wp = getFilesizeInBytes("./dist/main.js");

const biggerFile = rollup > wp ? "Rollup" : "Webpack";

console.group()
    console.log("Rollup bundle size: " + rollup + " bytes.")
    console.log("Webpack bundle size: " + wp + " bytes.")
console.groupEnd()

console.group()
    console.log(biggerFile + " has larger bundle size by " + Math.abs(rollup - wp) + " bytes.")
console.groupEnd()