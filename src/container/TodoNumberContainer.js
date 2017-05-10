/**
 * Created by shiyunjie on 17/5/4.
 */
import './TodoNumberContainer.pcss'
// import * as action from '../action'
import action from '../action'
import React, {PureComponent,} from 'react'
import {connect,} from 'react-redux'
// import * as actionType from '../constant/action-type'
// import { bindActionCreators,} from 'redux'

@connect(
    state => ({
        showNum: state.showNum,
    }),
    action.show,
    // 不管是 stateProps 还是 dispatchProps ，都需要和 ownProps merge 之后才会被赋给 组件
    (stateProps, dispatchProps, ownProps) => {
        return {
            ...dispatchProps,
            ...stateProps,
            ...ownProps,
        }
    },
    // option 选项
    {
        pure: true,
        withRef: true,
    }
)
class NumberView extends PureComponent {


    constructor(props) {
        super(props)
        this.state = {
            numArray: [
                {num: 0, show: false,},
                {num: 1, show: false,},
                {num: 2, show: false,},
                {num: 3, show: false,},
                {num: 4, show: false,},
                {num: 5, show: false,},
                {num: 6, show: false,},
                {num: 7, show: false,},
                {num: 8, show: false,},
            ],
        }
    }

    componentDidMount() {
        console.log(`props:`, this.props) // eslint-disable-line
    }

    handleTodoShowNum = (index) => {
        // this.props.dispatch({type: actionType.SHOW_NUM, index,})
        console.log(`this.props.show`, this.props.show) // eslint-disable-line
        this.props.setShow(index)

        /*  const {numArray,} = this.state
         const newArray = [...numArray,]
         const item = newArray[index]

         item.show = !item.show

         this.setState({// eslint-disable-line
         numArray: newArray,
         })*/
    }
    handleSearchFor = () => {
        this.props.router.push('/search-info')
    }

    render() {
        const {numArray,} = this.props.showNum

        return (
            <div className="parent">
                {numArray.map((value, index) => {
                    return (
                        <div key={value.num} className="num" onClick={this.handleTodoShowNum.bind(this, index)}>
                            {value.show && value.num }
                        </div>)
                })}
                <input type="button" className="button" onClick={this.handleSearchFor} value="搜索页"/>
            </div>
        )
    }
}

export default NumberView
