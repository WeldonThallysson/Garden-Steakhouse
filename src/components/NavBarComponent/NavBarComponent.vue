<script>
    export default{
        name: 'NavBarComponent',
    }
</script>

<template>

        <nav class="content__nav">
           <ul class="content__Reserves">
               <li>
                <div class="conteiner__style-image">
                 <img class="image__style"  src="../../assets/Imgs/LogoGarden.png"/>
                </div>
               </li>
               <li>
                <div class="content__item">
                   <router-link class="Links" to="/"><p>Sair  <fa icon="right-to-bracket" class="icon"/></p></router-link>
                </div>
               </li>
           </ul>   
        </nav>

</template>
<style lang="scss" src="./style.scss" scoped/>

