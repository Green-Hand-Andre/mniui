import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
const routes: Array<RouteRecordRaw> = [{
  path:"/layout",
  name:"layout",
  component:()=>{
    import('../components/HelloWorld.vue')
  }
}]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})

router.beforeEach((to,from)=>{
  return true;
})

export default router;
