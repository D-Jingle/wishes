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
      <div class="Mleft">状态</div>
      <div class="Mright">
        待认领
      </div>
    </div>
    <div class="Mfooter" @click="submit()">
      <button>再次发送</button>
    </div>
    <div class="Mfooter2" @click="cancel()">
      <button>取消心愿</button>
    </div>

    <van-dialog
      v-model="show"
      show-cancel-button
      @confirm="confirm()"
    >
      <van-field
        v-model="reason"
        label="原因"
        placeholder="请输入取消原因"
      />

    </van-dialog>

  </div>
</template>

<script>
  import { Dialog } from 'vant';
  import { Field } from 'vant';
  import Vue from 'vue';
  Vue.use(Dialog);
  Vue.use(Field);

    export default {
      name: "unclaimde",
      data(){
        return{
          reason:'',
          id:'',
          item:{},
          show: false,
          username: '',
          password: ''
        }
      },
      created(){
        this.id = this.$route.params.Id;
        this.getData();
      },
      methods:{
        confirm(){
          console.log(this.reason);
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/wish/cancel',
            method:'post',
            data:{
              id:this.id,
              reason:this.reason
            }
          }).then((response)=>{
            console.log(this.id);
            console.log(response);
            if(response.data.code == 0){
              alert('success');
            } else {
              alert("fail");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },

        submit(){
          console.log(this.id);

        },
        cancel(){
          this.show = true;
          console.log(this.id);

        },
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'apis/Home/wish/info?id=' + this.id,
          }).then((response)=>{
            if(response.data.code == 0){
              console.log(response);
              this.item = response.data.data;
              console.log(this.item);
            } else {
              alert("fail");
            }
          }).catch((error)=>{
            console.log(error);
          })
        }
      }
    }
</script>

<style scoped>
  .Mfooter{
    position: absolute;
    bottom: 7rem;
    width: 45%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
    border-radius: 10%;
    color: white;
  }
  .Mfooter2{
    position: absolute;
    right: 0;
    bottom: 7rem;
    width: 45%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    border-radius: 10%;
    color: white;
  }
</style>
