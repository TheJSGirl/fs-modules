const fs = require('fs');
const path = require('path');

// fs.readFile('foo.txt', 'utf8', (err, data) => {
//   console.log(err);
//   console.log(data);
//   fs.writeFile('message.txt', data, err => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// });

function copyWrite(path1, path2) {
  const read = new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, path1), 'utf8', (err, data) => {
      //  resolve(data);
      fs.writeFile(path.resolve(__dirname, path2), data, err => {
        if (err) throw err;
        console.log('The file has been saved');
      });
    });
  });
}
const result = copyWrite('foo.txt', 'message.txt');
