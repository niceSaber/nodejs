var fs = require('fs');
const path = require('path');
var data = 'mdzz';
var writeStream = fs.createWriteStream(__dirname+'/ceshi.txt');
var readStream = fs.createReadStream(__dirname+'/ceshi.txt');
//读出数据时需要设定编码
readStream.setEncoding('UTF-8');
//写入数据时需要设定编码
writeStream.write(data,'UTF-8');
//表明接下来没有数据需要写入到writeStream里了
writeStream.end(()=>{
    console.log('没有更多数据需要写入了！');
});
readStream.on('end',(message) =>{
    console.log('没有更多可读数据时触发！');
})
readStream.on('data',function(message){
    console.log('当有可读数据时触发！');
    console.log(message);
});
writeStream.on('finish',() => {
    console.log('插入成功');
});
writeStream.on('error',function(err){
    console.log(err.stack);
});
console.log('结束')
