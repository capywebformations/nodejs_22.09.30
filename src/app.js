const http = require('http');

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    // let url = req.url;
    let { url } = req;

    switch (url) {
        case "/":
            res.end("Home");
            break;

        case "/posts":
            res.statusCode = 201;
            res.setHeader = ('Content-type', "text/html");
            res.end("Liste des articles");
            break;

        default:
            res.end("404");
            break;
    }
});

server.listen(port, hostname);