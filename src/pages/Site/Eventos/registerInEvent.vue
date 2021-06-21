<template>
    <div class="box general">
        <div class="photo">
            <div class="images">
                <img src="@/assets/images/logo-expotec.svg" alt class="logo_expotec img-fluid" />
                <img class="photo_login" src="@/assets/images/photo-forgotPassword.png" alt="Foto da tela de recuperar acesso">
            </div>
        </div>

        <div class="login_section">
            <span class="span_path"><router-link class="link_event" to="/eventos">Eventos</router-link> / Inscrição</span>

            <h3 class="title">Inscrições abertas</h3>

            <ul class="list">
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
                <li class="list_item"><p> Lorem Ipsum dolor sit amet, consectetur elit. </p><button class="signup btn btn-primary btn-sm">Inscrever</button></li>
            </ul>

            <span class="cancel_register">Cancelar</span>
        </div>
    </div>
</template>

<script>

export default {
}
</script>
<style scoped>
    .box{
        /* display: none; */

        background-color: #fdfdfd;
        position: fixed;
        width: 80%;
        height: 70%;
        top: 15%;
        left: 10%;
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
        width: 30%;
        height: 70%;
        
        position: fixed;
        left: 10%;       
        
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
        left: 41%;
        right: 11%;
        top: 17%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .span_path{
        font-size: .75em;
        color: #555555;
    }

    .link_event{
        color: #555555;
        text-decoration: none;
    }

    .link_event:hover{ text-decoration: underline; }

    .title{
        padding: .5em 0;
    }

    .list{
        width: 100%;
        padding: 0;
        list-style: none;
    }

    .list_item{
        background-color: #ededed;
        padding: 0;
        padding-left: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 3px;
    }

    .list_item:nth-child(2n){ background-color: #fafafa; }

    .list_item > p{
        font-weight: bolder;
        color: #252525;
        padding: 0;
        margin: 0;
    }

    .signup{
        margin: .5em;
        padding: .35em 2.6em;
        border-radius: 15px;
        background-color: #0000aa;
    }

    .signup:hover{
        background-color: #000077;
    }

    .cancel_register{
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: .8em;
        color: #0000aa;
    }
    .cancel_register:hover{
        text-decoration: underline;
        cursor: pointer;
    }
</style>