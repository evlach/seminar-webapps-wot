"use strict";

const crypto = require("crypto");
const password = crypto.randomBytes(32);
const iv = crypto.randomBytes(12);

let enc = encrypt("hello world", password, iv);
console.log(`Password: ${password.toString("base64")}`);
console.log(`IV:       ${iv.toString("base64")}`);
console.log(`Encrypted text: ${JSON.stringify(enc, null, 4)}`);
console.log(`Decrypted text: ${decrypt(enc, password, iv)}`);

function encrypt(text, password, iv)
{
    const algorithm = "aes-256-gcm";
    let cipher = crypto.createCipheriv(algorithm, password, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    let tag = cipher.getAuthTag();
    return {
        content: encrypted,
        tag: tag
    };
}

function decrypt(encrypted, password, iv)
{
    const algorithm = "aes-256-gcm";
    let decipher = crypto.createDecipheriv(algorithm, password, iv);
    decipher.setAuthTag(encrypted.tag);
    let dec = decipher.update(encrypted.content, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
}