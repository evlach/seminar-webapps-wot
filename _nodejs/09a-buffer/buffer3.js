"use strict";

const str = "¡Hola! ¿Cómo estáis?";
const buf = Buffer.from(str, "utf8");
console.log(`buffer byte length: ${buf.byteLength} - string length: ${str.length}`);