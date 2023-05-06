

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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14192.333056297495!2d-49.6465272!3d-27.2165355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfb906b5fa64eb%3A0xca52fcba8e59225f!2sDigiliza!5e0!3m2!1spt-PT!2sbr!4v1683344528630!5m2!1spt-PT!2sbr"
                            title="YouTube video" allowfullscreen style="border-radius: 11px" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <h4 class="titulo__localizacao">Siga nas Redes Sociais</h4>
                    </div>
                    <div class="conteudo__redes-social">
                        <ul class="lista__social">
                            <li class="items__Lista"><a>Facebook</a></li>
                            <li class="items__Lista"><a>Instagram</a></li>
                            <li class="items__Lista"><a>Twitter</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </DashboardComponent>





    </div>
</template>

<style lang="scss" src="./style.scss" scoped/>