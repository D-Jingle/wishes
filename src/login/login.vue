

<template>
  <div>
    <div class="top_div">
      <div class="welcome"><img src="../../static/img/welcome.png"></div>
    </div>
    <div style="width: 100%;height: 200px;margin: auto auto;background: #ffffff;text-align: center;margin-top: -130px;border: 1px solid #e7e7e7">
      <div class="box" style="position: absolute; width: 100%; height: 96px; display: flex; justify-content: center">
        <div style="width: 97px;height: 96px;position: absolute">
          <div class="tou"></div>
          <div id="left_hand" class="initial_left_hand"></div>
          <div id="right_hand" class="initial_right_hand"></div>
        </div>
      </div>
      <p style="padding: 30px 0px 10px 0px;position: relative;">
        <span class="u_logo"></span>
        <input class="ipt" type="text" placeholder="请输入用户名" v-model="account">
      </p>
      <p style="position: relative;">
        <span class="p_logo"></span>
        <input id="password" class="ipt" type="password"  placeholder="请输入密码" v-model="password">
      </p>

      <div style="height: 50px;line-height: 50px;margin-top: 20px;border-top: 1px solid #e7e7e7;">
          <span>
               <a href="#" @click="submit()" style="background: #008ead;padding: 7px 10px;border-radius: 4px;border: 1px solid #1a7598;color: #FFF;font-weight: bold;">登陆</a>
           </span>
      </div>
    </div>
    <div style="position: fixed;bottom: 0px;text-align: center;width: 100%;">
    </div>
    <!--<div class="container">-->
      <!--<div class="text">用户名</div>-->
      <!--<input type="text" v-model="account">-->
      <!--<div class="gap"></div>-->
      <!--<div class="text">密码</div>-->
      <!--<input type="password" v-model="password">-->
      <!--<button @click="submit('/student')" class="btn">登陆</button>-->
      <!--<button @click="submit('/teacher')" class="btn">登陆教师端</button>-->
      <!--<button @click="submit('/admin')" class="btn">登陆管理端</button>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          account:'',
          password:'',
        }
      },
      created(){
        console.log(this.$store.state.count);
      },
      methods:{
        submit(add){
          // console.log(this.account);
          // console.log(this.password);
          // this.$router.push(add);
          axios({
            url:this.GLOBAL.BASE_URL + 'Home/user/login',
            data:{
              account:this.account,
              password:this.password
            },
            method:'post',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              localStorage.account = this.account;
              localStorage.password = this.password;
              if(response.data.data.admin == 3){
                this.$router.push('/student');
              } else if (response.data.data.admin == 2){
                this.$router.push('/teacher');
              } else if (response.data.data.admin == 1){
                this.$router.push('/admin');
              } else {
                alert("用户名或密码输入错误，请重新输入！");
              }
            } else {
              alert("用户名或密码输入错误，请重新输入！");
            }
          }).catch((error)=>{
            console.log(error);
            alert('登陆失败');
          })
        }
      },

    }
</script>

<style scoped>
  .pic img{
    width: 100%;
    height: 10rem;
  }
  .container{
    padding: 2rem;
  }
  .container input{

  }
  .gap{
    width: 100%;
    height: 1rem;
  }
  .text{
    display: inline;
  }
  .btn{
    display: inline;
    width: 80%;
    height: 2rem;
    background-color: dodgerblue;
    margin-top: 2rem;
  }
  .welcome img{
    width:100%;
    margin-top: 6rem
  }
  body{
    background: #ebebeb;
    font-family: "Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\9ED1\4F53",Arial,sans-serif;
    color: #222;
    font-size: 12px;
  }
  *{padding: 0px;margin: 0px;}
  .top_div{
    background: #008ead;
    width: 100%;
    height: 400px;
  }
  .ipt{
    border: 1px solid #d3d3d3;
    padding: 10px 10px;
    width: 80%;
    border-radius: 4px;
    padding-left: 35px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  }
  .ipt:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  .u_logo{
    background: url("http://peert37b7.bkt.clouddn.com/username.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 55%;
    left: 7.7%;

  }
  .p_logo{
    background: url("http://peert37b7.bkt.clouddn.com/password.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 33%;
    left: 7.7%;
  }
  a{
    text-decoration: none;
  }
  .tou{
    background: url("http://peert37b7.bkt.clouddn.com/tou.png") no-repeat;
    width: 100%;
    height: 92px;
    position: absolute;
    top: -90%;
  }
  .initial_left_hand{
    background: url("http://peert37b7.bkt.clouddn.com/hand.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -12px;
    left: -30px;
  }
  .initial_right_hand{
    background: url("http://peert37b7.bkt.clouddn.com/hand.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -12px;
    right: -30px;
  }

</style>
