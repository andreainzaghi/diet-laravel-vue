const { method } = require('lodash');

require('./bootstrap');

var app = new Vue({
    el: '#app',
    data: {
      Peso:[],
      Altezza:[],
      Eta:[],
      Sesso:[],
      Calorie:null
    },
    methods:{
      prova:function(){
       
        if (Sesso == 'Uomo') {
          Calorie = 10 * (Peso + 6,25) * (Altezza - 5) * (Eta + 5);
        } else if(Sesso == 'Donna'){
          Calorie = 10 * (Peso  + 6,25 ) * (Altezza  - 5) * (Eta - 161);
        }
      
      }
    }
     
    
  })