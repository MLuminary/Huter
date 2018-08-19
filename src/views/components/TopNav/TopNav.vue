
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><img class="logo" src="../../images/icon_light.png" alt="icon"></div>
                    <Tooltip class="github-logo" content="Here is my gayHub">
                       <a href="https://github.com/MLuminary"><img class="logo" src="../../images/github.png" alt="github" ></a>
                    </Tooltip>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script> 
    export default {
        
    }
</script>
<style scoped>
.layout-logo ,.github-logo{
    width: 30px;
    height: 30px;
    position: relative;
    top: 12px;
    
}

.layout-logo {
    float: left;
    left: 20px;
}
.github-logo {
    float: right;
    right: 40px;
}

.layout-logo .logo, 
.github-logo .logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>