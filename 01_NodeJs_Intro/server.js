const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server');
});

server.listen(8888, '127.0.0.1', () => {
    console.log('Listening to requests on port 8888');
})