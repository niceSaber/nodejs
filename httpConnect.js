// var net = require('net');
// var client = net.connect({port:80,host: 'www.baidu.com'},function(){
//     console.log('建立连接');
// });
// client.on('data', function(data) {
//     console.log(data.toString());
//     client.end();
//  });


 var http = require('http');  
 
var qs = require('querystring');  
 
var data = {  
   a: 123,  
   time: new Date().getTime()};//这是需要提交的数据  
 
 
var content = qs.stringify(data);  
 
var options = {  
   hostname: '172.16.21.84',  
   port: 8090,  
   path: 'login_page.php',  
   method: 'post'  
};  
 
var req = http.request(options, function (res) {  
   console.log('STATUS: ' + res.statusCode);  
   console.log('HEADERS: ' + JSON.stringify(res.headers));  
   res.setEncoding('utf8');  
   res.on('data', function (chunk) {  
       console.log('BODY: ' + chunk);  
   });  
});  
 
req.on('error', function (e) {  
   console.log('problem with request: ' + e.message);  
});  
 
req.end();  