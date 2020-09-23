const http = require('http');
const fs = require('fs');
const chalk = require('chalk');


http.createServer((req, res) =>{
    try {
        let html = fs.readFileSync('./index1.htm','utf-8');
        res.writeHead(200, {'Conten-Type': 'text/html'}); 
        html = html.replace('{mensaje}', 'Hola mundo template');
        //res.write(html);
        res.end(html);
    } catch (error) {
        res.writeHead(500, {'Conten-Type': 'text/html'});
        console.log(chalk.red("Error:" + error  ));
        res.write('Error interno');
        res.end();
    }
}).listen(3000,'127.0.0.1', () => 
    console.log(chalk.bgBlackBright('Server escuchando el puerto 3000'))
);

// VOLVEMOS 9:30