/**
 * @since 2017-04-04 18:53
 * @author chenyiqin
 */


import BaseRouteContainer from '../container/router/BaseRoute'
import NoMatchContainer from '../container/common/NoMatchContainer'
import TodoInfoRouteContainer from '../container/router/TodoInfoRoute'
import TodoListRouteContainer from '../container/router/TodoListRoute'
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

const route = {
    path: '/',
    component: BaseRouteContainer,// 最外层组件
    indexRoute: {// 默认首个路由
        component: TodoListRouteContainer,
    },
    childRoutes: [// 包含的子路由
        TodoListRoute,
        TodoInfoRoute,
        noMatchRoute,
    ],
}

export default route
