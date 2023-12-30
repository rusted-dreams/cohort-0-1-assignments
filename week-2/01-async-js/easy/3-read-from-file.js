const fs = require('fs');

function readingFile(file) {
    return new Promise(function(resolve) {
        console.log('now reading');
        fs.readFile(file, 'utf-8', function(err, data){
            resolve(data);
        });
    });
}


async function main(){
    let file = './week-2/01-async-js/easy/textfile.txt';
    console.log('before reading');
    let content = await readingFile(file);
    console.log(content);
    console.log('after reading');
}

console.log('start');
main()
let b = 0;
console.log('doing other stuffs')
for (let i=0; i<1000000; i++) {
    b += 1;
}
console.log('after other stuffs');