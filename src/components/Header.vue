<template>
    <header class="header">
        <div class="header_title">
            <h1>
                <i class="el-icon-eleme"></i>
                <span>饿了么</span>
            </h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    background: #02b6fd;
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    left: 0;
    top: 0;
    border-bottom: 1px solid #fff;
    z-index: 10;
}
.header_title{
    width: 100%;
    height: 100%;
    h1{
        font-size: 20px;
        color: #fff;
        display: block;
        text-align: center;
        i{
            font-size: 25px;
        }
        span{
            display: inline-block;
        }
    }
}

</style>
