<template>
    <div class="login">
        <div class="go_back" @click="$router.back()">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="login_header"><h1>饿死了么</h1></div>
        <div class="login_content">
            <div class="login_cont_title">
                <label for="" :class="{on: loginWay}" @click="showLogin()">登录</label>
                <label for="" :class="{on: !loginWay}" @click="showReg()">注册</label>
            </div>
            <div class="login_form">
                <div v-if="loginWay" class="login_form_item">
                    <ul>
                        <li>
                            <label class="form_item_label" for="">账号</label>
                            <div class="form_item_cont">
                                <input type="text" class="form_item_input" placeholder="请输入手机号" v-model="id">
                            </div>
                        </li>
                        <li>
                            <label class="form_item_label" for="">密码</label>
                            <div class="form_item_cont">
                                <input type="password" class="form_item_input" placeholder="请输入密码" v-model="password">
                            </div>
                        </li>
                    </ul>
                    <el-button  class="form_item_btn" type="primary" round @click="login()">登录</el-button>

                </div>
                <div v-else class="login_form_item" >
                    <ul>
                <li>
                    <label class="form_item_label" for="">账号</label>
                    <div class="form_item_cont">
                        <input type="text" class="form_item_input" placeholder="请输入手机号" v-model="id">   
                    </div>    
                </li>        
                <li>
                    <label class="form_item_label" for="">密码</label>
                    <div class="form_item_cont">   
                        <input type="password" class="form_item_input" placeholder="请输入密码" v-model="password">    
                    </div>    
                </li>                      
                <li>
                    <label class="form_item_label" for="">确认密码</label>
                    <div class="form_item_cont">
                        <input type="password" class="form_item_input" placeholder="请输入密码" v-model="repeat">
                    </div>
                </li>
            </ul>
            <el-button class="form_item_btn" type="primary" round @click="reg()">注册</el-button>
                </div>
            </div>
        </div>
        <div class="login_logo">
            <router-link to="/">
                 <i class="el-icon-eleme"></i>
            </router-link>
        </div>
        <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
    </div>
</template>  
<script>
import AlertTip from '../components/AlertTip.vue';

    export default{
        name: "NewLogin",
        data(){
            return{
                activeName: 'first',
                loginWay: true,
                alertText: '',
                alertShow: false,
                id: '',
                password: '',
                repeat: '',
            };
        },
        components: {
            AlertTip
        },
        methods: {
            showLogin(){
                this.loginWay = true;
                this.id = '';
                this.password = '';
                this.repeat = '';
            },
            showReg(){
                this.loginWay = false;
                this.id = '';
                this.password = '';
                this.repeat = '';
            },
            login(){
                //验证登录
                if(this.id == '' || this.password == ""){
                    this.showAlert('请输入账号密码');
                }else if(localStorage.getItem(this.id) == null){
                    this.showAlert('该账号不存在');
                    this.id = '';
                    this.password = '';
                }else if(JSON.parse(localStorage.getItem(this.id)).password != this.password){
                    this.showAlert('密码输入不正确');
                    this.id = '';
                    this.password = '';
                }else{
                    this.$store.commit("getUser", this.id);
                    this.id = '';
                    this.password = '';
                    this.$router.push('/User');
                }
            },
            
         reg(){
                //注册验证
                var regId = /^(([\d]) |(1[3578]\d{9}))$/; //手机号的正则
                var regPassword = /^[\w\d]{6,9}$/; //密码的正则 只能由6-9位数字和字母组成
                if(this.id == "" || this.password == "" || this.repeat == ""){
                    this.showAlert('请完善信息');
                }else if(!regId.test(this.id)){
                    this.$parent.showAlert('请输入正确格式的手机号！');
                    this.id = '';
                    this.password = '';
                    this.repeat = '';
                }else if(localStorage.getItem(this.id) != null){
                    this.showAlert('该手机号已经被注册，去登录');
                    this.id = '';
                    this.password = '';
                    this.repeat = '';
                }else if(!regPassword.test(this.password)){
                    this.showAlert('请输入正确格式的密码，');
                    this.password = '';
                    this.repeat = '';
                }else if(this.password !== this.repeat){
                    this.showAlert('两次密码输入不一致!');
                    this.password = '';
                    this.repeat = '';
                }else{
                    this.$store.commit("addUser", {id: this.id, password: this.password}), 
                    this.showAlert('注册成功！');
                    this.id = '';
                    this.password = '';
                    this.repeat = '';
                }
            },   
            //弹出警告框
            showAlert(alertText) {
                this.alertShow = true;
                this.alertText = alertText;
            },
            // 关闭警告框
            closeTip () {
                this.alertShow = false;
                //如果注册成功自动跳到登录页面
                var a = /注册成功！/;
                if(a.test(this.alertText)){
                    this.showLogin();
                }
                this.alertText = ''
            },
        }
    }
</script>

<style lang="scss" >
.login{
    position: relative;
    padding-top: 60px;
    width: 80%;
    height: 600px;
    margin: 0 auto;
    background: #fff;
}
.go_back{
    position: absolute;
    top: 12px;
    left: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    .el-icon-arrow-left{
        font-size: 20px;
        color: #999;
    }
}
.login_header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-bottom: 40px;
    h1{
        font-size: 40px;
        font-weight: blod;
        color: #02b6fd;
        text-align: center;
    }
}
.login_content{
    width: 100%;
    height: 300px;
    text-align: center;
}
.login_cont_title{
    width: 100%;
    height: 20px;
    padding-bottom: 10px;
    label{
        font-size: 18px;
        color: #333;
        font-weight: 500;
        padding-bottom: 4px;
        transition: all .15s;
        &.on{
            color: #02b6fd;
            border-bottom: 2px solid #02b6fd;
        }
    }
}
.login_cont_title  label:first-child{
    margin-right: 65px;
}
.login_form{
    padding: 0 20px;
    margin-top: 10px;
}
.login_form_item{
    width: 100%;
    display: block;
    ul{
        display: block;
        width: 100%;
        height: 100%;
        li{
            height: 40px;
            margin-bottom: 22px;
            .form_item_label{
                width: 80px;
                text-align: right;
                vertical-align: middle;
                float: left;
                font-size: 16px;
                color: #606266;
                line-height: 40px;
                padding: 0 12px 0 0;
                box-sizing: border-box;
            }
            .form_item_cont{
                margin-left: 80px;
                line-height: 40px;
                position: relative;
                font-size: 14px;
                padding-right: 30px;
                .form_item_input{
                    background-color: #fff;
                    border-radius: 4px;
                    border: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    outline: none;
                    padding: 0 15px;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                }
                &:focus{
                    border-color: #02b6fd;
                }
            }
        }
    }
    .form_item_btn{
        width: 80%;
        height: 42px;
        font-size: 16px;
    }
}
.login_logo{
    position: absolute;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    .el-icon-eleme{
        display: block;
        font-size: 100px;
        color: #02b6fd;
    }
}
</style>