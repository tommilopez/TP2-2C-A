const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/inventors', (req, res) =>{
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg' },
        { first: 'Isaac', last: 'Newton', year: 1643, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg' },
        { first: 'Galileo', last: 'Galilei', year: 1564, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg' },
        { first: 'Marie', last: 'Curie', year: 1867, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Marie_Curie%2C_portrait%2C_1900.jpg/220px-Marie_Curie%2C_portrait%2C_1900.jpg' },
        { first: 'Johannes', last: 'Kepler', year: 1571, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Kepler_1610.jpg/250px-Johannes_Kepler_1610.jpg' },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nikolaus_Kopernikus.jpg/240px-Nikolaus_Kopernikus.jpg' },
        { first: 'Max', last: 'Planck', year: 1858, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bundesarchiv_Bild_183-R0116-504%2C_Max_Planck.jpg/220px-Bundesarchiv_Bild_183-R0116-504%2C_Max_Planck.jpg' },
      ];
    
      res.render('inventors', {inventors: inventors});
});

app.listen(PORT, ()=> {console.log(chalk.bgGrey.yellow('Servidor web disponible'))});
