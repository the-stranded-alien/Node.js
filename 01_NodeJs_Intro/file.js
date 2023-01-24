const fs = require('fs');

// Blocking, synchronous way
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput);
const textOut = `This is what we know about the avocado: ${textInput}.\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written !');

// Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8',  (err1, data1) => {
   if(err1) return console.log("Error !");
   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err2, data2) => {
      console.log(data2);
      fs.readFile('./txt/append.txt', 'utf-8', (err3, data3) => {
         console.log(data3);
         fs.writeFile('./txt/final.txt',`${data2}\n${data3}` , 'utf-8', err4 => {
            console.log("Your file has been written !!");
         });
      })
   })
});
console.log('Will read file!');