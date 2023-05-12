<script>
import http from '../../service/http'
export default {

   name: 'MesadeReservasComponent',
   data() {
      return {
         nomeClienteUnico:"",
         mesa:'',
         data: '',
         horario:'Horário Reserva',
         mesas: '',
         titulo: '',
         
      }
   },
  async mounted(){
   // aqui ele exibe as mesas com o nome dela e também o id, e também fiz uma requisição ao id do usuario e coloquei como base para a quando quiser pegar as mesas colocar sempre nesse id.
           
         const userId = JSON.parse(localStorage.getItem('@usuario'))
             userId.map(item => {
               this.idcliente = item.id
               console.log(this.idcliente)
             });
             
         await http.get('/mesas').then((response) => {
            console.log(response.data)
             this.mesa = response.data
         
         
         });  
   }, 
   methods: {
      enviarMesa(id){
         this.mesas = id
      },

     
     async cadastrarReserva(e) {
           e.preventDefault();
           

           console.log(this.mesas);
         try{ 
            
         const dados = {idUnico: this.idcliente, mesa: this.mesas, horas:this.horario, data_format:this.data}

          await http.post('/services', dados)
          .then((response) => {
            console.log(response.data);
           alert('reserva feita com sucesso!');   
         }); 

      }catch(error){
         console.log(error) 
      }finally{
         this.data = ''
         this.horario = ''
      }


      },
     nome({titulo}){

         this.titulo = titulo;
      }
   }

}

</script>

<template>
   <section class="section__cards">

      <div class="content__titulo-principal">
         <h2 class="titulo__principal">Faça a sua Reserva!</h2>
      </div>



      <div class="lista__reservas">
         <ul class="" v-for="mesa in mesa" :key="mesa.id">
            <button @click="enviarMesa(mesa.id)" style="border: none; background:none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
               <li class="lista__items" >

                  <img class="mesa_icone" src="../../assets/Imgs/MesaIcon.png" alt="icone da mesa" />
              
                  <p class="mesa_titulo">{{mesa.mesas}}</p>
           
               </li>
            </button>
           
            <div class="conteiner__modal">
               <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Selecione um Horário</h1>
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
      
         </ul>
      
      </div>

        


   </section>
</template>



<style lang="scss" src="./style.scss" scoped/>