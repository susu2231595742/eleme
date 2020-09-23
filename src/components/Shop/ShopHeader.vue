<template>
    <div class="shop_header">
        <nav class="shop_nav" >
            <img :src="shop.img" alt="" class="shop-header_bgimg">
            <a class="back" @click="$router.back()">
                <i class="el-icon-back"></i>
            </a>
        </nav>
        <div class="shop_header_content">
                <div class="content_title">
                    <h2>{{shop.name}}</h2>
                </div>
                <div class="shop_message">
                    <el-tag>饿了么专送</el-tag>
                    <span class="shop-message-detail">约{{shop.delivery_mode}}</span>
                    <span class="shop-message-detail"> · </span>
                    <span class="shop-message-detail">月售{{shop.recent_order_num}}</span>
                    <span class="shop-message-detail"> · </span>
                    <span class="shop-message-detail">可自取</span>
                </div>
                <div class="shop_img">
                    <img :src="shop.img" alt="">
                </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ["shop"],
    
}
</script>

<style lang="scss" scoped>
.shop_header{
    width: 100% ;
    height: 250px;
    position: relative;
    background: #fff;
    overflow: hidden;
    .shop_nav{
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        height: 150px;
        position: relative;
        .shop-header_bgimg{
            width: 105%;
            height: 100%;
            margin: -5px;
            display: block;
        }
        .back{
            position: absolute;
            top: 10px;
            font-size: 30px;
            left: 10px;
            color: #02b6fd;
        }
    }
    .shop_header_content{
        width: 380px;
        height: 100px;
        padding: 10px;
        margin: -50px auto 0;
        position: absolute;
        left: 1%;
        right: 1%;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 5px #888;
        .content_title{
            width: 72%;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            color: #333;
        }
        .shop_message{
            width: 72%;
            height: 20px;
            line-height: 20px;
            margin-top: 10px;
            white-space: nowrap;
            font-size: 12px;
            color: #888;
            .el-tag{
                height: 20px;
                line-height: 20px;
                padding: 0 5px;
                margin-right: 5px;
            }
        }
        .shop_img{
            position: absolute;
            right: 5px;
            top: 10px;
            width: 87px;
            height: 85px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    
}
</style>