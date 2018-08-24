<template>
  <div class="box">
    <div class="box" :item="item">
      <div class="Mcontent">
        <textarea placeholder="请输入内容" v-model="content" style="height: 100%; width: 100%;"></textarea>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">发布人</div>
        <div class="Mright">{{item.guy}}</div>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">联系方式</div>
        <div class="Mright">{{item.phone}}</div>
      </div>
      <div class="Mfooter" @click="submit">
        <button>发   布</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "issue",
      data(){
        return{
          item:{},
          content:'',
        }
      },
      methods:{
        // 请求发布人信息
        getguy(){
          axios({
            url:this.GLOBAL.BASE_URL + '/user/info',
            method:'get',
          }).then((response)=>{
            console.log(response);
            this.item = response.data.data;
            console.log(this.item);
          }).catch((response)=>{
            console.log(response);
          })
        },

        getWishDetail(){
          axios({
            url:this.GLOBAL.BASE_URL + '/wish/pub',
            method:'post',
            data:{
              content: this.content,
            },
          }).then((response)=>{
            console.log(response);
            this.item = response.data.data;
            console.log(this.item);
          }).catch((response)=>{
            console.log(response);
          })
        },
        submit(){
          console.log(this.content);
        }
      },
      created(){
        // 请求发布人信息

        this.getWishDetail();
      }
    }
</script>

<style scoped>

</style>
