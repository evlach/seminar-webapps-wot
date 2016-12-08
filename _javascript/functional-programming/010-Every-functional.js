'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);

let allMustermanns = persons.every((person, index, array) => {
  return person.lastName === 'Mustermann';
});
console.log(allMustermanns);
