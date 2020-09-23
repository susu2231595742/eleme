<template>
  <div class="app" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
    //防止刷新数据丢失
    // 存在sessionStorage'item'时提取信息
    if(sessionStorage.getItem("item")){
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(sessionStorage.getItem("item"))
        )
      );
    }

    //在页面刷新时将vuex.store.state.info里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", ()=>{
      sessionStorage.setItem("item", JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
div{
	display: block;
}
a{
	text-decoration: none;
}
li{
  list-style: none;
}

.app{
  width: 100%;
  height: 100%;
}
</style>
