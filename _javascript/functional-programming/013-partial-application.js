'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function createPersonWithFirstNameMax(lastName, age) {
    return createPerson('Max', lastName, age);
}

let maxMustermann = createPersonWithFirstNameMax('Mustermann', 44);
let maxMueller = createPersonWithFirstNameMax('Müller', 47);
let maxMeier = createPersonWithFirstNameMax('Meier', 55);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
console.log(maxMueller);
// { firstName: 'Max', lastName: 'Müller', age: 47 }
console.log(maxMeier);
// { firstName: 'Max', lastName: 'Meier', age: 55 }
