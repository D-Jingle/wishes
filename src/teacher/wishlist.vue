<template>
  <div class="box">
    <van-tabs v-model="active" @click="onclick" swipeable>
      <van-tab v-for="(item,index) in tab" :title=item.title :key="index+'ab'">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
    <div class="fabu" @click="toissue">
      <div class="row"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
  import { Tab, Tabs } from 'vant';
  import Vue from 'vue'
  Vue.use(Tab).use(Tabs);
    export default {
      components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
      },
      data(){
        return{
          tab:[
            {
              index: 0,
              title: '待认领'
            },
            {
              index: 1,
              title: '已认领'
            },
            {
              index: 2,
              title: '待评价'
            },
            {
              index: 3,
              title: '已完成'
            }
          ],
          active:0,
        }
      },
      methods:{
        toissue(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/user/tea_info',
          }).then((response)=>{
            console.log(response);
            if(response.data.code ==0){
              this.userinfo = response.data.data;
              console.log(this.userinfo);
              if(this.userinfo.phone == ''){
                alert ("请至个人信息页面填写信息后再发布心愿！")
              } else {
                this.$router.push('/teacher/issue');
              }
            } else {
              alert("请求失败！");
            }
          }).catch((error)=>{
            console.log(error);
          })
        },
        onclick(index,title){
          if(index == 0){
            this.$router.push('/teacher/wishlisttea/unclaim');
          } else if (index == 1){
            this.$router.push('/teacher/wishlisttea/claim');
          } else if (index == 2){
            this.$router.push('/teacher/wishlisttea/remainclaim');
          } else if (index == 3){
            this.$router.push('/teacher/wishlisttea/comclaim');
          }
        }
      },
      created(){
        this.$router.push('/teacher/wishlisttea/unclaim');
      },
      name: "wishlist",
    }
</script>

<style scoped>
  .fabu{
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: dodgerblue;
  }
  .row{
    position: absolute;
    height: 10%;
    width: 80%;
    background-color: white;
    left: 10%;
    top: 45%;
  }
  .col{
    position: absolute;
    height: 80%;
    width: 10%;
    top: 10%;
    left: 45%;
    background-color: white;
  }

</style>
