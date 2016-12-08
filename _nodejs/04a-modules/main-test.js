"use strict";
console.log(`Am I the main program? ${require.main === module}`);
console.log(`My name is ${require.main.filename}`);
