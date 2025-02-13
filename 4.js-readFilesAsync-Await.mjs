import { readFile } from "node:fs/promises";

console.log("Leyendo archivo");
const text = await readFile("./archivo.txt", "utf-8");
console.log("primer texto:", text);
console.log("===> jacer cosas mentras leo el archivo");
const text2 = await readFile("./asrchivo2.txt", "utf-8");

console.log("segundo texto:", text2);
