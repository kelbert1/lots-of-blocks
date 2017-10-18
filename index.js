var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var url = req.url;
    switch(url) {
        case '/':
            getStaticFileContent(res, './public/index.html', 'text/html');
            break;
        case '/about':
            // TODO
            break;
        case '/status':
            // TODO
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('404 - Page Not Found');
    }
}).listen(80);

function getStaticFileContent(res, filePath, contentType) {
    fs.readFile(filePath, function(error, data) {
        console.log(data);
        console.log(error);
        if (error) {
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.end('500 - Internal Server Error');
        }
        if (data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        }
    })
}