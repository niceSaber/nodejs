var http = require('http');
var url = require('url');
function start(route){
    function onRequest(request,response){
        var pathName = url.parse(request.url).pathname;
        console.log('*****请求的接口名称为:'+pathName+"*****");
        route(pathName);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<h1>MDZZ</h1>');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('********服务已启动********');
}
exports.start = start;