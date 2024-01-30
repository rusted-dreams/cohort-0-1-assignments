const { log } = require('console');
const { resolve } = require('path');
const fs = require('fs').promises;

async function fileCleaner(file) {
    let txt = await fs.readFile(file, 'utf-8', (err, data)=>{
        return data;
    });
    txt = txt.replace(/\s+/g, " ");
    await fs.writeFile(file, txt, (err, txt)=>{
        resolve(txt);
    });
}

let file = './week-2/01-async-js/medium/file.txt';
fileCleaner(file)