const argv = require('./config/yargs').argv;
const colors = require('colors');
// Programa que guarda la tabla de multiplicar en un archivo, lo que no lleva ./ son dependencias de node
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(colors.green(`Archivo Creado:`), ` ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('sin comando');
}

let argv2 = process.argv;




// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);