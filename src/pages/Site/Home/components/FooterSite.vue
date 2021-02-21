<template>
    
  <!-- Start your project here-->  
  <footer class=" text-center container">
      <div class="row">
           <div class="col-md-5">
                      <nav class="navbar navbar-expand-lg  ">
                        <a class="navbar-brand" href="#">
                            </a>
                            
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav mr-auto text-center">
                                
                                <li class="nav-item active">
                                    <a class="nav-link " href="#">Sobre
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Eventos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Certificados</a>
                                </li>
                                </ul>   
                            
                                
                            </div>
                        </nav>
                  </div>
                 
                  <div class="col-md-2">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/images/logo-expotec.svg" alt="" class="img-fluid">
                        </a>
                  </div>
                  <div class="col-md-4">
                      <nav class="navbar navbar-expand-lg  ">
                        <a class="navbar-brand" href="#">
                            </a>
                            
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav mr-auto text-center">
                                
                                <li class="nav-item ">
                                    <a class="nav-link " href="#">Parceiros
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contato</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Notícias</a>
                                </li>
                                </ul>   
                            
                                
                            </div>
                        </nav>
                  </div>
          
          <div class="col-md-1">
              <span id="seta-roxa">
                  <i class="fas fa-angle-up"></i>
              </span>
          </div>
      </div>
    

  </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../style.scss';

footer{
    background-color: white;
    margin-top: 80px;

    .navbar{
        padding: 20px 100px;
     
    }
    .nav-link{
        color:grey;
        font-weight: bold;
    }
    .active{
        color:black
    }
    .nav-link:hover{
        color:black
    }

    #seta-roxa{
        background-color: $roxo-color;
        color: white;
        font-weight: bold;
        border-radius: 4px;
        width: 40px;
        height: 40px;
        padding: 15px 15px 5px 15px;

        i{
            font-size: 30px;
        }
    }
}
</style>

