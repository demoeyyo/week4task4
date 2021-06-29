const http = require("http");
const fs = require('fs')

const hostname = 'localhost';
const port = 8000;

const server = http.createServer(function(req, resp){

    resp.writeHeader(200, {'content-type':'text/html'});
    var readstream = fs.createReadStream('./tsk.html', 'utf8')
    readstream.pipe(resp)
});
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
