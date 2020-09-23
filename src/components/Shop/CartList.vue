<template>
    <div class="cartlist">
        <div class="list-content">
            <div class="cartlist_img">
                <img :src="item.img" alt=""  >
            </div>
            <div class="list_info">
                <div class="info_name">{{item.name}}</div>
                <div class="info_price">￥{{item.price}}</div>
                <div class="info_num">
                    <span class="btn" @click="reducegoods">-</span>
          <span class="num">{{item.num}}</span>
          <span class="btn" @click="addgoods">+</span>
                </div>
                <div @click="cancelGoods" class="btn-cancel">
                    <i class="el-icon-close"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Goods from "../../../public/Goods.json"

export default {
    props: ["item"],
    methods: {
        addgoods() {
            this.$store.commit("addCart", this.item);
        },
        reducegoods() {
            this.$store.commit("reduceCart", this.item);
        },
        // goInfo(){
        //    this.$router.push({
        //        path: "/ShopInfo",
        //        query:{
        //            item: this.getInfo
        //        }
        //    }) 
        // },
        cancelGoods(){
            this.$store.commit("cancelGoods", this.item)
        }
    },

    computed: {
        // 计算属性反应数据变化
        // name(){
        //     return this.item.name
        // },
        // img(){
        //     return this.item.img
        // },
        // price(){
        //     return this.item.price
        // },
        // num(){
        //     return this.item.num
        // },
        // sum(){
        //     return this.num * this.price
        // }
    }
}
</script>

<style lang="scss" scoped>
.cartlist{
    width: 100%;
    height: 100px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    .list-content{
        padding: 5px;
        .cartlist_img{
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 85px;
            padding-right: 10px;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .list_info{
            float: left;
            width: 77%;
            margin-top: 8px;
            .info_name{
                display: inline-block;
                width: 60%;
                height: 20px;
                line-height: 20px;
                color: #333;
                font-size: 16px;
                font-weight: 700;
            }
            .info_price{
                display: inline-block;
                width: 40%;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                color: #d81e06;
                text-align: center;
            }
            .info_num{
                display: inline-block;
                width: 70%;
                height: 30px;
                margin-top: 10px;
                & >span{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border: 1px solid #b9b8b8;
                }
            }
            .btn-cancel{
                display: inline-block;
                width: 30%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 20px;
                color: #b9b8b8;
            }
        }
    }
}
</style>