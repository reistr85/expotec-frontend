<template>
  <div class="body">
        <div class="photo">
            <h1 class="expotec_title">Expotec</h1>
            <img class="photo_login" src="@/assets/images/photo-register.png" alt="Foto de login">
        </div>

        <div class="login_section">
            <h2 class="title">Cadastro</h2>
            <h3 class="sub_title">Olá, <br> bem-vindo!</h3>
            <form class="form_login" v-on:submit.prevent="submit()" >
                <label class="label_form" for="name_uncadastered">Nome</label>
                <input class="input_form" id="name_uncadastered" type="text" placeholder="Nome completo">

                <label class="label_form" for="profile_uncadastered">Perfil</label>
                <div class="radio_flex">
                  <input v-on:click="toggleButtonServer()" class="radio_form" id="server" type="button" name="profile" value="Servidor">
                  <input v-on:click="toggleButtonStudent()" class="radio_form" id="student" type="button" name="profile" value="Estudante">
                  <input v-on:click="toggleButtonExternal()" class="radio_form" id="external" type="button" name="profile" value="externo">
                </div>
                <label class="label_form" for="email_uncadastred">E-mail</label>
                <input class="input_form"  type="email" id="email_uncadastred" placeholder="nome@email.com.br">

                <label class="label_form" for="password_uncadastred">Senha</label>
                <div class="input-group">
                    <input type="password" class="form-control input_form_eye" id="password_uncadastred" placeholder="Insira sua senha">
                    <div class="input-group-append">
                        <span v-on:click="togglePassword()" class="input-group-text"><img id="eye" src="@/assets/images/eye.svg" alt="Olho para visualizar a senha"></span>
                    </div>
                </div>

                <button type="submit" class="btn form_login_button">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    toggleButtonServer: () => {
      document.querySelector("#server").classList.add("selected");
      document.querySelector("#student").classList.remove("selected");
      document.querySelector("#external").classList.remove("selected");
    },
    toggleButtonStudent: () => {
      document.querySelector("#student").classList.add("selected");
      document.querySelector("#server").classList.remove("selected");
      document.querySelector("#external").classList.remove("selected");
    },
    toggleButtonExternal: () => {
      document.querySelector("#external").classList.add("selected");
      document.querySelector("#server").classList.remove("selected");
      document.querySelector("#student").classList.remove("selected");
    },
    togglePassword: () => {
      let input = document.querySelector("#password_uncadastred");
      if(input.getAttribute("type") == "password"){
          input.setAttribute("type", "text");
      }else{
          input.setAttribute("type", "password");
      }
    },
    submit: () => {
      alert("Cadastro realizado")
    }
  }
}
</script>

<style scoped>

  .body{
        height: 100%;
        display: flex;
  }
  .photo{ 
      width: 50%;
      height: 100%;
      
      position: fixed;
      left: 0%;       
      
      background-color: #00C689;
      border-radius: 0 50px 50px 0;
  }
  .expotec_title{
      margin: .3em 0 1em 2em;
      color: #FFF;
  }
  .photo_login{
      padding: 1em 2em 7em 7em;
      width: 100%;
      text-align: center;
  }
  .login_section{
      width: 50%;
      position: fixed;
      right: 0%;
      top: 13%;

      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .title, .sub_title, .form_login{
      width: 50%;
  }
  .title{
      text-align: center;
  }
  .form_login{
      margin-top: 1em;
      text-align: center;
  }
  .label_form{
      display: block;
      text-align: left;
      margin-bottom: 0;
  }
  .radio_flex{
    display: flex;
    justify-content: space-between;
  }
  .radio_form{
    width: 28%;
    padding: .3em;
    background-color: #FFF;
    margin: .5em 0 1em 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
  .selected{
    background-color: #00C689;
    color: #FFF;
  }
  .input_form{
      width: 100%;
      font-size: .9em;
      padding: .3em;
      border: .5px solid rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      margin-bottom: 1.5em;
  }
  .input_form_eye{
      font-size: .9em;
      padding: .3em;
      border: .5px solid rgba(0, 0, 0, 0.3);
      border-radius: 3px;
  }
  .input-group-text{
      cursor: pointer;
      height: 100%;
  }
  #eye{
      width: 18px;
  }
  .form_login_button{
      margin-top: 1.5em;
      padding: .2em;
      width: 100%;
      background-color: #00C689;
      color: #FFF;
  }
</style>