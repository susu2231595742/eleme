<template>
    <div class="tabs">
            <div class="nav">
                <router-link to='/'>
                    <i class="el-icon-s-home"></i>
                    <p>首页</p>
                </router-link>
                <router-link to='/Cart'>
                    <i class="el-icon-s-order"></i>
                    <p>订单</p>
                </router-link>
                <router-link to="/User">
                    <i class="el-icon-user"></i>
                    <p>我的</p>
                </router-link> 
            </div>
      <router-view/>
    </div>
</template>

<style lang="scss" scoped>
.tabs{
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #d3dce6;
  z-index: 10;
  text-align: center;
}
.nav{
  width: 100%;
  height: 50px;
  position: relative;
}
.nav a{
    display: inline-block;
    width: 80px;
    height: 100%;
    font-size: 14px;
    color: #aaaaaa;
    text-align: center;
    &.router-link-exact-active{
        color: #02b6fd;
    }
}
.nav a i{
    display: block;
    margin-top: 10px;
    font-size: 20px;
}
.nav a p{
    display: block;
    width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
}
</style>