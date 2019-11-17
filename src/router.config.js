import Intro from './components/Intro.vue'
import ServiceList from './components/ServiceList.vue'
import Home from './components/Home.vue'
import Display from './components/Display.vue'
import Contact from './components/Contact.vue'

export default{
    routes:[
        { path: '/app', component: Display },
        { path: '/intro', component: Intro},
        { path: '/services', component: ServiceList},
        { path: '/contact', component: Contact},
        { path: '/', component: Home}
    ]
}