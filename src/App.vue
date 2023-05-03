<script setup>


</script>

<template>
  <main>


      <router-view></router-view>

   
  </main>
  
</template>

<style scoped>


@media (min-width: 1024px) {
  header {
   margin: 0;
   padding: 0;

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
