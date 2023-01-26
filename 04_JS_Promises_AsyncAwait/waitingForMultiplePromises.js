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

        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const images = all.map(element => element.body.message);
        console.log(images);

        await writeFilePro('dog-image.txt', images.join('\n'));
        console.log("Random dog image saved to file");
    } catch (err) {
        console.log(err);
        throw(err);
    }
    return "Step 2: Ready !";
};

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