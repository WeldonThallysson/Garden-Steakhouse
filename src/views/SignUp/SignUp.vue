

<script>
 import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      usuarios: [],
      novoUsuario:{
       nome: "",
       email:"",
       password:"",
      }}
  },
  methods: {
    async criarConta(e) {
      e.preventDefault();
        
     
       await axios.post('http://127.0.0.1:8000/api/register',this.novoUsuario)
      .then(response => {
          console.log(response.data)
          this.usuarios.push(response.data)

      }).catch(error => {
        console.log(error);
      })
      
        
    },
    redirecionarLogin(e){
      e.preventDefault();
      
      this.$router.push({ name: 'signin' })
    }
  }
}

</script>

<template>
  <section class="main">
    <div class="login">
      <div class="content__login">
        <div class="content__Form">
          <div class="content__Title-Form">
            <h2 class="titulo">Criar Conta</h2>
          </div>
          <form @submit="criarConta">
            <div class="mb-3">

              <label for="exampleInputEmail1" class="form-label">Digite seu Nome:</label>
              <input type="text" class="form-control" v-model="novoUsuario.nome" id="exampleInputEmail2" aria-describedby="emailHelp">
              <label for="exampleInputEmail2" class="form-label">Digite seu Email:</label>
              <input type="email" class="form-control" v-model="novoUsuario.email" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Caso tenha duvida use seu gmail ou hotmail pessoal!</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Digite sua Senha:</label>
              <input type="password" class="form-control" v-model="novoUsuario.password" id="exampleInputPassword1">
            </div>

            <button type="submit" class="btn btn-primary">Criar Conta</button>
            <button type="submit" class="btn btn-secundary" @click="redirecionarLogin">já tem uma conta? faça o login
              !</button>
          </form>
        </div>
        <div class="content__Logo">
          <img class="logo__Img" src='../../assets/Imgs/LogoGarden.png' />
          <p>O Melhor Restaurante da Cidade</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>
