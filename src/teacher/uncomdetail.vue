<template>
  <div class="box">
    <div class="Mcontent">
      lalalalalallalalalalalalalalalalalalalalalalalla
    </div>
    <div class="Mcontainer">
      <div class="Mleft">发布人</div>
      <div class="Mright">渣渣辉</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">18888888888</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">认领人</div>
      <div class="Mright">渣渣辉</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright">18888888888</div>
    </div>
    <div class="Mfooter" @click="submit">
      <button>确认完成</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "uncomdetail",
      methods:{
        getData(){
          axios({
            url:'https://api.myjson.com/bins/1a85wg',
          }).then((response)=>{
            console.log(response);
            this.task = response.data.data.accepted;
            console.log(this.task);
          }).catch((error)=>{
            console.log(error)
          })
        },
      },
      created(){
        this.getData();
        console.log(this.$route.params.Id);
      }
    }
</script>

<style scoped>

</style>
