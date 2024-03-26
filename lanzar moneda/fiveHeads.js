// Definición de la función fiveHeads
function fiveHeads() {
    // Se crea una nueva promesa que toma dos parámetros: resolve y reject
    return new Promise( (resolve, reject) => {
        let headsCount = 0; // Variable para contar el número de "caras" consecutivas
        let attempts = 0; // Variable para contar el número total de intentos

        // Bucle que continuará hasta obtener cinco "caras" consecutivas
        while(headsCount < 5) {
            attempts++; // Se incrementa el número de intentos en cada iteración
            
            // Se simula el lanzamiento de una moneda
            if(Math.random() > 0.5) {
                headsCount++; // Si el resultado es mayor que 0.5 (cara), se incrementa headsCount
            } else {
                headsCount = 0; // Si el resultado es menor o igual a 0.5 (cruz), se reinicia headsCount
            }
        }

        // Si se necesitaron menos de 100 intentos, la promesa se resuelve con un mensaje de éxito
        if(attempts <= 100) {
            resolve(`Se necesitaron ${attempts} intentos para obtener 5 caras`);
        } else {
            // Si se alcanzó el límite de 100 intentos, la promesa se rechaza con un mensaje de error
            reject(`Los intentos han alcanzado ${attempts}`);
        }
    });
}

// Llamada a la función fiveHeads y manejo del resultado utilizando métodos then y catch
fiveHeads()
    .then(result => {
        console.log(result); // Si la promesa se resuelve, se imprime el mensaje de éxito
    })
    .catch(error => {
        console.log(error); // Si la promesa se rechaza, se imprime el mensaje de error
    });
