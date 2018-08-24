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
      name: "wishlist",
      components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
      },
      data(){
        return{
          tab:[
            {
              index: 0,
              title: '未分配'
            },
            {
              index: 1,
              title: '待完成'
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
          active: 0,
        }
      },
      methods:{
        onclick(index,title){
          if(index == 1){
            this.$router.push('/admin/wishlistadm/allotadm');
          } else if(index == 0){
            this.$router.push('/admin/wishlistadm/unallotadm');
          } else if (index == 2){
            this.$router.push('/admin/wishlistadm/uncommonadm');
          } else if (index == 3){
            this.$router.push('/admin/wishlistadm/comwishadm');
          }
        }
      },
      created(){
        this.$router.push('/admin/wishlistadm/unallotadm');
      },
    }
</script>

<style scoped>

</style>
