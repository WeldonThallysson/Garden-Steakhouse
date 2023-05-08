<script>
export default {

  name: 'CardsReservasComponent',

  data() {
    return {
      nome: 'Roberto',
      mesa: '1',
      data: '22/05/2023',
      horario_reservado: '19:00',
      descricao: 'em frente a Lareira'

    }
  },

}

</script>

<template>
  <section>
    <div class="content__titulo-principal">

      <h2 class="titulo__principal">Minhas Reservas</h2>

    </div>
    <ul class="conteudo__principal" >
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">{{nome}} </p>
          <p class="titulo__Mesa">Mesa {{mesa}}</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para {{data}}</span>
          <p class="card-text"> Mesa reservada para as {{horario_reservado}}h {{ descricao }}! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 2</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 3</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 4</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 5</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 6</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 7</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>
      <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <p class="titulo__header">Nome do Cliente </p>
          <p class="titulo__Mesa">Mesa 8</p>
        </div>
        <div class="card-body">
          <span class="card-title">Reservada para 22/05/2023</span>
          <p class="card-text"> Mesa reservada para as 19:30h em frente a Lareira! </p>
        </div>
      </li>


    </ul>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>