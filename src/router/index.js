import Vue from 'vue'
import VueRouter from 'vue-router'
import deng from '@/components/denglu.vue'
import zhu from '@/components/zhu.vue'
import lunbo from '@/components/lunbo.vue'
import bianji from '@/components/bianji.vue'
import huishou from '@/components/huishou.vue'
import keche from '@/components/keche.vue'
import jiaoyu from '@/components/jiaoyu.vue'
import huodong from '@/components/huodong.vue'
import mingxin from '@/components/mingxin.vue'
import yonghu from '@/components/yonghu.vue'
import caiwu from '@/components/caiwu.vue'
import dindan from '@/components/dindan.vue'
import tongyong from '@/components/tongyong.vue'
import guanyu from '@/components/guanyu.vue'
import yuangong from '@/components/yuangong.vue'
import rizi from '@/components/rizi.vue'
import jueshe from '@/components/jueshe.vue'
import parent from '@/components/parent.vue'
import waibu from '@/components/waibu.vue'
import shouye from '@/views/shouye.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/deng',
        name: 'deng',
        component: deng
    },
    {
        path: '/parent',
        name: 'parent',
        component: parent
    },
    {
        path: '/shouye',
        component: shouye,
        children: [{
                path: 'zhu',
                component: zhu
            },
            {
                path: 'lunbo',
                component: lunbo
            },
            {
                path: 'bianji',
                component: bianji
            },
            {
                path: 'huishou',
                component: huishou
            },
            {
                path: 'keche',
                component: keche
            },
            {
                path: 'jiaoyu',
                component: jiaoyu
            },
            {
                path: 'huodong',
                component: huodong
            },
            {
                path: 'mingxin',
                component: mingxin
            },
            {
                path: 'yonghu',
                component: yonghu
            },
            {
                path: 'caiwu',
                component: caiwu
            },
            {
                path: 'dindan',
                component: dindan
            },
            {
                path: 'tongyong',
                component: tongyong
            },
            {
                path: 'guanyu',
                component: guanyu
            },
            {
                path: 'yuangong',
                component: yuangong
            },
            {
                path: 'rizi',
                component: rizi
            },
            {
                path: 'jueshe',
                component: jueshe
            },
            {
                path: 'waibu',
                component: waibu
            },
            {
                path: '/shouye',
                redirect: '/shouye/zhu',
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // 1.如果访问的是登录页面（无需权限），直接放行
    if (to.path === '/deng') return next()
        // 2.如果访问的是有登录权限的页面，先要获取token
    const tokenStr = window.sessionStorage.getItem('user')
        // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
    if (!tokenStr) return next('/deng')
    next()
})

export default router