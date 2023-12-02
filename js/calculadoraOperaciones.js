
const parsear = (id) => parseInt(document.getElementById(id).innerHTML) //validar valores de tipo ID's.

let suma = 0, resta = 0, multiplicacion = 1, division = 1;
let operaciones = null;

function numero(id) {
    const numberid = parsear(id);
    document.getElementById('idresult').innerHTML = numberid;
    // console.log(numberid)
}

function operacionSuma() {
    suma += parsear('idresult');
    document.getElementById('idresult').innerHTML = suma;
    // console.log(suma)
}

function operacionResta() {
    const r1 = parsear('idresult');
    resta = r1 - resta;
    document.getElementById('idresult').innerHTML = -resta;
}

function operacionMultiplicacion() {
    multiplicacion *= parsear('idresult');
    document.getElementById('idresult').innerHTML = multiplicacion;
}

function operacionDivision() {
    const r1 = parsear('idresult');
    if (r1 === 0) {
        document.getElementById('idresult').innerText = 'No se permite la division por 0';
    } else {
        division = r1 / division;
        document.getElementById('idresult').innerHTML = division;
    }
}

function resetNumeros() {
    suma = 0;
    resta = 0;
    multiplicacion = 1;
    division = 1;
    document.getElementById('idresult').innerText = '0';
}
function resetDigits() {
    document.getElementById('idresult').innerText -= 1;
}

function igualResult() {
    switch (operaciones) {
        case operacionSuma():
            break;
        case operacionResta():
            break;
        case operacionMultiplicacion():
            break;
        case operacionDivision():
            break;
    }
    operaciones = null;
}