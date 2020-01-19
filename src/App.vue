<template>
    <div id="app">
        <header>
          <nav>
            <ul>
              <li class="nav-item">
<!--                  <router-link to="/">-->
                  <router-link class="nav-link" :to="{name:'Home'}" exact>
                      <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo"> Build-a-Bot
                  </router-link>


              </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'Build'}" exact>
                      Build
                    </router-link>


                </li>
            </ul>
          </nav>
        </header>

        <main>

<!--            <RobotBuilder/>-->
            <router-view/>
        </main>

    </div>
</template>

<script>
// import HomePage from './home/HomePage.vue'
// import RobotBuilder from "@/build/RobotBuilder";

export default {
  name: 'app',
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
    margin:0 auto;
    padding:30px;
    background-color:white;
    width:1024px;
    min-height:300px;

  }
  header{
    background-color:#999;
    width:1048px;
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
  .logo{
    vertical-align:middle;
    height:30px;
  }
    .nav-link{
        text-decoration:none;
        color:inherit;
    }
    .router-link-active{
        color:white;
    }
</style>
