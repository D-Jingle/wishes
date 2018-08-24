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
      <div class="Mleft">完成状态</div>
      <div class="Mright">
        已完成待评价
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">志愿时长</div>
      <div class="Mright">待开发</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">评价</div>
      <div class="MpicBox">
          <img v-for="(item,index) in nowpic" :key="index + 'f'" @click="changecommon(index)" :src="item">
      </div>
    </div>
    <div class="Mfooter" @click="submit">
      <button>再次发送</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "remainclaimde",
      methods:{
        changecommon(index){
          this.index = index;
          this.nowpic = new Array(); // 只有数组地址改变才会触发渲染
          for(let i=0;i<4;i++){
            this.nowpic.push(this.pic[i]);
          }
          this.nowpic[index] = this.acpic[index];
          console.log(this.nowpic);
        },
        submit(){

        }

      },
      data(){
        return{
          index:'',
          nowpic:[
            'static/icon/verygood.png',
            'static/icon/good.png',
            'static/icon/ordinary.png',
            'static/icon/bad.png'
          ],
          pic:[
            'static/icon/verygood.png',
            'static/icon/good.png',
            'static/icon/ordinary.png',
            'static/icon/bad.png'
          ],
          acpic:[
            'static/icon/verygoodactive.png',
            'static/icon/goodactive.png',
            'static/icon/ordinaryactive.png',
            'static/icon/badactive.png'
          ]
        }
      },
      created(){
        console.log(this.$route.params.Id);
      }
    }
</script>

<style scoped>
  .MpicBox{
    position: absolute;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Mcontainer .MpicBox img:nth-child(1){
    height: 1.7rem;
    margin-right: 0.6rem;
  }
  .Mcontainer .MpicBox img:nth-child(2){
    height: 1.7rem;
    margin-right: 0.6rem;
  }
  .Mcontainer .MpicBox img:nth-child(3){
    height: 2rem;
    margin-right: 0.5rem;
  }
  .Mcontainer .MpicBox img:nth-child(4){
    height: 2rem;
    margin-right: 0.5rem;
  }
  .Mfooter{
    position: relative;
    bottom: 0;
  }

</style>
