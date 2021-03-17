<template>
    <div class="body">
        <div class="photo">
            <img class="expotec_logo" src="@/assets/images/logo-expotec.svg" alt="Logo da expotec">
            <img class="photo_login" src="@/assets/images/photo-login.png" alt="Foto de login">
        </div>

        <div class="login_section">
            <h2 class="title">Login</h2>
            <h3 class="sub_title">Olá, <br> bem-vindo de volta!</h3>
            <form class="form_login" v-on:submit.prevent="submit()">
                <label class="label_form" for="email_cadastred">E-mail</label>
                <input class="input_form"  type="email" id="email_cadastred" placeholder="nome@email.com.br">

                <label class="label_form" for="password_cadastred">Senha</label>
                <div class="input-group">
                    <input type="password" class="form-control input_form_eye" id="password_cadastred" placeholder="Insira sua senha">
                    <div class="input-group-append">
                        <span v-on:click="togglePassword()" class="input-group-text"><img id="eye" src="@/assets/images/eye.svg" alt="Olho para visualizar a senha"></span>
                    </div>
                </div>
                <span  class="span_forgot_password"><router-link to="/recuperarSenha">Esqueceu a senha?</router-link></span>

                <button type="submit" class="btn form_login_button">Entrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: { 
        togglePassword: () => {
            let input = document.querySelector("#password_cadastred");
            if(input.getAttribute("type") == "password"){
                input.setAttribute("type", "text");
            }else{
                input.setAttribute("type", "password");
            }
        },
        submit: () => {
            alert("Login efetuado");
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
        
        background-color: #2A327D;
        border-radius: 0 50px 50px 0;
    }
    .expotec_logo{
        margin: 1em 0 1em 4em;
        width: 150px;
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
        top: 20%;

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
    .sub_title{
        margin: 1em 0 0 0;
    }
    .form_login{
        margin-top: 1em;
        text-align: center;
    }
    .label_form{
        font-size: 1.2em;
        display: block;
        text-align: left;
        margin-bottom: .2em;
    }
    .input_form, .input_form_eye{
        font-size: .9em;
        padding: .5em;
        border: .5px solid rgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }
    .input_form{
        width: 100%;
    }
    .input-group-text{
        cursor: pointer;
        height: 100%;
    }
    #eye{
        width: 18px;
    }
    #email_cadastred{
        margin-bottom: 1em;
    }
    .span_forgot_password{
        display: block;
        font-size: .8em;
        text-align: right;
        margin-top: .3em;
    }
    .span_forgot_password a{
        color: #2A327D;
    }
    .form_login_button{
        margin-top: 1em;
        padding: .4em;
        width: 100%;
        background-color: #2A327D;
        color: #FFF;
        text-transform: capitalize;
        font-size: 1em;
    }
</style>