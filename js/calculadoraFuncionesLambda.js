// para lambdas es const representa una constante
const sumar = (n1, n2) => n1 + n2;

const sumComplete = () => {
    var res = parsear('idnumber1') + parsear('idnumber2');
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

// CONVERTIR O PARSEAR (generico)
const parsear = (id) => parseInt(document.getElementById(id).value)

const restComplete = () => {
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion restar numeros ' + n1 + '-' + n2);
    var res = n1 - n2;
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

const multiNumbers = () => {
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion multiplicar numeros ' + n1 + '*' + n2);
    var res = n1 * n2;
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

const divNumbers = () => {
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion dividir numeros ' + n1 + '/' + n2);
    var res;
    if(n2 == 0){
        n2 = 1;
        res = n1 / n2;
    } else {
        res = n1 / n2;
    }
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

const changeImage = () => {
    var img = document.getElementById('idimagen1').src='https://static.vecteezy.com/system/resources/previews/010/898/286/original/game-cube-dice-png.png'
    // document.getElementById('idResultado').innerHTML = img
    console.log(img)
}

function conceptJS(){
    // tipo let
    let var1 = 10;
    let var1Texto = 'hola let';
    console.log(var1);
    console.log(var1Texto);
    
    // var es un tipo de dato que esta quedando en desuso
    var var2 = 10;
    var var2Texto = 'chocala var'
    console.log(var2);
    console.log(var2Texto);
    
    const const1 = 10;
    const const1Texto = 'diez const';
    console.log(const1);
    console.log(const1Texto);

    //declaracion de arreglos
    const diasSemanas = ('Lunes','Martes','Miercoles','Jueves','Viernes');
    console.log(diasSemanas)
}