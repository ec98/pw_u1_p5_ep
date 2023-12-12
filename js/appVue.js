console.log("elementos Vue");

// mostrador
console.log(Vue);

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
    }
   },
   watch:{

   },
   data(){
    return {
        mensaje: 'cambiado el mensaje desde un this.mensaje',
        valor: 10
    }
   }
});

// crear al identificador.
app.mount('#myApp')