<template>
  <div class="menu">
    <img alt="logo warren" src="logo2.png"/>
    <a href>Menu1</a>
    <div class="dropdown">
      <div class="dropbtn"><a href>Menu2</a></div>
      <div class="dropdown-content"><a href>Submenu1</a></div>
    </div>
    <a href>Menu3</a>
    <a href>Menu4</a>
    <a href>Menu5</a>
    <router-link to="/form"><button>Iniciar</button></router-link>
  </div>
</template>

<script>
export default {
  name: "MenuWarren",
}
</script>

<style scoped>
.menu {
  background-color: #cdcaca;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: white;
}

img {
  width: 90px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
}

button {
  cursor: pointer;
}
</style>