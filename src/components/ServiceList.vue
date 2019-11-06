<template>
    <div>
        <Card dis-hover> 
        <Row justify ="center" align ="middle">
            <Col v-for="service in serviceList"  v-bind:key="service.name" span="4">
                <List    size="large"    item-layout="vertical" style="text-align: center">
                    <h2 slot="header">{{service.name}}</h2>
                    <ListItem v-for="item in service.list"  :key="item"  > 
                        {{item}}
                    </ListItem>
                </List>
            </Col>
        </Row>
        </Card>
      
    </div>
</template>

<script>
export default {
    data: ()=>{
        return {
            serviceList:[{ name: "维修服务",
                list: ['家电维修',"日常用品维修","房屋装修和维修","车辆维修","乐器维修	"]},
                { name: "居家生活服务",
                list: ["保洁服务","居家照顾","上门厨师","代办服务","鞋帽衣物"]},
                { name: "家教",
                list: ["小学辅导","初中辅导","高中辅导"]},
                { name: "健康休闲",
                list: ["美容美肤","医疗","摄影服务","旅游休闲","上门表演"]},
                 { name: "培训",
                list: ["语言培训","艺术培训","体育培训","职业培训","育儿培训","考试培训"]},
                 { name: "商务服务",
                list: ["成立公司","广告图文","IT服务","法律服务"]},]
        }
    },
    computed: {
    // 计算属性的 getter
    spanLen: function () {
      // `this` 指向 vm 实例
      return 24 / this.serviceList.length()
    }
  }
}

</script>

<style>

</style>