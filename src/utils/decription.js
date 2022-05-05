const CryptoJS = require("crypto-js");

export function decryptToken(token) {
    const crptKey = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_SECRET);
    const crypted = CryptoJS.enc.Base64.parse(token);
    const bytes = CryptoJS.AES.decrypt({ ciphertext: crypted }, crptKey, {
      iv: CryptoJS.enc.Hex.parse("00000000000000000000000000000000"),
    });
    return bytes.toString(CryptoJS.enc.Utf8);
}
