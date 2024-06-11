import fs from "node:fs";
import path from "node:path";

const pathFile = path.join("recursos", "nombres.txt")
console.log(path.extname(pathFile)) // Regresa la extension del archivo

const file = fs.readFile( pathFile , "UTF-8", (error, datos) => {
    if (error)

        throw error;

    console.log(datos);
});
