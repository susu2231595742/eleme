<template>
    <div class="shopInfo">
        <ShopHeader :shop="info"></ShopHeader>
        <div class="shopinfo_tab">
            <el-tabs>
                <el-tab-pane label="点餐">
                    <ShopGoods :shop="info"></ShopGoods>
                </el-tab-pane>
                <el-tab-pane label="评价">
                    <ShopRatings></ShopRatings>
                </el-tab-pane>
                <el-tab-pane label="商家"></el-tab-pane>
            </el-tabs>
        </div>
        
    </div>
</template>

<script>
import ShopGoods from '../components/Shop/ShopGoods.vue';
import ShopHeader from '../components/Shop/ShopHeader.vue';
import ShopRatings from '../components/Shop/ShopRatings.vue';


export default {
    
    data(){
        return{
            info: this.$route.query.shop
        }
    },
    components: {
        ShopGoods,
        ShopHeader,
        ShopRatings
    },
    methods: {
        setInfo(){
            this.$store.commit("setInfo", this.info);
        },
        resetInfo(){
            var data = sessionStorage.getItem("shop");
            let obj = JSON.parse(data);
            this.info = obj.info;
        }
    },
    mounted(){
        this.setInfo();
    },
    created(){
        // 条件满足重置info   防止刷新丢失商品页信息
        if(this.info.legnth != undefined){
            this.resetInfo();
        }
    }
}
</script>

<style lang="scss" scoped>
.shopinfo_tab{
    padding: 0 10px;
}
</style>