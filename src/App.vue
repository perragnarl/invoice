<template>
  <div id="app">
    <h1>All invoices 2016</h1>
    <Invoices />
  </div>
</template>

<script>
import Invoices from "./components/Invoices.vue";

export default {
  name: "app",
  components: {
    Invoices
  }
};
</script>

<style lang="scss">
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
    }
</style>
