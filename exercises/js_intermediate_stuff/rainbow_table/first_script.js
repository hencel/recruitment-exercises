let http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Okay\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

const fs = require('fs'); 
const md5 = require('md5');
const filename = process.argv[2];

fs.readFile('pan_tadeusz.txt', 'utf-8', (err, data) => { 
  if (err) throw err; 
  let text = data.toString().replace(/\n/g, " ").split(" ");

  text = text.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
  });
  text = text.join('\n');

  fs.writeFile(filename, text, (err) => { 
  if (err) throw err; 
  })
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    let rain_text = data.toString().split("\n");
  
    for(let i=0; i<rain_text.length; i++) {
      rain_text[i] = rain_text[i] + ' ' + md5(rain_text[i])
    }
    rain_text = rain_text.join('\n');

    fs.writeFile('rainbow_word_list.txt', rain_text, (err) => { 
      if (err) throw err; 
      })
  })
})
