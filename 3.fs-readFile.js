const fs = require("node:fs")
const txt = fs.readFileSync("./archivo.txt", "utf-8")

console.log(txt);
