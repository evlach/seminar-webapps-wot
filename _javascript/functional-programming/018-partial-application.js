'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function partial(fn /*, parameter...*/) {
    let parameterBound = Array.prototype.slice.call(arguments, 1);
    return function() {
        let parameterUnbound = Array.prototype.slice.call(arguments, 0);
        return fn.apply(this, parameterBound.concat(parameterUnbound));
    };
}

let createPersonWithFirstNameMax = partial(createPerson, 'Max');
let createPersonWithFirstNameMoritz = partial(createPerson, 'Moritz');

let maxMustermann = createPersonWithFirstNameMax('Mustermann', 44);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
let createMaxMustermann = partial(createPerson, 'Max', 'Mustermann');
let maxMustermann2 = createPersonWithFirstNameMax('Mustermann', 55);
console.log(maxMustermann2);
// { firstName: 'Max', lastName: 'Mustermann', age: 55 }
let maxMustermann3 = createPersonWithFirstNameMax('Mustermann', 66);
console.log(maxMustermann3);
// { firstName: 'Max', lastName: 'Mustermann', age: 66 }
