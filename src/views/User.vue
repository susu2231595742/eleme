<template>
    <div class="User">
        <!--底部导航栏-->
         <Tabs></Tabs>
         <!---->
         <Header></Header>
         <div class="user_number">
            <div class="user_img">
                <i class="el-icon-eleme"></i>
            </div>
            <router-link to='/NewLogin' v-if="this.userinfo.length == 0">
                 <div class="user_info">
                     <p class="user_info_top">立即登录</p>
                     <p class="user_info_cont">再忙也要好好吃饭~</p>
                 </div>
            </router-link>
            <router-link to='/User' v-else>
                <div class="user_info">
                    <p class="user_info_top">{{userinfo.id}}</p>
                    <p class="user_info_cont">填满了肚子，人就不会空虚</p>
                </div>
            </router-link>
            <div class="user_arrow">
                <i class="el-icon-arrow-right"></i>
            </div>
         </div>
         <div class="user_info_data">
             <ul class="info_data_list">
                 <li>
                    <a href="javascript:" class="info_data_link">
                        <span class="info_data_top"><span>0.00</span>元</span>
                        <span class="info_data_bottom">我的余额</span>
                    </a>
                 </li>
                 <li>
                     <a href="javascript:" class="info_data_link">
                         <span class="info_data_top"><span>0</span>个</span>
                         <span class="info_data_bottom">我的优惠</span>
                    </a>
                 </li>
                 <li>
                     <a href="javascript:" class="info_data_link">
                         <span class="info_data_top"><span>0</span>分</span>
                         <span class="info_data_bottom">我的积分</span>
                    </a>
                </li>
             </ul>
         </div>
         <div class="user_my_order">
             <ul>
                <router-link to="/Order">
                    <li class="my_order">
                         <span>
                             <i class="el-icon-s-order"></i>
                        </span>
                        <div class="my_order_div">
                            <span>我的订单</span>
                            <span class="my_order_icon">
                                <i class="el-icon-arrow-right"></i>
                            </span>
                        </div>
                    </li>
                 </router-link>
                 <li class="my_order">
                     <span>
                         <i class="el-icon-coin"></i>
                    </span>
                    <div class="my_order_div">
                        <span>积分商城</span>
                        <span class="my_order_icon">
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                 </li>
                 <li class="my_order">
                     <span>
                         <i class="el-icon-bank-card"></i>
                    </span>
                    <div class="my_order_div">
                        <span>优惠券</span>
                        <span class="my_order_icon">
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                 </li>
             </ul>
         </div>
         <div class="change_userinfo">
             <div class="change_password" @click="changePassword"><span>修改密码</span></div>
             <div class="exit" @click="exit"><span>退出登录</span></div>
             <div class="cancel" @click="cancel"><span>注销账号</span></div>
         </div>
    </div>
</template>

<script>
import Tabs from '../components/Tabs.vue';
import Header from '../components/Header.vue';

    export default{
        name: 'User',
        data(){
            return{
                isLogin: false,
                userinfo: this.$store.state.user
            }
        },
        components:{
            Tabs,
            Header
        },
        methods:{
            changePassword(){
                var passwordRegular = /^[\w\d]{6,9}$/;
                const newPass = prompt("请输入新的密码");
                if(newPass == ""){
                    alert("请输入新密码")
                }else if(newPass == this.userinfo.password){
                    alert("新密码与旧密码相同");
                }else if (!passwordRegular.test(newPass)) {
                    alert("请将密码设置为6-9位数字字母，不含特殊符号");
                }else {
                    this.$store.commit("changePassword", newPass);
                    alert("修改成功");
                }
            },
            exit() {
                this.$store.commit("exit");
                alert("退出登录");
            },
            cancel() {
                this.$store.commit("cancel");
                alert("注销成功");
                this.$router.push("/")
            },
        }
    }
</script>

<style lang="scss" scoped>

.user_number{
    position: relative;
    height: 60px;
    margin-top: 41px;
    background: #02b6fd;
    padding: 20px 10px;
}
.user_img{
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: top;
    background: #f5f5f5;
    .el-icon-eleme{
        font-size: 62px;
        color: #02b6fd;
    }
}
.user_info{
    float: left;
    position: relative;
    margin-top: 8px;
    margin-left: 15px;
    width: 200px;
    color: #fff;
    .user_info_top{
        display: block;
        float: left;
        font-weight: 500;
        font-size: 18px;
        color: #000;
    }
    .user_info_cont{
        display: block;
        float: left;
        padding-top: 8px;;
    }
}
.user_arrow{
    width: 12px;
    height: 12px;
    position: absolute;
    right: 25px;
    top: 40%;
    .el-icon-arrow-right{
        color: #fff;
        font-size: 20px;
    }
}
.user_info_data{
    position: relative;
    width: 100%;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
}
.info_data_list{
    width: 100%;
    height: 80px;
    display: block;
    
}
.info_data_list li{
    display: inline-block;
    width: 33%;
    height: 100%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
    a{
        display: block;
        width: 100%;
        height: 100%;
    }
}
.info_data_top{
    display: block;
    font-size: 14px;
    color: #333;
    padding: 15px 5px 10px;
    span{
        color: #f90;
        font-weight: 700;
        font-size: 30px;
        line-height: 30px;
    }
}
.info_data_list li:nth-of-type(2) .info_data_top span{
    color: #ff5f3e;
}
.info_data_list li:nth-of-type(3) .info_data_top span{
    color: #02b6fd;
}         
.info_data_bottom{
    font-size: 14px;
    color: #666;
    font-weight: 400;
}
.user_my_order{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 160px;
    border-top: 1px solid #f1f1f1;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
    ul{
        width: 100%;
        height: 100%;
        .my_order{
            display: flex;
            padding-left: 15px;
            height: 53px;
            align-items: center;
            >span{
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
            }
            .my_order_div{
                width: 100%;
                padding: 18px 10px 18px 0;
                font-size: 16px;
                color: #333;
                display: flex;
                border-bottom: 1px solid #f1f1f1;
                span{
                    display: block;
                    margin-left: 5px;
                }
                .my_order_icon{
                    position: absolute;
                    display: block;
                    margin-top: 3px;
                    right: 10px;
                }
            }
        }
    }
}
.el-icon-s-order{
    color: #02b6fd;
}
.el-icon-coin{
    color: #ff5f3e;
}
.el-icon-bank-card{
    color: #f90;
}
.change_userinfo{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 150px;
    & >div{
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f1f1f1;
    }
}

</style>
