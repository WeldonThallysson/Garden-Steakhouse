<script>
export default {
    name: 'NavBarComponent',
}
</script>

<template>
    <nav class="content__nav">
        <ul class="content__Reserves">
            <li class="disabled">
                <div class="conteiner__style-image">
                    <img class="image__style" src="../../assets/Imgs/LogoGarden.png" />
                </div>
            </li>
            <li class="display__item">
                <div class="content__item">
                    <router-link class="Links" to="/home">Home</router-link>
                </div>
            </li>
            <li class="display__item">
                <div class="content__item">
                    <router-link class="Links" to="/minhasReservas">Reservas</router-link>
                </div>
            </li>
            <li class="display__item">
                <div class="content__item">
                    <router-link class="Links" to="/nossahistoria">
               Historia
                    </router-link>
                </div>
            </li >
            <li class="display__item">
                <div class="content__item">
                    <router-link class="Links" to="/contato">
                       Contato
                    </router-link>
                </div>
            </li>

            <li >
                <div class="content__item">
                    <router-link class="Links" to="/">
                           <span class="text__fullresolution">Sair</span>
                            <fa icon="right-to-bracket" class="icon" />
                      
                    </router-link>
                </div>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" src="./style.scss" scoped/>

