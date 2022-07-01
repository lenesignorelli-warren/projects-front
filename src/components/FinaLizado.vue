<template>
  <form>
    <div class="count">
      <ul class="progressbar">
        <li class="active">Passo 1</li>
        <li class="active">Passo 2</li>
        <li class="active">Passo 3</li>
      </ul>
    </div>

    <div class="final">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <i class="material-icons">&#xe86c;</i>
      <h1>Cadastro</h1>
      <h1>Finalizado!</h1>
      <p>Caso deseje retornar à pagina inicial</p>
      <p>clique no botão abaixo</p>
      <router-link to="/"><button type="submit">Voltar</button></router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "FinaLizado",
};
</script>

<style scoped>
form {
  text-align: center;
  padding-right: 500px;
}

.final {
  padding-top: 100px;
}

button {
  cursor: pointer;
}

.material-icons {
  font-size: 40px;
  color: rgb(47, 255, 227);
  padding-top: 100px;
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
