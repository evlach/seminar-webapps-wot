'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

let firstName = 'Max';
let maxMustermann = createPerson(firstName, 'Mustermann', 44);
let maxMueller = createPerson(firstName, 'Müller', 47);
let maxMeier = createPerson(firstName, 'Meier', 55);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
console.log(maxMueller);
// { firstName: 'Max', lastName: 'Müller', age: 47 }
console.log(maxMeier);
// { firstName: 'Max', lastName: 'Meier', age: 55 }
