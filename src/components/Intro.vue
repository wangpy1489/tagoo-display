<template>
    <Card dis-hover>
        <h1 slot="title" style="text-align: center; font-size:40px  ">
            瓜瓜找人，寻找身边的服务提供者
        </h1>
        <Row>
            <Col span="12" class="intro-text" >
                    服务提供者
                <br/>												
                发布能提供服务的信息,
                <br/>
                包括姓名、电话、地址、
                <br/>
                服务类别、服务内容、服务费用、
                <br/>							
                宣传图片、宣传小视频等。
            </Col>
            <Col span="12" class="intro-text">
                    服务需求者
                <br/>
                通过服务类别、或关键词
                <br/>
                搜寻身边的服务提供者。
            </Col>
        </Row>
    </Card>
</template>

<script>
export default {

}
</script>

<style>
.intro-text{
    text-align: center; 
    font-size: 24px; 
    font-weight: bold; 
    line-height:45px
}
</style>