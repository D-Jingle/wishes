<template>
  <div class="box">
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
      <div class="Mright">{{item.angel.guy}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">{{item.angel.phone}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">学院</div>
      <div class="Mright">{{item.angel.college}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">完成质量</div>
      <div class="Mright">
        已完成
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "comwishde",
      data(){
        return{
          id:0,
          item:{},
        }
      },
      methods:{
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/wish/info?id=' + this.id,
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.item = response.data.data;
              console.log(this.item);
            } else {
              alert("请求失败");
            }
          }).catch((error)=>{
            console.log(error);
          })
        }
      },
      created(){
        this.id = this.$route.params.Id;
        this.getData();
      }
    }
</script>

<style scoped>

</style>
