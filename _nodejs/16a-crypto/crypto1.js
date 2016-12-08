"use strict";

const crypto = require("crypto");
const password = "123456";

let enc = encrypt("hello world", password);
console.log(`Encrypted text: ${enc}`);
console.log(`Decrypted text: ${decrypt(enc, password)}`);

function encrypt(text, password)
{
    const algorithm = "aes-256-ctr";
    const cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}

function decrypt(text, password)
{
    const algorithm = "aes-256-ctr";
    const decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
}