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
});

// crear al identificador.
app.mount('#myApp')