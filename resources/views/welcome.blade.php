@extends('layout.base')

@section('corpo')
<div class="input" id="app">
 
  <section>
   
    <div class="input-generalita">
      <div class="select">
        <select name="sexo"  v-model="Sesso">
          <option disabled value="">sesso</option>
          <option value="uomo">Uomo</option>
          <option value="donna">Donna</option>
        </select>
      </div>
        <div class="input-peso">
          <input type="text" placeholder="Peso in Kg"v-model="Peso">
        </div>

        <div class="input-altezza">
          <input type="text"placeholder="Altezza in cm"v-model="Altezza">
        </div>

        <div class="input-eta">
          <input type="text"placeholder="Eta'"v-model="Eta">
        </div>
        <span>Checked names: @{{ Sesso }}</span>

   </div>
</section>
</div>


@endsection