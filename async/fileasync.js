const fs = require('fs');
const path = '.././files/bigfile.txt';

fs.readFile(path, 'utf-8', (err, data) => {
    if(!err) {
        console.log(data)
    }
    else {
        console.log(err.message);
    }
    console.log('------------FIN DE LECTURA----------');
});

