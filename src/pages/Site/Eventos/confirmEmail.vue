<template>
    <div class="box">
        <div class="photo">
            <div class="images">
                <img src="@/assets/images/logo-expotec.svg" alt class="logo_expotec img-fluid" />
                <img class="photo_login" src="@/assets/images/photo-forgotPassword.png" alt="Foto da tela de recuperar acesso">
            </div>
        </div>

        <div class="login_section">

            <h3 class="title">Informe seu e-mail cadastrado para confirmar a inscrição</h3>

            <form class="form_email">
                <label class="label_email" for="email">E-mail</label>
                <input class="input_email form-control" type="email" id="email">
                <button class="button_email btn btn-primary">Confirmar Inscrição</button>
            </form>

            <span class="cancel_email">Cancelar</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .box{
        display: none;

        background-color: #fdfdfd;
        position: fixed;
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        border-radius: 12px;
        box-shadow: 3px 3px 20px #333;
    }

    .images{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .logo_expotec {
        padding-left: 3em;
        width: 200px;
    }

    .photo{ 
        width: 25%;
        height: 60%;
        
        position: fixed;

        left: 20%; 

        
        background-color: #FEA31B;
        border-radius: 12px 50px 50px 12px;
    }

    .photo_login{
        padding-left: 1em;
        width: 80%;
        text-align: center;
    }



    .login_section{
        position: fixed;
        left: 48%;
        right: 11%;
        top: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 30%;
        height: 40%;
    }

    .form_email{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .label_email{
        margin-top: 1.7em;
    }
    .input_email{
        margin: .2em 0 2em 0;
    }

    .cancel_email{
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: .8em;
        color: #0000aa;
    }
    .cancel_email:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    .button_email{
        background-color: #f9ac38;
    }
</style>