<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span>
            <i class="el-icon-warning-outline"></i>
        </span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      alertText: String
    },

    methods: {
      closeTip() {
        // 分发自定义事件(事件名: closeTip)
        this.$emit('closeTip')
      }
    }
  }
  
</script>

<style lang="scss" scoped>
.alert_container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    text-align: center;
}
.tip_text_container{
    position: absolute;
    top: 50%;
    left: 20%;
    margin-top: -90px;
    width: 60%;
    background: #fff;
    border: 1px;
    border-radius: 5px;
    padding-top: 20px;
    .tip_icon{
        width: 100%;
        height: 55px;
        font-size: 50px;
        color: #f8cb86;
    }
    .tip_text{
        font-size: 14px;
        color: #333;
        line-height: 20px;
        text-align: center;
        margin-top: 10px;
        padding: 0 5px;
    }
    .confrim{
        font-size: 18px;
        font-weight: bold;
        background-color: #02b6fd;
        width: 100%;
        text-align: center;
        line-height: 35px;
        border: 1px;
        color: #fff;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-top: 5px;
    }
}
</style>