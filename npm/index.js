const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('pablof@tecnoshare.com'));

console.log(chalk.blueBright.bgGreen('Hola mundo en color'));