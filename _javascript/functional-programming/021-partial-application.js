'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function partialRight(fn, ...parameterBound) {
    return function (...parameterUnbound) {
        return fn(...parameterUnbound, ...parameterBound);
    };
}

let createPersonWithAge44 = partialRight(createPerson, 44);
let createPersonWithAge55 = partialRight(createPerson, 55);

let maxMustermann = createPersonWithAge44('Max', 'Mustermann');
let moritzMustermann = createPersonWithAge55('Moritz', 'Mustermann');
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
console.log(moritzMustermann);
// { firstName: 'Moritz', lastName: 'Mustermann', age: 55 }
