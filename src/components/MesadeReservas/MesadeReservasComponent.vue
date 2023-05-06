<script>
export default {

   name: 'MesadeReservasComponent',
   data() {
      return {
         ativarModal: false,
      }
   },

   methods: {
      abrirModal() {

         this.ativarModal = true;

      },
      cadastrarReserva() {


         alert('Reserva cadastrada');

      }
   }

}

</script>

<template v-if="ativarmodal === false">
   <section>

      <div class="content__titulo-principal">
         <h2 class="titulo__principal">Faça a sua Reserva!</h2>
      </div>


      <div class="conteiner__reservas">
         <ul class="lista__reservas">
            <button style="border: none; background:none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
               <li class="lista__items" @click="abrirModal()">

                  <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
                  <p class="mesa_titulo">Mesa 1</p>


               </li>
            </button>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 2</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 3</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 4</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 5</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 6</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 7</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 8</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 9</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 10</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 11</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 12</p>
            </li>

            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 13</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 14</p>
            </li>
            <li class="lista__items">
               <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
               <p class="mesa_titulo">Mesa 15</p>
            </li>
         </ul>

      </div>

      <div class="conteiner__modal" v-if="ativarModal === true">
         <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Mesa 1</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <img src="../../assets/Imgs/Mesas/Mesa_Saguao.jpg" class="card-img-top" alt="Imagem da mesa no modal" />


                  <div class="modal-body">
                     <div class="card-body">

                        <p class="card-text">Descrição: Mesa perto da lareira com vista para o saguão.</p>

                     </div>
                     <form @submit="cadastrarReserva">
                        <div class="row mb-3">
                           <label for="inputEmail3" class="col-sm-2 col-form-label">Nome</label>
                           <div class="col-sm-10">
                              <input type="text" required class="form-control" id="inputEmail3">
                           </div>
                        </div>
                        <div class="row mb-3">
                           <label for="inputEmail3" class="col-sm-2 col-form-label">Data</label>
                           <div class="col-sm-10">
                              <input type="date" required class="form-control" id="inputEmail3">
                           </div>
                        </div>
                        <div class="row mb-3">
                           <select class="form-select" required aria-label="Default select example">
                              <option selected required>Horário Reserva</option>
                              <option value="1">18:00h</option>
                              <option value="2">19:00h</option>
                              <option value="3">20:00h</option>
                              <option value="4">20:30h</option>
                              <option value="5">21:00h</option>
                              <option value="6">21:30h</option>
                              <option value="7">22:00h</option>
                              <option value="8">22:30h</option>
                              <option value="9">23:00h</option>
                              <option value="10">23:30h</option>
                           </select>


                        </div>

                        <button type="submit" class="btn btn-primary">
                           Reservar !
                        </button>

                     </form>
                  </div>
               </div>
            </div>
         </div>

      </div>

   </section>
</template>



<style lang="scss" src="./style.scss" scoped/>