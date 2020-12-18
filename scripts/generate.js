const fs = require('fs');

let rawdata = fs.readFileSync('../src/assets/dirty.json');
let list = JSON.parse(rawdata);

const cleanList = [];
let cleanVerbRow = {};

list.pageTables.forEach(page => {

    page.tables.forEach((verbRow, index) => {
        if (verbRow[0].trim() === 'Verb' && verbRow[4].trim() === 'Beispielsatz' ) {
            return;
        }
        cleanVerbRow = {};
        if( verbRow[0].trim() == '' ) {
            return;
        }
        cleanVerbRow.verb = verbRow[0].trim();
        cleanVerbRow.preposition = verbRow[2].trim().split('\n')
            .filter(x => !!x.trim())
            .map(x => x.replace(' +', '+'));
        cleanVerbRow.sample = verbRow[4].trim().split('\n').filter(x => !!x.trim());
  
        cleanList.push(cleanVerbRow);
    });
});

let data = JSON.stringify(cleanList);
fs.writeFileSync('../src/assets/clean-verbs.json', data);
console.log('Completed');