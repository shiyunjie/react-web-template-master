/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import './TodoListContainer.pcss'
import React, { Component, } from 'react'
import Todo from '../component/Todo'
import action from '../action'
// import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

/* PureComponent改变了生命周期方法 shouldComponentUpdate ，
 并且它会自动检查组件是否需要重新渲染。这时，只有PureComponent检测到 state 或者 props 发生变化时，
 PureComponent才会调用 render 方法，因此，你不用手动写额外的检查，就可以在很多组件中改变 state*/
@connect(
    // 这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
    state => ({
        todoList: state.todoList,
    }),
    // 将 action 作为 props 绑定到 组件上
    action.todo,
    // 不管是 stateProps 还是 dispatchProps ，都需要和 ownProps merge 之后才会被赋给 组件
    (stateProps, dispatchProps, ownProps) => {
        return {
            ...stateProps,
            ...dispatchProps,
            ...ownProps,
        }
    },
    // option 选项
    {
        pure: true,
        withRef: true,
    }
)
class TodoListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const {
            getTodoList,
        } = this.props

        getTodoList()
    }

    handleAddTodoClick = () => {
        this.props.addTodo({
            id: 0,
            title: '新任务',
            complete: false,
        })
    }

    render() {
        const {
            todoList: {
                todos,
                fetching,
            },
            removeTodo,
            router,
        } = this.props

        console.log(`todos.length = `, todos.length)    // eslint-disable-line

        return (
            <div className="todo-list">
                {
                    todos.map((todo) => {
                        const {
                            id,
                            complete,
                            title,
                        } = todo

                        return (
                            <Todo
                                key={id}
                                // key={index}
                                id={id}
                                complete={complete}
                                title={title}
                                remove={removeTodo}
                                router={router}/>
                        )
                    })
                }
                { fetching ? <div>loading...<br/><br/><br/></div> : null }
                <input type="button" className="button" onClick={this.handleAddTodoClick} value="新增任务"/>
            </div>
        )
    }
}

export default TodoListContainer
