<template>
    <div class="shopGoods">
        <div class="goods_img">
            <img :src="img" alt="">
        </div>
        <div class="goods_message">
            <div class="goods_name">{{name}}</div>
            <div class="goods_price">￥{{price}}</div>
            <div class="goods_num">
                <!-- <el-input-number v-model="num" :min="1"></el-input-number> -->
                <div>{{sum}}</div>
            </div>
            <div class="goods_detail">{{detail}}</div>
        </div>
        <div class="add_cart">
            <el-button type="primary" round @click="addCart">下 单</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["shop"],
    data(){
        return{
            name: "",
            img: "",
            price: "",
            detail: "",
        }
    },
    computed:{
        userInfo(){
            return this.$store.state.user;
        },
        goOrder(){
            if (this.userInfo.length == 0) {
                return "/NewLogin"
            }else{
                return "/Cart"
            }
        },
        sum(){
            return this.$store.state.cartnum
        }
    },
    methods:{
        getData: function(){
            this.name = this.shop.name;
            this.img = this.shop.img;
            this.price = this.shop.price;
            this.detail = this.shop.detail;
        },
        addCart(){
            //未登录跳转到登录界面
            if(this.userInfo.length == 0){
                this.$router.push("/NewLogin");
            }else{
                var data = {
                    name: this.name,
                    price: this.price,
                    img: this.img,
                    num: 1
                }
                this.$store.commit("addCart", data);
                this.$router.push("/Cart");
                console.log(data)
            }
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style lang="scss" scoped>
.shopGoods{
    width: 90%;
    height: 500px;
    margin: 0 auto;
    .goods_img{
        width: 100%;
        height: 250px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .goods_message{
        padding: 0 10px;
        .goods_name{
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            color: #000;
            font-weight: 700;
        }
        .goods_price{
            width: 30%;
            height: 20px;
            line-height: 20px;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 700;
            color: #d81e06;
            float: left;
        }
        .goods_num{
            float: right;
            margin-top: 10px;
            .el-input-number{
                width: 150px;
            }
        }
        .goods_detail{
            width: 100%;
            margin-top: 20px;
            float: left;
            font-size: 12px;
            color: #888;
        }
    }
    .add_cart{
        position: absolute;
        bottom: 0;
        right: 30px;
    }
}
</style>