<template>
  <div class="box">
    <div class="Mcontainer">
      <div class="Mleft">姓名</div>
      <div class="Mright">{{userinfo.name}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">工号</div>
      <div class="Mright">{{userinfo.acc}}</div>
    </div>
    <!--<div class="Mcontainer">-->
      <!--<div class="Mleft">时间</div>-->
      <!--<div class="Mright">待开发</div>-->
    <!--</div>-->
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright" v-if="userinfo.phone != null">{{userinfo.phone}}</div>
      <div class="Mright" v-if="userinfo.phone == null">
        <input type="text" placeholder="请输入电话号" v-model="phone" style="text-align: right">
      </div>
    </div>
    <div class="Mfooter" @click="submit" v-if="userinfo.phone == null">
      <button @click="submit">提交联系方式</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info",
    data(){
      return{
        userinfo:{},
        phone:'',
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        axios({
          url: this.GLOBAL.BASE_URL + 'apis/Home/user/tea_phone',
        }).then((response)=>{
          console.log(response);
          if(response.data.code ==0){
            this.userinfo = response.data.data;
            console.log(this.userinfo);
          } else {
            alert('fail');
          }
        }).catch((error)=>{
          console.log(error);
        })
      },
      // 提交电话
      submit(){
        if(this.phone.length == 11){
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/user/alter',
            data:{
              account:this.userinfo.acc,
              phone:this.phone
            },
            method:'post',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              alert('提交成功');
            } else {
              alert('提交失败');
            }
          }).catch((error)=>{
            console.log(error);
          })
        } else {
          alert('请输入正确的手机号');
        }
      }
    }
  }
</script>

<style scoped>

</style>
