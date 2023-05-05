

<script>
 import http from '@/service/http.js';
 import {reactive} from 'vue';
 

 const user = reactive({
      email: '' ,
      password:'',
    });
 
 


  export default{
      name: 'SignIn',
      data() {
        return { 
          email: '',
          password: '',
       
        }
      },
      methods:{
      async Login(e){
                e.preventDefault();
                
                //aqui posso passar o name que crei para a rota ou o path que seria /home tbm pode ser o importante é que atráves do .use(router) no main posso usar o $router em qualquer arquivo dentro da tag script, to usando aqui para quando clicar empurrar para a rota home onde está o dashboard das reservas.
                try{
                  const {data} = await http.post('/auth',user);
                  console.log(data);
                }catch(error){
                      console.log(error?.response?.data);
                }
                this.$router.push({name: 'home'})
            },
            CriarConta(e){
                   e.preventDefault();

                   this.$router.push({name:'signup' });
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
                 <h2 class="titulo">Bem Vindo</h2>
                </div> 
                <form @submit="Login">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Digite seu Email:</label>
                      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <div id="emailHelp" class="form-text">caso tenha duvida use seu gmail ou hotmail criado!</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Digite sua Senha:</label>
                      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
                    </div>
                  
                    <button type="submit" class="btn btn-primary">Entrar</button>
                    <button type="submit" class="btn btn-secundary" @click="CriarConta">Ainda não tem uma conta? </button>
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
   


 
