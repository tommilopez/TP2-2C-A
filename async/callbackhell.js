// requerimiento: 
// 1.- leer el json inventors.json 
// 2.- insertar un inventor
// 3.- guardarlo en el archivo inventors.json
// 4.- leer el archivo inventors.json
// 5.- Mostrarlo en pantalla

const fs = require('fs');
const path = './../files/inventors2.json';

// leer archivo inventors.json
fs.readFile(path,'utf-8', (error, data) => {
    if(!error){
        data = JSON.parse(data);
        data.inventors.push({
            first: "René",
		    last: "Favarolo",
		    year: 1923
        });
        //console.log(data.inventors);
        fs.writeFile(path, JSON.stringify(data, null, ' '), error => {
            if(!error){
                fs.readFile(path, 'utf-8', (error, data) => {
                    if(!error){
                        console.log(JSON.parse(data));
                    }
                });
            }
        });
    }
});