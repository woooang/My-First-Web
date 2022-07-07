var http = require('http');
var fs = require('fs');
const url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
        <title>Netflix-${title}</title>
        <meta charset="utf-8">
    </head>

    <Body>
        <h1><a href="/">NetFlix</a></h1>
        <ol>
            <li><a href="/?id=종이의 집">종이의 집</a></li>
            <li><a href="/?id=오징어게임">오징어게임</a></li>
            <li><a href="/?id=짱구 극장판">짱구 극장판</a></li>
        </ol>
        <h1>${title}</h1>
        <p>1명의 천재, 8명의 공범, 철저히 준비한 세기의 강도. 스페인 조폐국에서 인질극까지 벌인 이들은 과연 포위 경찰을 따돌리고 거액의 돈과 함께 달아날 수 있을까?</p>
    </Body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);