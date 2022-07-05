<template>
  <section class="container">
    <div class="investir">
      <h1>Investir é sobre você</h1>
      <p>COMECE A INVESTIR EM POUCOS MINUTOS. DESCOMPLIQUE.</p>
    </div>
      <button>Saiba Mais</button>
    
  </section>
</template>

<script>
export default {
  name: "InvestirWarren",
};
</script>

<style scoped>
.container {
  background-color: #cdcaca;
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  color: white;
  align-items: center;
}

button {
  display: flex;
  height: 40px;
  border-radius: 50px;
  color: white;
  background: black;
  padding: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

h1 {
  font-size: 50px;
}

p {
  font-size: 20px;
}
</style>