const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("Error Fetching File, " + err);
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
       fs.writeFile(file, data, err => {
          if (err) reject("Error Writing File, "+ err);
          resolve('File Written Successfully !');
       });
    });
};

readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        console.log(`Breed: ${data}`);
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log(res.body.message);
        return writeFilePro('dog-image.txt', res.body.message);
    })
    .then(() => {
        console.log("Random dog image saved to file");
    })
    .catch(err => {
        console.log(err);
    });