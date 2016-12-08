'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].firstName);
}