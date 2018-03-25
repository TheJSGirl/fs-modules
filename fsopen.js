const fs = require('fs');
const path = require('path');

/**
 * This function will copy the content the then in callback copy that to another file
 */

// fs.readFile('foo.txt', 'utf8', (err, data) => {
//   console.log(err);
//   console.log(data);
//   fs.writeFile('message.txt', data, err => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// });

/**
 * This function will copy the content from file1 and copy that to file2
 * @param {string} path1
 * @param {string} path2
 */
// function copyWrite(path1, path2) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path.resolve(__dirname, path1), 'utf8', (err, data) => {
//       //  resolve(data);
//       fs.writeFile(path.resolve(__dirname, path2), data, err => {
//         if (err) throw err;
//         console.log('The file has been saved');
//       });
//     });
//   });
// }
// copyWrite('foo.txt', 'message.txt');

function read(path1) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, path1), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      fs.writeFile('message.txt', data, err => {
        throw err;
      });
    });
  });
}

(async () => {
  try {
    const result = await read('foo.txt');
  } catch (error) {
    console.log('error', error);
  }
})();
