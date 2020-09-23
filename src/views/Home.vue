<template>
  <div class="home">
    <Tabs></Tabs>
    <Header></Header>
    <div class="Home">
      <div class="home-content">
        <div class="nav">
              <el-carousel :interval="5000" arrow="never">
                <el-carousel-item v-for="item in imgs" :key="item">
                  <img :src="item" alt="">
                </el-carousel-item>
              </el-carousel>
        </div>
        <!--商家列表-->
        <div class="shop_content">
          <div class="shop_cont_header">
            <i class="el-icon-s-unfold"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <div class="home_nav">
            <div class="shop_list">
              <ShopList v-for="(shop, index) in shops" :shop="shop" :key="index" ></ShopList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import Header from '../components/Header.vue';
import ShopList from '../components/Shop/ShopList.vue';
import Goods from '../../public/Goods.json';

export default {


  name: 'Home',
  data() {
    return{
      imgs:[
        require("../assets/swiper-1.png"),
        require("../assets/swiper-2.png"),
        require("../assets/swiper-3.png")
      ],
      shops: []
    }
  },
  mounted(){
    this.shops = Goods;
  },
  components: {
    Tabs,
    Header,
    ShopList
  }
}
</script>

<style lang="scss">
.Home{
  position: relative;
  top: 45px;
  bottom: 50px;
  width: 100%;
}
.nav{
  position: relative;
  width: 100%;
  height: 230px;
  background: #fff;
  .el-carousel{
    width: 100%;
    height: 100%;
    .el-carousel__container{
      height: 100%;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.shop_content{
  position: relative;
  margin-top: 10px;
  background: #fff;
  .shop_cont_header{
    padding: 10px 10px 0;
    color: #999;
    border-top: 1px solid #e4e4e4;
    span{
      font-size: 14px;
      line-height: 20px;
      margin-left: 5px;
    }
  }
}

.home_nav{
    margin-bottom: 50px;
    background: #f4f4f5;
    z-index: 5;
    .shop_list{
        padding: 10px;
    }
}
</style>
