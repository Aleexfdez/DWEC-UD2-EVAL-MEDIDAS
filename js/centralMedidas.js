export default class CentralMedidas {

    constructor(_medidas) {
        this._medidas = new Array();
    }
    //Metodo que sirve 
    estaCiudad(ciudad) {
        for (let i = 0; i < this._medidas.length; i++) {
            for (let j = 0; j < this._medidas[i].length; j++) {
                if (this._medidas[i][j] === ciudad) {
                    return false;
                }
            }
        }
        return true;
    }

    // Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con los valores del array valoresDevuelve verdadero si se ha podido insertar las medidas y falso si no (sila ciudad ya existe, o el segundo parámetro no contiene 30 valores).
    insertaMedidas(ciudad, valores) {
        var devolver = true;
        var varCiudad = this.estaCiudad(ciudad);
        if (valores.lenght != 30 && !varCiudad) {
            devolver = false;
        }
        if (devolver) {
            valores.unshift(ciudad);
            this._medidas.unshift(valores);
        }
        return devolver;
    }
    // Crea una nueva fila en la tabla de medidas correspondiente a la ciudad ciudad con valores aleatorios.Devuelve verdadero si se ha podido insertar las medidas y falso si no
    insertaAleatorio(ciudad) {
        const medidas = [ciudad];
        if (this.estaCiudad(ciudad)) {
            for (let i = 1; i < 30; i++) {
                medidas.push(Math.floor(Math.random() * 51) - 10);
            }
            this._medidas.push(medidas);
            return true;
        } else {
            return false;
        }
    }
// Devuelve la temperatura media de la ciudad indicada durante el mes
    mediaMedidas(ciudad) {
        var suma = 0;
        var contador = 0;

        for (var i = 0; i < this._medidas.length; i++) {
            if (this._medidas[i][0] === ciudad) {
                for (var j = 1; j < this._medidas[i].length; j++) {
                    suma += this._medidas[i][j];
                    contador++;
                }
            }
        }
        return contador == (suma / contador).toFixed(2);
    }
// Devuelve la temperatura media de todas las ciudades durante el mes
    mediaMedidasTotal() {
        var suma = 0;
        var contador = 0;
        const valor = parseInt(this._medidas[i][j]);

        for (var i = 0; i < this._medidas.length; i++) {
            for (var j = 0; j < this._medidas[i].length; j++) {
                if (!isNaN(valor)) {
                    suma += valor;
                    contador++;
                }
            }
        }

        return contador === 0 ? 0 : suma / contador;
    }

    //PENDIENTE
    eliminaCiudad(ciudad) {
        var eliminado = false;
        
        return eliminado;
    }
    
    // Se muestran por consola las medidas correspondientes a cada ciudad.

    toConsole() {
        console.table(this._medidas);
    }
}