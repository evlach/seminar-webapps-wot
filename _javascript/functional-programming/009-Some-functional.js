'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);

let isMaxThere = persons.some((person, index, array) => {
  return person.firstName === 'Max';
});
console.log(isMaxThere);
