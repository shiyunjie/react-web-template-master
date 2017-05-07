/**
 * @since 2017-04-04 18:53
 * @author chenyiqin
 */


import BaseRouteContainer from '../container/router/BaseRoute'
import NoMatchContainer from '../container/common/NoMatchContainer'
import TodoInfoRouteContainer from '../container/router/TodoInfoRoute'
import TodoListRouteContainer from '../container/router/TodoListRoute'
import TodoNumberRouteContainer from '../container/router/TodoNumberRoute'
// 没有匹配到的路由
const noMatchRoute = {
    path: '*',
    component: NoMatchContainer,
}
const TodoListRoute = {
    path: 'todo-list',
    component: TodoListRouteContainer,
}
const TodoInfoRoute = {
    path: 'todo(/:id)',
    component: TodoInfoRouteContainer,
}
const TodoNumberRoute = {
    path: 'todo-num()',
    component: TodoNumberRouteContainer,
}

/*
 Route的次序有很大的关系自上而下匹配
用户访问/about/me时，不会触发第二个路由规则，
因为它会匹配/:userName/:id这个规则。
因此，带参数的路径一般要写在路由规则的底部。*/
const route = {
    path: '/',
    component: BaseRouteContainer,// 最外层组件
    indexRoute: {// 默认首个路由
        component: TodoListRouteContainer,
    },
    childRoutes: [// 包含的子路由
        TodoListRoute,
        TodoNumberRoute,
        TodoInfoRoute,
        noMatchRoute,

    ],
}

export default route
