console.log("elementos Vue");

// funciones de Vue
console.log(Vue);

// arreglo de estudiantes
const estudiantes = [
    {nombre: "Edwin", apellido:"Piruch"},
    {nombre: "Maria", apellido:"Angela"},
    {nombre: "Sofia", apellido:"Martha"},
    {nombre: "Lucy", apellido:"Lopez"},
    {nombre: "Naomi", apellido:"Moya"}
]
console.log(estudiantes)
console.table(estudiantes)
// propiedades reactivas -> terminan funcionando como un modelo (vista-controlador)


const app = Vue.createApp({

    /*template : `
    <h1>hola mundo</h1>
    <p> Desde App.js</p>
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6]}}</p>
    <p>{{true? 'Verdadero' : 'False'}}</p>
    <p>{{true? 'False' : 'Verdadero'}}</p>
    `
    */
   methods:{
    cambiarMensaje(){
        console.log("cambiar mensaje");
        console.log(this.mensaje);
        this.mensaje = 'aqui se cambia mi mensaje de un return';
    },
    cambiarNumero(){
        console.log("cambiar numero");
        console.log(this.valor);
        this.valor++;
    },
    agregarEstudiante(){
        console.log("agregando estudiante");
        const estu = {nombre: this.nombre, apellido: this.apellido}; //crear el objeto de tipo estudiante
        // this.lista.unshift(estu); //agregar elemento al inicio
        this.lista.push(estu); //agregar elemento al final
        // this.lista.pop(estu) //eliminar elemento en la lista
    },
    // otra propiedad
    presionandoTecla(event){
        console.log("presionando....");
        console.log(event);
        // atributo charcode
        console.log(event.charCode);
    },
    presionarTelca(event){
        console.log("enter")
        const elem = 13;
        if(event === elem){
            agregarEstudiante();
        }
    }
   },
   watch:{

   },
//    propiedad reactiva
   data(){
    return {
        mensaje: 'cambiado el mensaje desde un this.mensaje',
        valor: 10,
        // no podemos renderizar el vector.
        lista:estudiantes,
        nombre:null,
        apellido:null
    }
   }
});

// crear al identificador.
app.mount('#myApp')