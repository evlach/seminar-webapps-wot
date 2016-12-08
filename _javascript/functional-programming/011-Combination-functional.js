'use strict';
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf-8');
const persons = JSON.parse(fileContent);

let c = persons
  .filter(person => person.age > 45)
  .map(person => person.contacts)
  .reduce((allContacts, contacts) => allContacts.concat(contacts), [])
  .filter(contact => contact.type === 'Festnetz')
  .forEach(contact => console.log(contact.value));
