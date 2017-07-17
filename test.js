const fs = require('fs');

function walkDir(dir) {
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        }
        else {
            results.push(file);
        }
    })
    return results;
}

let files = walkDir('./_site').forEach(function(fileName) {
    
})
console.log(files);