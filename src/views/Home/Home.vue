



<script>
//Para importar um componente usar import dentro do script e logo após registrar dentro de components o component importado, depois é só usar no template tranquilo.
import DashboardComponent from '../../components/DashboardComponent.vue';

  export default {
     components: {
        DashboardComponent,
      
      
     },
  }

</script>


<template>
  
    <div>
        <DashboardComponent>
     
            <h2>Faça sua Reserva</h2>

        </DashboardComponent>
       
 

     
    </div>
  
</template>

<style lang="scss" src="./style.scss" scoped/>

