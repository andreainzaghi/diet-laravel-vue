const { method } = require('lodash');

require('./bootstrap');

var app = new Vue({
    el: '#app',
    data: {
      Peso:[],
      Altezza:[],
      Eta:[],
      Sesso:[],
    },
    method:{
      
      if (Sesso = 'Uomo') {
       var Uomini = 10 * (Peso + 6,25) * (Altezza - 5) * (Eta + 5);
      } else (Sesso = 'Donna'){
       var Donne = 10 * (Peso  + 6,25 ) * (Altezza  - 5) * (Eta - 161);
      }
      
    }
  })