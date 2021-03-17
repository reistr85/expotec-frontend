<template>
    <div class="body">
        <div class="photo">
            <img class="expotec_logo" src="@/assets/images/logo-expotec.svg" alt="Logo da expotec">
            <img class="photo_login" src="@/assets/images/photo-forgotPassword.png" alt="Foto da tela de recuperar acesso">
        </div>

        <div class="login_section">
            <h2 class="title">Recuperar senha</h2>
            <h3 class="sub_title">Informe seu e-mail cadastrado para recuperar sua senha.</h3>
            <form class="form_login" v-on:submit.prevent="submit()">
                <label class="label_form" for="email_cadastred">E-mail</label>
                <input class="input_form"  type="email" id="email_cadastred" placeholder="nome@email.com.br">

                <button type="submit" class="btn form_forgot_password">Recuperar senha</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        submit: () => {
            alert("Uma nova senha foi enviada para seu e-mail");
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
        
        background-color: #FEA31B;
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
        top: 25%;

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
        font-size: 1.35em;
        text-align: justify;
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
    .input_form{
        width: 100%;
        font-size: .9em;
        padding: .5em;
        border: .5px solid rgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }
    #email_cadastred{
        margin-bottom: 1em;
    }

    .form_forgot_password{
        margin-top: 1em;
        padding: .4em;
        width: 100%;
        background-color: #FEA31B;
        color: #FFF;
        text-transform: capitalize;
        font-size: 1em;
    }
</style>