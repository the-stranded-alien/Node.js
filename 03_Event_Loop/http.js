const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    res.end("Request received!");
});

server.on('request', (req, res) => {
    res.end("Another request");
});

server.on('close', () => {
    console.log('Server Closed');
});

server.listen(8888, '127.0.0.1', () => {
   console.log("Waiting for Requests...");
});
