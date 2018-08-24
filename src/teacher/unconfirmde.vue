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
    <div class="Mcontainer">
      <div class="Mleft">状态</div>
      <div class="Mright">
        待确认
      </div>
    </div>
    <div class="Mfooter" @click="submit">
      <button>确认已完成</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "unconfirmde",
      created(){
        console.log(this.$route.params.Id);
      },
      methods:{
        submit(){

        }
      }
    }
</script>

<style scoped>

</style>
