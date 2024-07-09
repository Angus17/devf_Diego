import http from 'http';

const localhost = "127.0.0.1" //Mi localhost
const port = 3000; //Mi puerto

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const html =
    `
        <div>
            <h1>Nuevo mundo</h1>
            <a href="https://www.google.com" target="_blank">
                <button>Google</button>
            </a>

            <button>
                Como estas
            </button>
        </div>
    `
    res.end(html);
}   )

server.listen(port, localhost, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
}   )
