/**
Before running:
> npm install ws
Then:
> node server.js
> open http://localhost:8080 in the browser
*/

const http = require('http');
const fs = require('fs');
const ws = new require('ws');

const wss = new ws.Server({noServer: true});

const clients = new Set();

function accept(req, res) {

  if (req.url == '/ws' && req.headers.upgrade &&
      req.headers.upgrade.toLowerCase() == 'websocket' &&
<<<<<<< HEAD
      // 可以是 Connection: keep-alive, Upgrade
=======
      // can be Connection: keep-alive, Upgrade
>>>>>>> 646989dd470395510e1006c220e05e85a06eb78a
      req.headers.connection.match(/\bupgrade\b/i)) {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
  } else if (req.url == '/') { // index.html
    fs.createReadStream('./index.html').pipe(res);
<<<<<<< HEAD
  } else { // 页面不存在
=======
  } else { // page not found
>>>>>>> 646989dd470395510e1006c220e05e85a06eb78a
    res.writeHead(404);
    res.end();
  }
}

function onSocketConnect(ws) {
  clients.add(ws);
  log(`new connection`);

  ws.on('message', function(message) {
    log(`message received: ${message}`);

<<<<<<< HEAD
    message = message.slice(0, 50); // 最大消息长度为 50
=======
    message = message.slice(0, 50); // max message length will be 50
>>>>>>> 646989dd470395510e1006c220e05e85a06eb78a

    for(let client of clients) {
      client.send(message);
    }
  });

  ws.on('close', function() {
    log(`connection closed`);
    clients.delete(ws);
  });
}

let log;
if (!module.parent) {
  log = console.log;
  http.createServer(accept).listen(8080);
} else {
<<<<<<< HEAD
  // 嵌入 javascript.info
=======
  // to embed into javascript.info
>>>>>>> 646989dd470395510e1006c220e05e85a06eb78a
  log = function() {};
  // log = console.log;
  exports.accept = accept;
}
