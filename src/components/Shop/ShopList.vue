<template>
    <div class="shop_li">
        <router-link :to="{path: '/ShopInfo', query:{shop: shop}}" class="shop_link">
        <div class="shop_li_cont">
            <div class="shop_left">
                <img class="shop_img" :src="shop.img" alt="">
            </div>
            <div class="shop_right">
                <div class="shop_detail_header">
                     <h4 class="shop_title">{{shop.name}}</h4>
                </div>
                <div class="shop_rating_order">
                    <div class="shop_rating_order_left">
                        <div class="rating_section">
                            {{shop.rating}}分
                        </div>
                        <div class="order_section">
                            月售{{shop.recent_order_num}}
                        </div>
                    </div>
                    <div class="shop_rating_order_right">
                        <span class="delivery_style">{{shop.delivery_mode}}</span>
                    </div>
                </div>
                    <div class="shop_distance">
                        <p class="shop_delivery_msg">
                            <span>起送￥{{shop.float_minmum_order_amount}}</span>
                            <span>配送￥{{shop.float_delivery_fee}}</span>
                        </p>
                    </div>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ShopList",
    props: ["shop"],
    data(){
        return{
            img: '',
            name: '',
            rating: '',
            recent_order_num: '',
            delivery_mode: '',
            float_minmum_order_amount: '',
            float_delivery_fee: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .shop_li{
        width: 100%;
        height: 100px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        .shop_link{
            width: 100%;
            height: 100%;
            display: block;
            .shop_li_cont{
                padding: 5px;
                .shop_left{
                    float: left;
                    box-sizing: border-box;
                    width: 23%;
                    height: 85px;
                    padding-right: 10px;
                    .shop_img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .shop_right{
                    float: left;
                    width: 77%;
                    margin-top: 5px;
                    .shop_detail_header{
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        .shop_title{
                            width: 200px;
                            color: #333;
                            font-size: 16px;
                            font-weight: 700;
                        }
                    }
                    .shop_rating_order{
                        width: 100%;
                        height: 20px;
                        margin-top: 10px;
                        margin-bottom: 8px;
                        .shop_rating_order_left{
                            float: left;
                            color: #ff9a0d;
                            height: 20px;
                            line-height: 20px;
                            .rating_section{
                                float: left;
                                font-size: 14px;
                                color: #ff6000;
                            }
                            .order_section{
                                float: left;
                                font-size: 13px;
                                color: #666;
                                margin-left: 5px;
                            }
                        }
                        .shop_rating_order_right{
                            float: right;
                            .delivery_style{
                                font-size: 14px;
                                padding: 1px;
                                color: #666;
                                margin-right: 5px;
                            }
                        }
                    }
                    .shop_distance{
                        width: 100%;
                        font-size: 13px;
                        color: #666;
                        height: 20px;
                        line-height: 20px;
                        span{
                            margin-right: 8px;
                        }
                    }
                }
            }
        }
    }





</style>
