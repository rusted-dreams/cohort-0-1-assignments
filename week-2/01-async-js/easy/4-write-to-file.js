const fs = require('fs');

function writingInFile(file, content) {
    return new Promise(function(resolve){
        fs.writeFile(file, content, function(err, content){
            resolve();
        });
    });
}

async function main() {
    let file = 'week-2/01-async-js/easy/write to this file.txt'
    let w = await writingInFile(file, "write hello to the file");
    console.log('did the job');
    console.log(w);
}

main();