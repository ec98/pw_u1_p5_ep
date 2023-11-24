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
    if (n2 == 0) {
        // n2 = 1;
        // res = n1 / n2;
        console.error("Infinito")
    } else {
        res = n1 / n2;
    }
    console.log(res);
    document.getElementById('idResultado2').innerText = res;
}

const changeImage = () => {
    var img = document.getElementById('idimagen1').src = 'https://static.vecteezy.com/system/resources/previews/010/898/286/original/game-cube-dice-png.png'
    // document.getElementById('idResultado').innerHTML = img
    console.log(img)
}

function conceptJS() {
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

    //declaracion de ARREGLOS
    const diasSemanas = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasSemanas)
    console.log(diasSemanas[0])
    console.log(diasSemanas[1])
    console.log(diasSemanas[2])
    console.log(diasSemanas[3])
    console.log(diasSemanas[4])
    diasSemanas[5] = 'Sabado'
    console.log(diasSemanas[5])

    //metodo push (append) agrega al final
    diasSemanas.push('Domingo')
    console.log(diasSemanas)

    //antes del dia lunes colocar un dia 'feriado'
    //unshift (prepend) agrega al inicio
    diasSemanas.unshift('Feriado')
    console.log(diasSemanas)

    //arreglos de edades
    const edades = [12, 15, 19, 13];
    console.log(edades)

    //unir elementos
    const edades2 = [6, 7, 8];
    const r = edades.concat(edades2)
    console.log(r)

    // for(const dia of r){
    for (const dia of diasSemanas) {
        console.log(dia)
        if (dia === 'Martes') {
            // dia.replace("Martes","Martes2x1")
            console.log("Martes 2x1")
        }
    }

    //declaracion de OBJETOS
    const estudiante = {
        //nomenclatura de tipo JSON
        nombre: "Edwin",
        apellido: "Piruch",
        edad: 34,
        genero: "M",
        ciudad: "Quito"
    }

    console.log(estudiante) // -> object
    //acceder a los atributos
    console.log(estudiante.apellido)
    estudiante.nombre = "Carlos"
    console.log(estudiante)

    estudiante.edad = 23
    console.log(estudiante)

    //para objetos
    const person = {
        nombre: "Pepito",
        apellido: "Mallato",
        edad: 34,
        direccion: {
            callePrincipal: "Habana",
            calleSecundaria: "Canada",
            numeracion: "N12-032",
            barrio: "Santa Prisca"
        }
    }
    console.log(person)
    console.log(person.direccion) //objeto direccion.
    console.log(person.direccion.barrio)

    //arreglo de 4 pacientes -> 3 atributos
    const pacientes = {
        1: {
            nombre: "maria",
            edad: 15,
            genero: "Femenino"
        },
        2: {
            nombre: "marco",
            edad: 35,
            genero: "Masculino"
        },
        3: {
            nombre: "mariana",
            edad: 25,
            genero: "Femenino"
        },
        4: {
            nombre: "salas",
            edad: 55,
            genero: "Femenino"
        }
    }
    // console.log(pacientes)
    // console.table(pacientes)

    const pacients = [{
        nombre: "Marco",
        apellido: "Mar"
    }, {
        nombre: "Alejandra",
        apellido: "Martha"
    }, {
        nombre: "Mariana",
        apellido: "Mares"
    }]
    //imprime con el push.
    console.log(pacients)
    // console.table(pacients[0].nombre)
    var res = pacients.pop(2) //saca un elemento de la lista.
    console.log(res)

    var res1 = pacients.push({
        nombre: "Alex",
        apellido: "Martha"
    }) // coloca un objeto.
    console.log(res1)
    console.log(pacients)
    console.table(pacients)


    //Desestructuracion de arreglos
    const diasSemanas2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    //divir en partes del arreglo
    const [dia1, dia2, dia3, dia4, dia5] = diasSemanas2
    console.log(dia1)
    console.log(dia5)

    //simplificado desestructuracion
    const [d1,d2,d3,d4,d5] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    console.log(d2)
    console.log(d4)

    //Desestructuracion de objetos
    const vehiculo = {
        marca: "Barbara",
        modelo: "BMW",
        anio: "2023"
    }
    const {marca,modelo,anio} = vehiculo
    console.log(marca)
    console.log(modelo)
    console.log(anio)

    //declarar 1 objeto -> 3 atributo (objeto) y desesctructurar
    // const {h} = [{hotel: {habitacion: "h1"}},{hotel: {habitacion: "h2"}},{hotel: {habitacion: "h3"}}]
    // const {h} = [{hotel: {habitacion : "h1"}}, {hotel : {habitacion : "h2"}},  {hotel : {habitacion : "h3"}}]
    // const hoteles = [{habitacion : {cama: "c1"}},{piscina: {lugar: "camas"}},{cuartos: {objeto: "camas"}}]
    // const {nombre, tipo, valorNutricional: {calorias,vitamina,proteinas}} = { nombre:'banana', tipo:'Fruta',valorNutricional:{calorias:20,vitamina:'B2',proteinas:1.2}};
    const {habitacion,piscina,cuartos} = [{habitacion : {cama: "c1"}},{piscina: {lugar: "camas"}},{cuartos: {objeto: "camas"}}][0]
    console.log(habitacion.cama)
}   