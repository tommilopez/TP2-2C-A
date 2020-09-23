const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Hola mundo ${req.query.name} ${req.query.last}</h1>

            </body>
        </html>
    `);
});

app.get('/person/:id/:name', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Person: ${req.params.id}</h1>
                <h1>Person: ${req.params.name}</h1>
            </body>
        </html>
    `);
});

app.get('/api', (req, res) => {
    res.json({firstname: 'jhon', lastname: 'Vil'});
});

app.listen(PORT, ()=> {console.log(chalk.bgGrey.yellow('Servidor web disponible'))});
