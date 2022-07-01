<template>
  <div>
    <div class="bar">
      <h3>FORMULÁRIO</h3>
      <router-link to="/">
        <fa-icon
          id="arrow"
          class="styleIcon"
          icon="fa-solid fa-arrow-left-long"
      /></router-link>
    </div>

    <div class="container">
      <div class="image">
        <img src="../assets/Fer.png" alt="Fernanda" />
      </div>

      <div v-show="Fase1">
        <BemVindo @nextStep="changePage()" />
      </div>
      <div v-show="Fase2">
        <DadosPessoais @nextStep="changePage()" />
      </div>
      <div v-show="Fase3">
        <FinaLizado />
      </div>
    </div>
  </div>
</template>

<script>
import BemVindo from "../components/BemVindo.vue";
import DadosPessoais from "../components/DadosPessoais.vue";
import FinaLizado from "../components/FinaLizado.vue";

export default {
  name: "FormView",
  components: {
    BemVindo,
    DadosPessoais,
    FinaLizado,
  },

  data() {
    return {
      Fase1: true,
      Fase2: false,
      Fase3: false,
    };
  },

  methods: {
    changePage() {
      if (this.Fase1 == true && this.Fase2 == false) {
        this.Fase1 = false;
        this.Fase2 = true;
      } else if (
        this.Fase1 == false &&
        this.Fase2 == true &&
        this.Fase3 == false
      ) {
        this.Fase2 = false;
        this.Fase3 = true;
      }
    },
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