// Como su nombre indica, es algo que esta en medio
// de un request y response

const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.use('/', (req, res, next) => {
    console.log('Paso por el middleware /');
    next();
});

app.use('/', (req, res, next)=>{
    if(req.query.token == 'abcde123'){
        next();
    } else {
        res.status(401).send('login fail');
    }
});

app.get('/', (req, res) =>{
    console.log('Paso por app.get');

    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Hola mundo</h1>
            </body>
        </html>
    `);
});



app.listen(PORT, ()=> {console.log(chalk.bgGrey.yellow('Servidor web disponible'))});
