<template>
  <form>
    <div class="count">
      <ul class="progressbar">
        <li class="active">Passo 1</li>
        <li class="active">Passo 2</li>
        <li>Passo 3</li>
      </ul>
    </div>

    <p><strong>Dados de Contato</strong></p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <fieldset class="pais">
      <legend>País onde reside</legend>
      <input type="text" id="pais" name="pais" placeholder="Digite">
    </fieldset>

    <fieldset class="cidade">
      <legend>Cidade</legend>
      <input type="text" id="cidade" name="cidade" placeholder="Digite">
    </fieldset>
    <br>
    <br>

    <fieldset class="cep">
      <legend>Cep</legend>
      <input type="text" id="cep" name="cep" placeholder="somente números" v-maska="'#####-###'" v-model="cep">
    </fieldset>

    <fieldset class="endereco">
      <legend>Endereço</legend>
      <input type="text" id="endereco" name="endereco" placeholder="Digite">
    </fieldset>
    <br>
    <br>

    <fieldset class="numero">
      <legend>Número</legend>
      <input type="text" id="numero" name="numero" placeholder="Digite">
    </fieldset><br>
    
    <button type="submit">Confirmar</button>
  </form>
</template>

<script>
export default {
    name: "DadosPessoais"
}
</script>

<style scoped>
form {
  text-align: left;
  padding-right: 300px;
}

input {
  outline: none;
}

legend {
  font-size: 14px;
}

fieldset.numero {
  width: 650px;
}

.numero input {
  border: white;
  width: 500px;
  padding: 5px 10px 10px 50px;
}

fieldset.pais, .cidade, .cep, .endereco {
  width: 250px;
}

.pais input, .cidade input, .cep input, .endereco input {
  border: white;
  width: 250px; 
  padding: 5px 10px 10px 50px;
}

.pais, .cidade, .cep, .endereco {
  display: inline-block;
}

button {
  background-color: #e02b57;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px;
  font-weight: bold;
}

.count {
  width: 100%;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  list-style: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: #e02b57;
}

.progressbar li.active:before {
  border-color: #e02b57;
}

.progressbar li.active + li:after {
  background-color: #e02b57;
}
</style>