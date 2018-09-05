<template>
  <div class="box">
    <div class="Mcontainer">
      <div class="Mleft">姓名</div>
      <div class="Mright" v-if="userinfo.name != ''">{{userinfo.name}}</div>
      <div class="Mright" v-if="userinfo.name == '' ">
        <input type="text" placeholder="请输入姓名" v-model="name" style="text-align: right;border: 0;outline:none;">
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">学号</div>
      <div class="Mright">{{userinfo.acc}}</div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">联系方式</div>
      <div class="Mright" v-if="userinfo.phone != ''">{{userinfo.phone}}</div>
      <div class="Mright" v-if="userinfo.phone == ''">
        <input type="text" placeholder="请输入电话号" v-model="phone" style="text-align: right;border: 0;outline:none;">
      </div>
    </div>
    <div class="Mcontainer">
      <div class="Mleft">所属学院</div>
      <div class="Mright">{{userinfo.college}}</div>
      <div class="Mright">
        <div @click="changeShow" v-if="index == -1">点击选择学院</div>
        <div @click="changeShow" v-if="index != -1">{{college}}</div>
        <van-popup v-model="show" position="bottom">
          <van-picker :columns="columns" @change="onChange" />
        </van-popup>
      </div>
    </div>
    <!--<div class="Mcontainer">-->
      <!--<div class="Mleft">志愿总时长</div>-->
      <!--<div class="Mright">{{userinfo.time}}</div>-->
    <!--</div>-->
    <div class="Mfooter" @click="submit" v-if="userinfo.phone == '' || userinfo.name == ''">
      <button>提交联系方式</button>
    </div>
    <div class="Mfooter2" @click="logout">
      <button>注   销</button>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Popup } from 'vant';
  import { Picker } from 'vant';
  Vue.use(Popup);
  Vue.use(Picker);

    export default {
      name: "info",
      data(){
        return{
          index: -1,
          college:'',
          show: false,
          userinfo:{},
          phone:'',
          name:'',
          columns: [
            '林学院',
            '野生动物资源学院',
            '经济管理学院',
            '园林学院',
            '材料科学与工程学院',
            '土木工程学院',
            '理学院',
            '机电工程学院',
            '文法学院',
            '工程技术学院',
            '外国语学院',
            '信息与计算机工程学院',
            '交通学院',
            '生命科学学院',
            '研究生院'
          ]
        }
      },
      created(){
        this.getData();
      },
      methods:{
        logout(){
          localStorage.account = '';
          localStorage.password = '';
          location.reload();
        },
        onChange(picker, value, index) {
          this.index = index;
          this.college = value;
          console.log(this.index,this.college);
          console.log(`当前值：${value}, 当前索引：${index}`);
        },
        changeShow(){
          this.show = true;
          console.log(this.show);
        },
        getData(){
          axios({
            url: this.GLOBAL.BASE_URL + 'Home/user/stu_info',
          }).then((response)=>{
            console.log(response);
            if(response.data.code ==0){
              this.userinfo = response.data.data;
              console.log(this.userinfo);
            }
          }).catch((error)=>{
            console.log(error);
          })
        },

        submit(){
          if(this.phone.length == 11 && this.index != -1){
            axios({
              url: this.GLOBAL.BASE_URL + 'Home/user/stu_register',
              data:{
                account: this.userinfo.acc,
                phone:this.phone,
                nickname: this.name,
                college:this.college
              },
              method:'post',
            }).then((response)=>{
              console.log(response);
              if(response.data.code == 0){
                alert('提交成功');
                this.$router.go(-1);
              } else {
                alert("请求失败！");
              }
            }).catch((error)=>{
              console.log(error);
            })
          } else {
            alert('请输入正确的手机号和学院！');
          }
        }
      }
    }
</script>

<style scoped>
  .Mfooter2{
    position: absolute;
    bottom: 9rem;
    width: 100%;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
    border-radius: 10%;
    color: white;
  }
</style>
