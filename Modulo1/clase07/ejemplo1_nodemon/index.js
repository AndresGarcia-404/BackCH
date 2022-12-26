const http = require('http');

const server = http.createServer((req,res) => {
    res.end("mi primer hola mundo desde nodemon");
});

server.listen(8080,() => {
    console.log('server listening on port 8080');
});