import Intro from './components/Intro.vue'
import ServiceList from './components/ServiceList.vue'
import Home from './components/Home.vue'
import Display from './components/Display.vue'

export default{
    routes:[
        { path: '/app', component: Display },
        { path: '/intro', component: Intro},
        { path: '/services', component: ServiceList},
        { path: '/', component: Home}
    ]
}