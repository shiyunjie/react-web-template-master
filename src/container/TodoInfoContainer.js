/**
 * @since 2017-04-18 15:24
 * @author chenyiqin
 */

import './TodoInfoContainer.pcss'
import * as action from '../action'
import React, {PureComponent,} from 'react'
import SearchView from '../component/SearchView'
// import { bindActionCreators, } from 'redux'
import {connect,} from 'react-redux'

@connect(
    state => ({
        todo: state.todo,
    }),
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
class TodoInfoContainer extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(`props:`, this.props) // eslint-disable-line
    }

    render() {
        // const {todo,} = this.props

        if (this.props.router.params.id && this.props.router.params.id === '1') {
            return (
                <SearchView/>
            )
        }

        return (
            <div className="todo" >id: {this.props.router.params.id}</div>
        )
    }

}

export default TodoInfoContainer
