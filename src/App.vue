<template>
  <div id="app">
    <MenuWarren />
    <BannerWarren />
    <DestaqueWarren />
    <InvestirWarren />
    <RodapeWarren />

    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <router-view />
  </div>
</template>

<script>
import MenuWarren from "./components/MenuWarren.vue";
import BannerWarren from "./components/BannerWarren.vue";
import DestaqueWarren from "./components/DestaqueWarren.vue";
import InvestirWarren from "./components/InvestirWarren.vue";
import RodapeWarren from "./components/RodapeWarren.vue";

export default {
  name: "App",
  components: {
    MenuWarren,
    BannerWarren,
    DestaqueWarren,
    InvestirWarren,
    RodapeWarren
  }
}
</script>

<style>
#app {
  font-family: Arial;
}

button {
  border-radius: 50px;
  color: white;
  background: black;
  padding: 10px;
  font-weight: bold;
  border: none;
}
</style>
