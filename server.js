var http = require('http');
http.createServer(function(request,reponse){
    reponse.writeHeader(200,{'Content-Type':'text/plain'});
    
    reponse.end('Hello World');
    
}).listen(8988);
console.log('Server running at http;//127.0.0.1:8988/');