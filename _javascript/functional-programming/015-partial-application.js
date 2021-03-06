'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function createPersonWithFirstName(firstName) {
    return function(lastName, age) {
        return createPerson(firstName, lastName, age);
    }
}

let createPersonWithFirstNameMax = createPersonWithFirstName('Max');
let createPersonWithFirstNameMoritz = createPersonWithFirstName('Moritz');

let maxMustermann = createPersonWithFirstNameMax('Mustermann', 44);
let maxMueller = createPersonWithFirstNameMax('Müller', 47);
let maxMeier = createPersonWithFirstNameMax('Meier', 55);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
console.log(maxMueller);
// { firstName: 'Max', lastName: 'Müller', age: 47 }
console.log(maxMeier);
// { firstName: 'Max', lastName: 'Meier', age: 55 }

let moritzMustermann = createPersonWithFirstNameMoritz('Mustermann', 25);
let moritzMueller = createPersonWithFirstNameMoritz('Müller', 26);
let moritzMeier = createPersonWithFirstNameMoritz('Meier', 27);
console.log(moritzMustermann);
// { firstName: 'Moritz', lastName: 'Mustermann', age: 25 }
console.log(moritzMueller);
// { firstName: 'Moritz', lastName: 'Müller', age: 26 }
console.log(moritzMeier);
// { firstName: 'Moritz', lastName: 'Meier', age: 27 }
