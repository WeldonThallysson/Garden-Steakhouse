<script>
// esse componente vai servir para as duas telas o home e o minhas reservas.
export default {
    name: 'SideBarComponent',
    data() {
    return {
        nome: '',
    }
   },
    mounted(){
        const data = JSON.parse(localStorage.getItem('@usuario'))
           data.map(item => {
                this.nome = item.name;
                console.log(item)
           })
   
  },

 
}


</script>
<template>
    <section>

        <div class="content__items">
            <div class="content__avatar">
                <img class="img" src="../../assets/Imgs/PerfilAvatar.png" alt="imagem de avatar fixo " />
                <p>Olá!</p>
                <p class="titulo__nome">{{nome}}</p>
            </div>
            <nav class="content__nav-menu">
                <ul class="list__style">
                    <li class="list__item-style">
                        <fa icon="home" color="white" /><router-link class="Links" to="/home">Home</router-link>
                    </li>
                    <li class="list__item-style">
                        <fa icon="list" color="white" /> <router-link class="Links" to="/minhasReservas">Minhas
                            Reservas</router-link>
                    </li>
                    <li class="list__item-style">
                        <fa icon="address-card" color="white" /> <router-link class="Links" to="/nossahistoria">Nossa
                            Historia</router-link>
                    </li>
                    <li class="list__item-style">
                        <fa icon="phone" color="white" /> <router-link class="Links" to="/contato">Contato</router-link>
                    </li>
                </ul>
            </nav>



        </div>



    </section>
</template>

<style lang="scss" src="./style.scss" scoped/>