<template>
    <div id="app">
        <header>
          <nav>
            <ul>
              <li class="nav-item">
<!--                  <router-link to="/">-->
                  <router-link  active-class="iChanged" class="nav-link" :to="{name:'Home'}" exact>
                      <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo"> Build-a-Bot
                  </router-link>
              </li>
                <li class="nav-item"  >
                    <router-link  active-class="iChanged" class="nav-link" :to="{name:'Build'}"
                                  exact>
                      Build
                    </router-link>
                </li>
                <li class="nav-item cart" >
                    <router-link   class="nav-link" to="/cart" exact><!--no url link so remove ":" -  binding -->
                        Cart
                    </router-link>
                    <div class="cart-items" >
                        {{cart.length}}
                    </div>
                </li>
            </ul>
          </nav>
        </header>
        <div class="container">
            <aside class="aside">
                <router-view name="sidebar"/>
            </aside>
                <main>
                    <!--            <RobotBuilder/>-->
                    <router-view/>
                </main>
        </div>

    </div>
</template>

<script>
// import HomePage from './home/HomePage.vue'
// import RobotBuilder from "@/build/RobotBuilder";

export default {
  name: 'app',
    computed:{
      cart(){
          return this.$store.state.robots.cart;
          //added .robots because robots is the name of the module in store/index.js
      },
    },
  // components: {
  //   RobotBuilder
  // }
}
</script>
<style>
  body{
    background: linear-gradient(to bottom, #555,#999) fixed;
    /*background-attachment: fixed;*/
  }
</style>
<style scoped>
  /*.content  .robot-name{color:red;*/
  /*border:2px solid blue;}*/


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
  main{
    /*margin:0 auto;*/
    padding:30px;
    background-color:white;
    /*width:1024px;*/
      width:964px;
    min-height:300px;

  }
  header{
    background-color:#999;
    /*width:1048px;*/
      width:1148px;
    margin:0 auto;
  }
  ul{
    pading:3px;
    display:flex;
  }
  .nav-item{
    display:inline-block;
    padding:5px 10px;
    font-size:22px;
    border-right:1px solid #abb;
  }
  .nav-item.cart{
      position: relative;
      margin-left: auto;
      border-right: none;
  }
  .logo{
    vertical-align: middle;
    height:30px;
  }
    .nav-link{
        text-decoration: none;
        color: inherit;
    }
    /*.router-link-active{*/
  .iChanged{
        color:tomato;
    }
/*    "never used" warning but used by router */
    .container{
        display:flex;
        margin:10px auto 0 auto;
        justify-content: center;
    }
    .aside {
        padding:30px;
        background-color: #aaa;
        width:100px;
        min-height:300px;}
    .cart-items{
        position:absolute;
        top: -5px;
        right: -9px;
        font-size: 18px;
        width: 20px;
        text-align: center;
        display: inline-block;
        border-radius:100px;
        background-color:mediumseagreen;
    }
</style>
