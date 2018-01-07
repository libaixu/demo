// 回调 非阻塞
var fs = require('fs');

fs.readFile('word-uni2.txt',function(err,data){
	if(err){
		return console.log(err);
	}
	console.log( data.toString() );
});
console.log( '回调非阻塞读取文件完成' );