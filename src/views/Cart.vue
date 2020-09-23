<template>
    <div class="order">
         <Tabs></Tabs>
         <Header></Header>
         <div class="cart_content">
             <div class="order_nothing" v-if="isShow">
                 <img class="order_bgimg" src="../../public/img/近一年没有订单.png" alt="">
                 <p>近一年没有订单</p>
                <el-button type="primary" round @click="$router.push('/')">去下单</el-button>
             </div>
             <div class="order_something" v-else>
                <CartList v-for="(item,index) in list" :item="item" :key="index"></CartList>
                 <div class="pay">
                     <div class="pay_money">
                         总计：
                         <span>￥{{paysum}}</span>
                     </div>
                     <div class="pay_btn"><el-button type="primary" round>去支付</el-button></div>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import Header from "../components/Header.vue";
import CartList from "../components/Shop/CartList.vue";

export default {
    name: "cart",
    data(){
        return{
            paysun: "0.00"
        }
    },
    components: {
        Tabs,
        Header,
        CartList
    },
    computed:{
        list(){
            return this.$store.state.user.cart;
        },
        userInfo(){
            return this.$store.state.user;
        },
        isShow(){
            if(this.userInfo.length == 0){
                return true
            }else{
                if(this.$store.state.user.cartnum == 0){
                    return true;
                }else{
                    return false;
                }
            }    
        },
        paysum(){
            return this.$store.state.user.paymoney;
        }
    }
}
</script>

<style lang="scss" scoped>
.order{
    position: relative;
    width: 100%;
    top: 45px;
    bottom: 60px;
}
.cart_content{
    width: 100%;
    position: relative;
    .order_nothing{
        width: 100%;
        height: 500px;
        text-align: center;
        .order_bgimg{
            width: 100%;
            height: 300px;
        }
        p{
            display: block;
            margin-top: 20px;
            font-size: 16px;
            color: #888;
        }
        .el-button{
            font-size: 14px;
            padding: 8px 10px;
            margin-top: 10px;
        }
    }
    .order_something{
        position: relative;
        padding: 10px;
        background: #f4f4f5;
        margin-bottom: 60px;
        .pay{
            width: 100%;
            height: 40px;
            text-align: center;
            .pay_money{
                display: inline-block;
                width: 60%;
                span{
                    color: #d81e06;
                }
            }
            .pay_btn{
                display: inline-block;
                width: 40%;
            }
        }
    }
}
</style>