<template>
  <div>
    <div class="bar">
      <h3>FORMULÁRIO</h3>
      <fa-icon id="arrow" icon="fa-solid fa-arrow-left-long" />
    </div>

    <div class="container">
      <div class="image">
        <img src="../assets/Fer.png" alt="Fernanda" />
      </div>
      <div v-show="Fase1">
        <BemVindo />
      </div>
      <div v-show="Fase2">
        <DadosPessoais />
      </div>
    </div>
  </div>
</template>

<script>
import BemVindo from "../components/BemVindo.vue";
import DadosPessoais from "../components/DadosPessoais.vue";

export default {
  name: "FormView",
  components: {
    BemVindo,
    DadosPessoais,
  },
  data() {
    return {
      Fase1: true,
      Fase2: false,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
}

h3 {
  text-align: center;
}

img {
  width: 400px;
}

.bar {
  background-color: #e02b57;
  padding: 10px;
  align-items: center;
  color: white;
}
</style>