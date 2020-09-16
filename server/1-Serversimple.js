const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Conten-Type': 'text/html'});
    res.write('Hola mundo');
    console.log('se realizo una petición');
    res.end();
}).listen(3000,'127.0.0.1', () => 
    console.log('Server escuchando el puerto 3000')
);