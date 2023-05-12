

<script>
 import http from '../../service/http';
export default {
  name: 'SignUp',
  data() {
    return {
      usuarios: [],
       nome: "",
       email:"",
       password:"",
      }
  },
  methods: {
    async criarConta(e) {
      e.preventDefault();
        
       console.log(this.nome);
       console.log(this.email);
       console.log(this.password);

       await http.post('/register',{name: this.nome, email: this.email, password: this.password})
      .then(response => {
          console.log(response.data)
          this.usuarios.push(response.data)
          localStorage.setItem('@usuario',JSON.stringify(this.usuarios))
          this.$router.push({name: 'home'})
    
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
              <input type="text" required class="form-control" v-model="nome" id="exampleInputEmail2" aria-describedby="emailHelp">
              <label for="exampleInputEmail2" class="form-label">Digite seu Email:</label>
              <input type="email" required class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Caso tenha duvida use seu gmail ou hotmail pessoal!</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Digite sua Senha:</label>
              <input type="password" required class="form-control" v-model="password" id="exampleInputPassword1">
            </div>

            <button type="submit" class="btn btn-primary">Criar Conta</button>
            <button type="submit" class="btn btn-secundary" @click="redirecionarLogin">já tem uma conta? faça o login
              !</button>
          </form>
        </div>
        <div class="content__Logo">
          <img class="logo__Img" src='../../assets/Imgs/LogoGarden.png' alt="imagem da logo de criar conta"/>
          <p>O Melhor Restaurante da Cidade</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>
