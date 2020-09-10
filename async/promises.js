// Es un objeto que nos permite manipular el exito o fracaso. evitando en algunos 
// casos la exagerada manipulacion de callbacks anidados

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1,4,5]);
//         reject("Algo malo paso");
//     }, 2 * 1000);
// });

// doWorkPromise
//     .then(result => {
//         console.log('funciono todo bien, resultado:' + result);
//     })
//     .catch(error => {
//         console.log("Error: " + error);
//     });

/// -------------

function resuelveen2segundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve([1,4,5]);
            reject("Algo malo paso");
        }, 2 * 1000);
    });
}

async function asyncCall(){
    console.log('llamando funcion.... ');
    const resultado = await resuelveen2segundos();
    console.log(resultado);
}

asyncCall();
