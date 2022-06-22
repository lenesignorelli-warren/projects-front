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
