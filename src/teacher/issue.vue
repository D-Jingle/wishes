<template>
  <div class="box">
    <div class="box" :item="item">
      <div class="Mcontent">
        <textarea placeholder="请输入内容" v-model="content" style="height: 100%; width: 100%;"></textarea>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">发布人</div>
        <div class="Mright">{{userinfo.name}}</div>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">联系方式</div>
        <div class="Mright">{{userinfo.phone}}</div>
      </div>
      <div class="Mcontainer">
        <div class="Mleft">截止日期</div>
        <div class="Mright" @click="open()">
          {{time}}
        </div>
        <van-popup v-model="show" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :title="'选择时间'"
            @confirm="confirm"
            @change="change"
          />
        </van-popup>
      </div>
      <div class="Mfooter" @click="submit">
        <button>发   布</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Popup } from 'vant';
  import Vue from 'vue';
  import { DatetimePicker } from 'vant';
  Vue.use(DatetimePicker);
  Vue.use(Popup);

  export default {
      name: "issue",
      data(){
        return{
          show: false,
          userinfo:{},
          content:'',
          item:{},
          currentDate: new Date(),
          minDate: new Date(),
          deadline:'',
          time:'点击选择'
        }
      },
      methods:{
        // change(picker){
        //   console.log(picker);
        //   console.log(picker.getColumnValue(0));
        // },
        confirm(value){
          let date = new Date(value)
          console.log(date.getFullYear())
          console.log(parseInt(date.getMonth())+1)
          console.log(date.getDate())
          this.deadline = value;
          this.time = date.getFullYear() + '-' + (parseInt(date.getMonth())+1) + '-' + date.getDate();
          this.show = false;
          console.log(this.deadline);
        },
        close(){
          this.show = false;
          console.log(this.show);
        },
        open(){
          this.show = true;
        },
        // 请求发布人信息
        getguy(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/user/info',
            method:'get',
          }).then((response)=>{
            console.log(response);
            if(response.data.code == 0){
              this.userinfo = response.data.data;
              console.log(this.userinfo);
            } else {
              alert('fail');
            }
          }).catch((response)=>{
            console.log(response);
          })
        },
        // 发布信息
        getWishDetail(){
          axios({
            url:this.GLOBAL.BASE_URL + 'apis/Home/wish/pub',
            method:'post',
            data:{
              content: this.content,
              guy:this.userinfo.name,
              deadline: this.deadline,
              phone:this.userinfo.phone
            },
          }).then((response)=>{
            if(response.data.code == 0){
              alert('success');
            } else {
              alert('fail');
            }
          }).catch((response)=>{
            console.log(response);
          })
        },
        submit(){
          console.log(this.content);
        }
      },
      created(){
        // 请求发布人信息
        this.getguy();
        this.getWishDetail();
      }
    }
</script>

<style scoped>

</style>
