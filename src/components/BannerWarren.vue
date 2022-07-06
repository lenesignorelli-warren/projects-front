<template>
  <div class="banner">
    <div class="item1">
        <h1>O Modelo Warren é mais justo para você</h1>
        <p>Na Warren, você tem performance para seus investimentos e uma experiência que é livre de taxas desonestas.</p>
        
        <button class="btn">Saiba Mais</button>
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

.item1, h1{
    margin-left: 100px;
    margin-right: 600px;
    font-size: 80px;
}

.item1, p{
    font-size: 20px;
}

.btn {
  border-radius: 50px;
  color: white;
  background: black;
  padding: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
</style>