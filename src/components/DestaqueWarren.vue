<template>
  <section class="destaque">
    <div class="destaque1">
      <div class="item">
        <img alt="mulheres" src="./../assets/img-premios.png" />
      </div>
      <div class="item">
        <h1>Finanças Femininas</h1>
        <p>Aprenda a só gastar com o que te faz feliz!</p>
        <p>
          Guardar dinheiro todos os meses e multiplicar o que foi poupado com os
          melhores investimentos!
        </p>
        <button>Comece Agora</button>
      </div>
    </div>
    <div class="destaque2">
      <div class="item"><img alt="criança" src="./../assets/capa 2.png" /></div>
      <div class="item">
        <h1>Aprenda a Investir</h1>
        <p>Pare de frustrar seu “eu do futuro”!</p>
        <hr size="2" width="100%" color="red">
        <p>Conheça um novo jeito de investir!</p>
        <button>Comece Agora</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DestaqueWarren",
};
</script>

<style scoped>
.destaque1 {
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
}

.destaque2 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  padding: 50px;
  text-align: right;
}

img {
  width: 500px;
}

.item {
  width: 400px;
}

h1 {
  font-size: 50px;
}

p {
  font-size: 20px;
}

button {
  background-color: #e02b57;
  border: none;
}
</style>