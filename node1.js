// let ans=require('./node2')
// console.log("First one")
// console.log(ans(1,2))

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(1234);
const fs=require('fs')
fs.appendFile('Hello.txt', 'Hola.txt', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  