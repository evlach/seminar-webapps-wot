'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function createPersonCurried(firstName) {
    return function(lastName) {
        return function(age) {
            return createPerson(firstName, lastName, age);
        }
    }
}

let maxMustermann = createPersonCurried('Max')('Mustermann')(44);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
let createMax = createPersonCurried('Max');
let maxMueller = createMax('Müller')(47);
console.log(maxMueller);
// { firstName: 'Max', lastName: 'Müller', age: 47 }
let maxMeier = createMax('Meier')(55);
console.log(maxMeier);
// { firstName: 'Max', lastName: 'Meier', age: 55 }
