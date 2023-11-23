function sumNumbersComplete() {
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion sumar numeros ' + n1 + '+' + n2);
    var res = n1 + n2;
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

function restNumbers(){
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion restar numeros ' + n1 + '-' + n2);
    var res = n1 - n2;
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

function multiNumbers(){
    var n1 = parseInt(document.getElementById('idnumber1').value);
    var n2 = parseInt(document.getElementById('idnumber2').value);
    console.log('funcion multiplicar numeros ' + n1 + '*' + n2);
    var res = n1 * n2;
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

function divNumbers(){
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

function changeImage(){
    var img = document.getElementById('idimagen1').src='https://static.vecteezy.com/system/resources/previews/010/898/286/original/game-cube-dice-png.png'
    document.getElementById('idResultado').innerHTML = img
}