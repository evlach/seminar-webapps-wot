'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function createPersonWithFirstNameMoritz(lastName, age) {
    return createPerson('Moritz', lastName, age);
}
