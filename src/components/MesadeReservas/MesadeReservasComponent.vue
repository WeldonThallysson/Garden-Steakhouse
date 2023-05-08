<script>
export default {

   name: 'MesadeReservasComponent',
   data() {
      return {
         ativarModal: false,
         data: '',
         horario:'Horário Reserva',
         
      }
   },

   methods: {
      cadastrarReserva(e) {
         e.preventDefault();
         console.log('horario '+ this.horario);
         console.log('data '+ this.data);
         alert('Reserva cadastrada');

      }
   }

}

</script>

<template>
   <section class="section__cards">

      <div class="content__titulo-principal">
         <h2 class="titulo__principal">Faça a sua Reserva!</h2>
      </div>


      <div class="conteiner__reservas">
         <ul class="lista__reservas">
            <button style="border: none; background:none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
               <li class="lista__items">

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

      <div class="conteiner__modal" >
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
                  </div>
                     <form @submit="cadastrarReserva">
                       
                        <div class="row mb-3">
                           <label for="inputEmail3" class="col-sm-2 col-form-label">Data</label>
                           <div class="col-sm-10">
                              <input type="date" v-model="data" required class="form-control" id="inputEmail3">
                           </div>
                        </div>
                        <div class="row mb-3">
                           <select class="form-select" required aria-label="Default select example" v-model="horario">
                              <option selected required>Horário Reserva</option>
                              <option value="18:00">18:00</option>
                              <option value="19:00">19:00h</option>
                              <option value="19:00">19:30h</option>
                              <option value="19:00">20:00h</option>
                              <option value="19:00">20:30h</option>
                              <option value="21:00">21:00h</option>
                              <option value="21:30">21:30h</option>
                              <option value="22:00">22:00h</option>
                              <option value="22:30">22:30h</option>
                              <option value="23:00">23:00h</option>
                              <option value="23:30">23:30h</option>
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