<template>
    <div class="box">
      <router-view></router-view>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop" to="/teacher/wishlisttea">
          <span>心愿列表</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[0].active : icon[0].normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="shop" to="/teacher/infotea">
          <span>个人列表</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[1].active : icon[1].normal"
          >
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  import { Cell, CellGroup, Icon } from 'vant';
    export default {
      name: "teacher",
      components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon,
        [Tabbar.name] : Tabbar,
        [TabbarItem.name] : TabbarItem
      },
      data(){
        return{
          active:0,
          icon: [
            {
              normal: '../../static/icon/tabbar-wishlist.png',
              active: '../../static/icon/tabbar-wishlist-active.png'
            },
            {
              normal: '../../static/icon/tabbar-task-planning.png',
              active: '../../static/icon/tabbar-task-planning-active.png'
            },
          ],
        }
      },
      created(){
        this.$router.push('teacher/wishlisttea');
      }
    }
</script>

<style scoped>

</style>
