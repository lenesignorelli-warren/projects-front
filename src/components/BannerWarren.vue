<template>
  <div class="banner">
    <div class="item1">
        <h1>O Modelo Warren é mais justo para você</h1>
        <p>Na Warren, você tem performance para seus investimentos e uma experiência que é livre de taxas desonestas.</p>
        <button>Saiba Mais</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "BannerWarren",
}
</script>

<style scoped>
.banner{
    background-color: #e02b57;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.item1{
    margin-left: 100px;
    margin-right: 600px;
}

h1 {
  font-size: 80px;
}

p{
    font-size: 20px;
}
</style>