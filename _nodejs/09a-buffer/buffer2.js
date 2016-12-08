"use strict";

const buf = Buffer.alloc(1, "¡", "utf8");
let i = 0;
for (let b of buf)
{
    console.log(`element: ${i++} - decimal: ${b} - hex: ${b.toString(16)}`);
}