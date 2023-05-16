

<script>
import DashboardComponent from '../../components/DashboardComponent.vue';

export default {
    name: "Contato",
    components: {
        DashboardComponent,

    }

}

</script>

<template>
    <div class="main">

        <DashboardComponent>
            <div>
                <div class="content__titulo-principal">
                    <h2>Nosso Contato </h2>
                </div>
                <div class="conteudo__contato">
                    <h4 class="titulo__localizacao">Nossa Localização</h4>
                    <div class="ratio ratio-21x9">


                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.3958404301!2d-46.92497434052418!3d-23.68143453128611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-PT!2sbr!4v1684253286781!5m2!1spt-PT!2sbr"
                            title="YouTube video" allowfullscreen style="border-radius: 11px" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                          
                    </div>
                    <div>
                        <h4 class="titulo__localizacao">Siga nas Redes Sociais</h4>
                    </div>
                    <div class="conteudo__redes-social">
                        <ul class="lista__social">
                            <li class="items__Lista"><img src="../../assets/Imgs/Icones/facebook.png" alt="icone facebook"
                                    width="22" /><a class="texto__link" href="">GardenSteakhousePlus </a></li>
                            <li class="items__Lista"><img src="../../assets/Imgs/Icones/instagram.png" alt="icone instagram"
                                    width="22" /><a class="texto__link" href="">@GardenSteakHouse </a></li>
                            <li class="items__Lista"><img src="../../assets/Imgs/Icones/twitter.png" alt="icone twitter"
                                    width="22" /><a class="texto__link" href="">@SteakhouseGarden </a></li>
                        </ul>

                    </div>
                    <div>
                        <h4 class="titulo__localizacao">Entre em Contato</h4>
                    </div>

                    <div class="conteudo__redes-social">
                        <ul class="lista__social">
                            <li class="items__Lista Contato"><img src="../../assets/Imgs/Icones/gmail.png" alt="icone gmail"
                                    width="22" /><a class="texto__link"
                                    href="mailto:weldonthallysson.dev@gmail.com">gardensteakhouse@gmail.com </a></li>
                            <li class="items__Lista Contato"><img src="../../assets/Imgs/Icones/whatsapp.png"
                                    alt="icone instagram" width="22" /><a class="texto__link"
                                    href="https://wa.me/48998289858">(48) 99828-9858</a></li>

                        </ul>

                    </div>


                </div>
            </div>
        </DashboardComponent>





</div></template>

<style lang="scss" src="./style.scss" scoped/>