<template>
<div>
  <MenuWarren />
    <BannerWarren />
    <DestaqueWarren />
    <InvestirWarren />
    <RodapeWarren />

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    </div>
</template>

<script>
import MenuWarren from "../components/MenuWarren.vue";
import BannerWarren from "../components/BannerWarren.vue";
import DestaqueWarren from "../components/DestaqueWarren.vue";
import InvestirWarren from "../components/InvestirWarren.vue";
import RodapeWarren from "../components/RodapeWarren.vue";

export default {
  name: "HomeView",
  components: {
    MenuWarren,
    BannerWarren,
    DestaqueWarren,
    InvestirWarren,
    RodapeWarren,
  }
}
</script>

<style>

</style>