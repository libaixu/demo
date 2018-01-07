// 阻塞读取
var fs = require('fs');

var d = fs.readFileSync('word.txt');

console.log( d.toString() );
console.log( '阻塞文件读取完成' );