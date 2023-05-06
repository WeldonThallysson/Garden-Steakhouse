



<script>
//Para importar um componente usar import dentro do script e logo após registrar dentro de components o component importado, depois é só usar no template tranquilo.
import DashboardComponent from '../../components/DashboardComponent.vue';
import MesadeReservasComponent from '../../components/MesadeReservas/MesadeReservasComponent.vue';
export default {
    components: {
        DashboardComponent,
        MesadeReservasComponent,


    },
}

</script>


<template>
    <div>
        <DashboardComponent>

            <MesadeReservasComponent />
        </DashboardComponent>




    </div>
</template>

<style lang="scss" src="./style.scss" scoped/>

