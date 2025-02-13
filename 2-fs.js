const fs = require("node:fs")

const stats = fs.statSync("./archivo.txt")

console.log(
    fs.isFile(),// si es un fichero o archivo
    stats.isDirectory(),//su es durectorio
    stats.isSymbolicLink(),//si es enlace simbolico 
    fs.size //tamaño de bytes
);


