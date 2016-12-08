'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

let _ = {}; // Platzhalter
function partialWithPlaceholders(f /*, parameter...*/) {
    let parameterBound = Array.prototype.slice.call(arguments, 1);
    return function() {
        let i,
        parameter = [],
        parameterUnbound = Array.prototype.slice.call(arguments, 0);
        for(i=0; i<parameterBound.length; i++) {
            if(parameterBound[i] !== _) {
                parameter[i] = parameterBound[i];
            } else {
                parameter[i] = parameterUnbound.shift();
            }
        }
        return f.apply(this, parameter.concat(parameterUnbound));
    };
};

let createPersonWithLastNameMustermann = partialWithPlaceholders(createPerson, _, 'Mustermann', _);

let maxMustermann = createPersonWithLastNameMustermann('Max', 44);
let moritzMustermann = createPersonWithLastNameMustermann('Moritz', 55);
console.log(maxMustermann);
// { firstName: 'Max', lastName: 'Mustermann', age: 44 }
console.log(moritzMustermann);
// { firstName: 'Moritz', lastName: 'Mustermann', age: 55 }
