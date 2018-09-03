//Requireds
const fs = require('fs'); //librería que existe en node
// const colors = require('colors');
// const fs = require('express'); //no existe en node, es un pkg que se instala 
// const fs = require('./fs'); //son los que creamos y hacen referencia a un archivo creado localmente


// module.exports.crearArchivo = (base) => { //otra forma de exportarlo

let listarTabla = (base, limite = 10) => { //setea el 10 por defecto por ser opcional el parametro
    console.log('==========================');
    console.log(`tabla del ${base} `.green);
    console.log('==========================');
    for (let i = 0; i <= limite; i++) {

        console.log(`${base} x ${i} = ${i * base}`);


    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `${base} x ${i} = ${i * base}\n`;

        }
        //fs hace referencia al paquete que importamos
        fs.writeFile(`tablas/tablaMultiplicar${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}