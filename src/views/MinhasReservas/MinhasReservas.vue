

<script>
import DashboardComponent from '../../components/DashboardComponent.vue';
import CardsReservasComponent from '../../components/CardsReservas/CardsReservasComponent.vue';
export default {
  name: "MinhasReservas",
  components: {
    DashboardComponent,
    CardsReservasComponent,

  }

}

</script>

<template>
  <div class="main">

    <DashboardComponent>
      <CardsReservasComponent />
    </DashboardComponent>


  </div>
</template>

<style lang="scss" src="./style.scss" scoped/>