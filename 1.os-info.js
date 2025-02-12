import os, { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os";
console.log(os);

console.log("info del sistema");
console.log("------------------------------");
console.log("nombre del sistema operativo" + platform());
console.log("version del sistema operativo" + release());
console.log("arquitextura" + arch());
console.log("CPS" + cpus());
console.log("memoria libre", freemem());
console.log("memoria total", totalmem() / 1024 / 1024);
console.log("uptime", uptime() / 60 / 60 / 24);
