var fs = require("fs");
var zlib = require('zlib');
var path = require('path');
/**
 * 将文件压缩
 */
// fs.createReadStream(path.join(__dirname,'mdzz.txt'))
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream(path.join(__dirname,'mdz0z.txt.gz')));
/**
 * 解压文件
 */
fs.createReadStream(path.join(__dirname,'mdz0z.txt.gz'))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(path.join(__dirname,'mdz0z.txt')));
console.log(__dirname,'\n',__filename);
console.log("文件压缩完成。");