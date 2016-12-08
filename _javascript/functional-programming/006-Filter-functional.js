'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);

let maxContacts = persons[0].contacts;
let maxMobileNumbers = maxContacts.filter((contact) => {
  return contact.type === 'Mobilnummer';
});
console.log(maxMobileNumbers);