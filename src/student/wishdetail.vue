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
        {{guy}}
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">
        <input type="text" placeholder="点击填写" id="phone" v-model="phone" v-if="phone == '' ">
        <div v-if="phone != ''">{{phone}}</div>
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
          wishId:'',
          item:{},
          guy:'',
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
        getUserInfo(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/user/info',
            method:'get'
          }).then((response)=>{
            if(response.data.code == 0) {
              console.log(response);
              this.userInfo = response.data.data;
              console.log(this.userInfo);
              this.phone = this.userInfo.phone;
              this.guy = this.userInfo.guy;
            } else {
              alert("fail");
            }
          }).catch((response)=>{
            console.log(response);
          })
        },
        // 接受心愿
        submit(){
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/wish/accept',
            method:'post',
            data:{
              id: this.data.wishId,
              guy: this.guy,
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
        this.wishId = this.$route.params.Id;
        console.log(this.wishId);
        this.getWishDetail();
      }
    }
</script>

<style scoped>
#phone,#guy{
  text-align: right;
}
</style>
