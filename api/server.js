const http = require('http');
const app = require('./apiapp.js');
const port = process.env.port || 5000;

http.createServer(app).listen(port, () => console.log("WEBSERVER http://localhost:" + port));