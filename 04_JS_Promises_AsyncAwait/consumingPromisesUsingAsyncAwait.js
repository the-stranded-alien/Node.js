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

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await writeFilePro('dog-image.txt', res.body.message);
        console.log("Random dog image saved to file");
    } catch (err) {
        console.log(err);
        throw(err);
    }
    return "Step 2: Ready !";
};

/*
console.log("Step 1: Will get dog pics!");
getDogPic().then(x => {
    console.log(x);
    console.log("Step 3: Got dog pics!");
}).catch(err => {
    console.log('ERROR' + err);
});
*/

(async () => {
    try {
        console.log("Step 1: Will get dog pics!");
        const status = await getDogPic();
        console.log(status);
        console.log("Step 3: Got dog pics!");
    } catch (err) {
        console.log('ERROR');
    }
})();