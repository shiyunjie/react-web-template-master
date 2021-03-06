/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import { routerReducer, } from 'react-router-redux'
import todo from './todo'
import todoList from './todoList'
import showNum from './showNum'
import search from './search'

export default {
    todo,
    todoList,
    showNum,
    search,
    routing: routerReducer,
}
