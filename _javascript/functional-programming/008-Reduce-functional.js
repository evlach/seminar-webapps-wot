'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);

let totalContacts = persons.reduce((previousValue, person, index, array) => {
  let contactsOfPerson = person.contacts.reduce((previousValue, contact, index, array) => {
    return previousValue + 1;
  }, 0);
  return contactsOfPerson + previousValue;
}, 0);
console.log(totalContacts); // 13
