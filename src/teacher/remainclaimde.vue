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
      <div class="Mright" v-if="">{{item.angel.phone}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">截止日期</div>
      <div class="Mright">{{item.deadline}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">完成状态</div>
      <div class="Mright">
        待评价
      </div>
    </div>
    <!--<div class="Mcontainer">-->
      <!--<div class="Mleft">志愿时长</div>-->
      <!--<div class="Mright">待开发</div>-->
    <!--</div>-->
    <div class="Mcontainer">
      <div class="Mleft">评价</div>
      <div class="MpicBox">
          <img v-for="(item,index) in nowpic" :key="index + 'f'" @click="changecommon(index)" :src="item">
      </div>
    </div>
    <div class="Mfooter" @click="submit">
      <button>确认评价</button>
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
        // 请求信息
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/wish/info?id=' + this.id,
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.item = response.data.data;
              console.log(this.item);
            } else {
              alert("请求失败！");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },

        // 待写
        submit(){
          console.log(this.index);
          if(this.index == '' && this.index != 0){
            alert('请点击表情进行评价！');
          } else {
            if (this.index ==0 ){
              this.judge = 'A';
            } else if (this.index ==1 ){
              this.judge = 'B';
            } else if (this.index ==2 ){
              this.judge = 'C';
            } else if (this.index ==3 ){
              this.judge = 'D';
            };
            axios({
              url: this.GLOBAL.BASE_URL + 'Home/wish/confirm',
              method:'post',
              data:{
                id: this.id,
                time: '0',
                judge: this.judge
              }
            }).then((res)=>{
              console.log(res);
              if(res.data.code == 0){
                alert("success");
                this.$router.go(-1);
              } else {
                alert("请求失败！");
              }
            }).catch((res)=>{
                alert('fail');
            })
          }
        }
      },
      data(){
        return{
          index:'',
          item:{},
          id:'',
          nowpic:[],
          pic:[],
          acpic:[],
          judge:''
        }
      },
      created(){
        this.id = this.$route.params.Id;
        this.nowpic =  this.$store.state.pic;
        this.pic = this.$store.state.pic;
        this.acpic = this.$store.state.acpic;
        this.getData();
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
