// requerimiento: 
// 1.- leer el json inventors.json 
// 2.- insertar un inventor
// 3.- guardarlo en el archivo inventors.json
// 4.- leer el archivo inventors.json
// 5.- Mostrarlo en pantalla

const fs = require('fs').promises;
const path = './../files/inventors2.json';

// leer archivo

async function operacionesInventores(){
    fs.readFile(path, 'utf-8')
        .then( async data => {
            data = JSON.parse(data);
            
            data.inventors.push({
                first: "Ladislao",
                last: "Biro",
                year: 1899
            });

            //console.log(data);
            await fs.writeFile(path, JSON.stringify(data, null, ' '));
            console.log( await fs.readFile(path, 'utf-8'));
        })
        .catch(error => console.log(error));
}

operacionesInventores();