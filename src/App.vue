<template>
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If ViewUI is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div> -->
     <div class="layout">
        <Layout>
            <Header id="mheader">
                <Menu id="menu" mode="horizontal" theme="light" active-name="1">
                   <img src="./assets/logo.png" class="layout-logo">
                    <div class="layout-nav">
                      <router-link to="/">
                        <MenuItem name="1">
                          移动端应用
                        </MenuItem>
                      </router-link>
                      <router-link to="/intro">
                        <MenuItem name="2">
                          简介
                        </MenuItem>
                      </router-link>
                      <router-link to="/services"> 
                        <MenuItem name="3">
                          服务分类
                        </MenuItem>
                      </router-link>
                      <router-link to="/app">  
                        <MenuItem name="4">
                          APP展示
                        </MenuItem>
                      </router-link>  
                      <router-link to="/contact">  
                        <MenuItem name="5">
                              联系我们
                          </MenuItem>
                      </router-link >
                    </div>
                </Menu>
            </Header>
            <Content >
              <router-view/> 
            </Content>
            <Divider/>
            <Footer class="layout-footer-center">
              <span>
              &copy; 上海太鸽信息技术有限公司	
              </span>

              <a href="http://www.beian.miit.gov.cn/">沪ICP18014000号</a>
            </Footer>
        </Layout>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #ffffff !important;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
#mheader{
  height: 100px ;
  background: #ffffff ;
  padding: 0px;
}
#menu{
  height: 100%;
  width: 100%;
  padding: 0 300px 0;
}
.ivu-menu-item{
  font-size: 18px !important; 
}
.layout-logo{
    width: 80px;
    height: 80px;
    /* background: #5b6270; */
    z-index: 10;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
}
.ivu-list-items{
    text-align:center !important;
}
.layout-nav{
    margin: 20px auto 0;
    float: right;
    font-size: 18px !important; 
}
.layout-footer-center{
    text-align: center;
}
</style>
