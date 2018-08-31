<template>
  <div>
    <!--<div class="pic">-->
      <!--<img src="../../static/img/111.jpg" alt="">-->
    <!--</div>-->


    <div class="login">
      <div class="welcome"><img src="../../static/img/welcome.png"></div>
      <div class="login-form">
        <div class="login-inp"><label>登录</label><input type="text" placeholder="" v-model="account"></div>
        <div class="login-inp"><label>密码</label><input type="password" placeholder="" v-model="password"></div>
        <div class="login-inp"><div @click="submit()">立即登录</div></div>
      </div>
    </div>

    <!--<div class="container">-->
      <!--<div class="text">用户名</div>-->
      <!--<input type="text" v-model="account">-->
      <!--<div class="gap"></div>-->
      <!--<div class="text">密码</div>-->
      <!--<input type="password" v-model="password">-->
      <!--<button @click="submit()" class="btn">登陆</button>-->
      <!--&lt;!&ndash;<button @click="submit('/teacher')" class="btn">登陆教师端</button>&ndash;&gt;-->
      <!--&lt;!&ndash;<button @click="submit('/admin')" class="btn">登陆管理端</button>&ndash;&gt;-->
    <!--</div>-->

  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          account:'user',
          password:'1',
        }
      },
      created(){
        console.log(this.$store.state.count);
      },
      methods:{
        submit(add){
          console.log(this.account);
          console.log(this.password);
          // this.$router.push(add);
          axios({
            url:'/apis/Home/user/login',
            data:{
              account:this.account,
              password:this.password
            },
            method:'post',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
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


  .login{width:100%;height:100%;background:url('../../static/img/login-bg.png') no-repeat;background-size:cover;position:fixed;z-index:-10;}
  .welcome{width:100%;margin:25% 0;}
  .welcome img{width:100%;}
  .login-inp{margin:0 30px 15px 30px;border:1px solid #fff;border-radius:25px;}
  .login-inp label{width:4em;text-align:center;display:inline-block;color:#fff;}
  .login-inp input{line-height:40px;color:#fff;background-color:transparent;border:none;outline: none;}
  .login-inp div{display:block;width:100%;text-align:center;line-height:40px;color:#fff;font-size:16px;letter-spacing:5px;}
  .login-txt{text-align:center;color:#fff;}
  .login-txt a{color:#fff;padding:0 5px;}

</style>
