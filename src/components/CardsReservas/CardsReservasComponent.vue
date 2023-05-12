<script>
  import http from '../../service/http';
export default {
  
  name: 'CardsReservasComponent',

  data() {
    return {
      nome: '',
      mesa: '1',
      data: '',
      dataformatada:'',
      horario_reservado: '19:00',
      descricao: 'em frente a Lareira',
      dados: '',
      id: ''


    }
  },
  methods:{
    async excluirReserva(id){

       await http.delete(`/services/${id}`).then(() => {
        location.reload();
       })
  }
  },
 async mounted(){

  // aqui ele vai pegar o id que ta salvo quando loga do usuario e mandar como params para a api resgatar apenas as reservas desse id
   const id = JSON.parse(localStorage.getItem('@usuario'))
    id.map(item => {
      this.id = item.idUnico,
      this.nome = item.name
    }) 
   
    
    const params = new URLSearchParams({
         idUnico: this.idUnico
      });
   
  await http.get(`/services/${params}`).then((response) => {
    
      this.dados = response.data;  
      console.log(this.dados)
 
      this.dados.map((item) => {
          this.data = item.data_format;
      })

      

  })

  
  }
 

}

</script>

<template>
  <section>
    <div class="content__titulo-principal">

      <h2 class="titulo__principal">Minhas Reservas</h2>

    </div>
    <div class="conteudo__principal"> 
   

        <div class="nenhuma-reserva " v-if="dados.length === 0">

          <h2 class="titulo__principal">Nenhuma Reserva Encontrada...</h2>
    
        </div>

        <ul class="" v-for="card in dados" :key="card.id">
          <li class="card text-bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
              <p class="titulo__header">{{nome}} </p>
              <p class="titulo__Mesa">Mesa {{card.mesa}}</p>
              <button class="btn_excluir" @click="excluirReserva(card._id)"><fa icon="close"></fa></button>
            </div>
           
            <div class="card-body">  
              <span class="card-title"> Horário da Reserva para as {{card.horas}}h</span>
              <span class="card-title"> Reservada para {{data}}</span>
            </div>
             
          </li>
        
    
    
        </ul>
    



  </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>