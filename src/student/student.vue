<template>
<div class="box">
  <router-view></router-view>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="shop" to="/student/wishlist">
      <span>心愿列表</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[0].active : icon[0].normal"
      >
    </van-tabbar-item>
    <van-tabbar-item icon="shop" to="/student/task">
      <span>心愿墙</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[1].active : icon[1].normal"
      >
    </van-tabbar-item>
    <van-tabbar-item icon="shop" to="/student/info">
      <span>个人列表</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon[2].active : icon[2].normal"
      >
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  import { Cell, CellGroup, Icon } from 'vant';
    export default {
      components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon,
        [Tabbar.name] : Tabbar,
        [TabbarItem.name] : TabbarItem
      },
      name: "student-wishlist",
      data(){
        return{
          active: 0,
          icon: [
            {
              normal: '../../static/icon/tabbar-wishlist.png',
              active: '../../static/icon/tabbar-wishlist-active.png'
            },
            {
              normal: '../../static/icon/tabbar-task.png',
              active: '../../static/icon/tabbar-task-active.png'
            },
            {
              normal: '../../static/icon/tabbar-task-planning.png',
              active: '../../static/icon/tabbar-task-planning-active.png'
            },
          ]
        }
      },
      methods:{

      },
      created(){
        this.$router.push('student/wishlist');
      }
    }
</script>

<style scoped>
  body {
    background-color: #f8f8f8;
  }

  .van-cell__title .van-icon {
    font-size: 18px;
  }
</style>
