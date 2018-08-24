<template>
    <div class="box">
      <van-tabs v-model="active" @click="onclick" swipeable>
        <van-tab v-for="(item,index) in tab" :title=item.title :key="index+'ab'">
          <router-view></router-view>
        </van-tab>
      </van-tabs>
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
    name: "task",
    data(){
      return{
        tab:[
          {
            index: 0,
            title: '待完成'
          },
          {
            index: 1,
            title: '待评价'
          },
          {
            index: 2,
            title: '待确认'
          },
          {
            index: 3,
            title: '已完成'
          }
        ],
        active: 0,
      }
    },
    created(){
      this.$router.push('/student/task/uncomtask');
    },
    methods:{
      onclick(index,title){
        if(index == 0){
          this.$router.push('/student/task/uncomtask');
        } else if(index == 1){
          this.$router.push('/student/task/remaintask');
        } else if (index == 3){
          this.$router.push('/student/task/comtask');
        } else if (index ==2){
          this.$router.push('/student/task/unconfirm');
        }
      }
    }
  }
</script>

<style scoped>

</style>
