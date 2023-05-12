<script>
import http from "@/service/http.js";

export default {
  name: "SignIn",
  data() {
    return {
      usuarios: [],
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async Login(e) {
      e.preventDefault();

      //aqui posso passar o name que crei para a rota ou o path que seria /home tbm pode ser o importante é que atráves do .use(router) no main posso usar o $router em qualquer arquivo dentro da tag script, to usando aqui para quando clicar empurrar para a rota home onde está o dashboard das reservas.
      const params = new URLSearchParams({
        email: this.email,
        password: this.password,
      });

      try {
        await http.get(`/register/auth?${params}`)
        .then((response) => {  

        console.log(response.data);
        this.usuarios.push(response.data);
        localStorage.setItem('@usuario', JSON.stringify(this.usuarios));
        this.$router.push({ name: "home" });})
   
     
      } catch (error) {
        console.log(error?.response?.data);
      }
    },
    CriarConta(e) {
      e.preventDefault();

      this.$router.push({ name: "signup" });
    },
  },
};
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
              <label for="exampleInputEmail1" class="form-label"
                >Digite seu Email:</label
              >
              <input
                required
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                caso tenha duvida use seu gmail ou hotmail criado!
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Digite sua Senha:</label
              >
              <input
              required
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">Entrar</button>
            <button type="submit" class="btn btn-secundary" @click="CriarConta">
              Ainda não tem uma conta?
            </button>
          </form>
        </div>
        <div class="content__Logo">
          <img
            class="logo__Img"
            src="../../assets/Imgs/LogoGarden.png"
            alt="imagem da logo de criar conta"
          />
          <p>O Melhor Restaurante da Cidade</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped />
