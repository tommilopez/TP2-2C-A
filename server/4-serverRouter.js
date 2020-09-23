// Router, access point,  en el sentido de ruteo de peticiones
// http://{dns}/api/inventors
// http://{dns}/api/inventors/45

const http = require('http');
const fs = require('fs');
const chalk = require('chalk');
const { runInNewContext } = require('vm');

const port = 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  http.createServer((req,res) => {
    // raiz / 
    // mensaje de home
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            let html = fs.readFileSync('./index.htm','utf-8');
            html = html.replace('{mensaje}', "Pagina de Home");
            res.end(html);
            break;
        
            // /api/inventors
            // liste los inventores 
            case '/api/inventors':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(inventors));
                res.end();
            break;
        // * 404 no encontrado
        default:
            res.writeHead(404);
            res.end();
            break;
    }        
  })
  .listen(port, 'localhost', ()=> {
    console.log(chalk.yellow.bgCyanBright(`Listen port: ${port}`));
  });
