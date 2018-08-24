<template>
    <div class="box">
      <router-view></router-view>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop" to="/admin/wishlistadm">
          <span>心愿列表</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[0].active : icon[0].normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="shop" to="/admin/manageadm">
          <span>管理列表</span>
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
      components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon,
        [Tabbar.name] : Tabbar,
        [TabbarItem.name] : TabbarItem
      },
      created(){
        this.$router.push('/admin/wishlistadm');
      },
      data(){
        return{
          active:0,
          icon: [
            {
              normal: '../../static/icon/task.png',
              active: '../../static/icon/task-active.png'
            },
            {
              normal: '../../static/icon/pe-ma.png',
              active: '../../static/icon/pe-ma-active.png'
            }
          ],
        }
      },
      name: "admin",
    }
</script>

<style scoped>

</style>
