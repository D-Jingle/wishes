<template>
  <div>
    <div class="pic">
      <img src="../../static/img/111.jpg" alt="">
    </div>
    <div class="container">
      <div class="text">用户名</div>
      <input type="text" v-model="account">
      <div class="gap"></div>
      <div class="text">密码</div>
      <input type="password" v-model="password">
      <button @click="submit('/student')" class="btn">登陆学生端</button>
      <button @click="submit('/teacher')" class="btn">登陆教师端</button>
      <button @click="submit('/admin')" class="btn">登陆管理端</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return {
          account:'',
          password:''
        }
      },
      methods:{
        submit(add){
          console.log(this.account);
          console.log(this.password);
          this.$router.push(add);
          // axios({
          //   url:'https://api.myjson.com/bins/1a85wg',
          //   data:{
          //     account:this.account,
          //     password:this.password
          //   },
          //   method:'post',
          //   timeout:1000
          // }).then((response)=>{
          //   console.log('aaa');
          //   console.log(response);
          //   if(response){
          //     this.$router.push('/student');
          //   } else if (response){
          //     this.$router.push('/teacher');
          //   } else if (response){
          //     this.$router.push('/teacher');
          //   } else if (response){
          //     alert("用户名或密码输入错误，请重新输入！");
          //   }
          // }).catch((error)=>{
          //   console.log(error);
          //   alert('登陆失败');
          // })
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

</style>
