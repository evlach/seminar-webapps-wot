'use strict';
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function curry(firstParameter) {
    let n,
    f,
    parameterBound = Array.prototype.slice.call(arguments, 1);
    if(typeof firstParameter === "function") {
        f = firstParameter;
        n = firstParameter.length;
    } else {
        f = parameterBound.shift();
        n = firstParameter;
    }
    return function() {
        let parameterUnbound = Array.prototype.slice.call(arguments);
        let parameter = parameterBound.concat(parameterUnbound);
        return parameter.length < n
        ? curry.apply(this, [n, f].concat(parameter))
        : f.apply(this, parameter);
    }
}

let createPersonCurried = curry(createPerson);
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
