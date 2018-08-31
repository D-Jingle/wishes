<template>
  <div class="box" :item="item">
    <div class="Mcontent">
      {{item.content}}
    </div>
    <div class="Mcontainer">
      <div class="Mleft">发布人</div>
      <div class="Mright">{{item.guy}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">{{item.phone}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">认领人</div>
      <div class="Mright">
        {{userinfo.name}}
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">
        <!--<input type="text" placeholder="点击填写" id="phone" v-model="phone" v-if="isPhone" >-->
        <div>{{phone}}</div>
      </div>
    </div>
    <div class="Mfooter" @click="submit">
      <button>认   领</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "wishdetail",
      data(){
        return{
          isPhone:false,
          wishId:'',
          item:{},
          phone:'',
          userinfo:{}
        }
      },
      methods:{
        // 获取心愿信息
        getWishDetail(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/info?id=' + this.wishId,
            method:'get'
          }).then((response)=>{
            if(response.data.code == 0) {
              console.log(response);
              this.item = response.data.data;
              console.log(this.item);
            } else {
              alert("fail");
            }
          }).catch((response)=>{
            console.log(response);
          })
        },
        // 获取学生信息
        getUserinfo(){
          console.log('aaa');
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/user/stu_info',
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.userinfo = response.data.data;
              this.phone = this.userinfo.phone;
              console.log(this.userinfo);
            } else {
              alert("fail");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },
        // 接受心愿
        submit(){
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/wish/accept',
            method:'post',
            data:{
              id: this.wishId,
              guy: this.userinfo.name,
              phone: this.phone
            },
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              alert('接受成功！');
              this.$router.go(-1);
            } else {
              alert('接受失败');
            }
          }).catch((response)=>{
            console.log(response);
          })
        }
      },
      created(){
        if(this.phone == ''){
          this.isPhone = false;
        }
        this.wishId = this.$route.params.Id;
        console.log(this.wishId);
        this.getWishDetail();
        this.getUserinfo();
      }
    }
</script>

<style scoped>
#phone,#guy{
  text-align: right;
}
</style>
