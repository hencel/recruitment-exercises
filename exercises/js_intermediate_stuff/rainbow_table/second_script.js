let http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

const fs = require('fs'); 
const md5 = require('md5');
const filename = process.argv[2];
const hash = process.argv[3]

fs.readFile(filename, 'utf-8', (err, data) => { 
  if (err) throw err; 
  let text = data.split(/\s+/);
  let result_hash = text.indexOf(hash);
  let result = text[result_hash-1] + ' ' + text[result_hash];

  fs.writeFile('result.txt', result, (err) => { 
  if (err) throw err; 
  })
})
