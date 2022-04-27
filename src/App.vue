<template>
  <h1>Router Overview</h1>
  <div class="router">
    <router-link to="/pageA">Page A</router-link>
    <router-link to="/pageB">Page B</router-link>
    <router-link to="/pageC">Page C</router-link>
  </div>
  <h2>Go to Page Push</h2>
  <div class="router">
    <button @click="goToPage('/pageA')">Go to Page A</button>
    <button @click="goToPage('/pageB')">Go to Page B</button>
    <button @click="goToPage('/pageC')">Go to Page C</button>
  </div>
  <h2>Go to Page Replace</h2>
  <div class="router">
    <button @click="replacePage('/pageA')">Go to Page A</button>
    <button @click="replacePage('/pageB')">Go to Page B</button>
    <button @click="replacePage('/pageC')">Go to Page C</button>
  </div>
  <h2>Go to User (Parametros na url)</h2>
  <div class="router">
    <button @click="goToUser">Go to User</button>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    //Empilha os Históricos
    goToPage(route) {
      this.$router.push(route);
    },
    //Não permite o usuário voltar
    replacePage(route) {
      this.$router.replace(route);
    },
    goToUser(){
      this.$router.push({name: "usuariovue", params:{userId: 2}})
    }
  },
};
</script>

<style>
.router {
  display: flex;
  justify-content: space-around;
}
</style>
