/**
 * @since 2017-04-18 15:24
 * @author chenyiqin
 */

import './TodoInfoContainer.pcss'
import * as action from '../action'
import React, {PureComponent,} from 'react'
// import { bindActionCreators, } from 'redux'
import {connect,} from 'react-redux'


const searchResult = [
    {
        category: 'Sporting Goods',
        products: [
            {
                name: 'football',
                cost: '49.99',
                discount: false,
            },
            {
                name: 'baseball',
                cost: '9.99',
                discount: false,
            },
            {
                name: 'basketball',
                cost: '29.99',
                discount: true,
            },
        ],
    },
    {
        category: 'Electronics',
        products: [
            {
                name: 'iPod Touch',
                cost: '99.99',
                discount: false,
            },
            {
                name: 'iPhone 5',
                cost: '399.99',
                discount: false,
            },
            {
                name: 'Nexus 7',
                cost: '199.99',
                discount: true,
            },
        ],
    },
]

const title = 'name price'

/* PureComponent改变了生命周期方法 shouldComponentUpdate ，
并且它会自动检查组件是否需要重新渲染。这时，只有PureComponent检测到 state 或者 props 发生变化时，
PureComponent才会调用 render 方法，因此，你不用手动写额外的检查，就可以在很多组件中改变 state*/
@connect(
    state => ({
        todo: state.todo,
    }),
    action.todo,
    // state => ({
    //     todoList: state.todoList,
    //     todo: state.todo,
    // }),
    // dispatch => bindActionCreators(action.todo, dispatch)
)
class TodoInfoContainer extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            checked: false,
            showResult: [],
        }
        this.timer = null
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    handleCheckbox = () => {
        const checked = !this.state.checked

        console.log(`handleCheckbox`) // eslint-disable-line
        this.setState({ // eslint-disable-line
            checked,
        })
    }


    handleOnChange = (e) => {
        // console.log(`handleOnChange:`, e.target.value) // eslint-disable-line
        this.setState({ // eslint-disable-line
            searchValue: e.target.value,
        })
        this.timer && clearTimeout(this.timer)

        this.timer = setTimeout(() => {
            const {searchValue,} = this.state
            const result = []

            console.log(`setTimeout:`, searchValue) // eslint-disable-line
            searchResult.forEach((item) => {
                const goods = []

                item.products.forEach((Value) => {
                    if (Value.name && Value.name.includes(searchValue)) {
                        goods.push(Value)
                    }
                })
                result.push({
                    category: item.category,
                    products: goods,
                })
            })
            this.setState({ // eslint-disable-line
                showResult: result,
            })
        }, 1000)
    }


    render() {
        const {searchValue, checked, showResult,} = this.state


        // const {todo,} = this.props
        if (this.props.router.params.id && this.props.router.params.id === '1') {
            return (
                <div className="search">
                    <input placeholder="Search..." value={searchValue} type="text" onChange={this.handleOnChange}/>
                    <div>
                        <input
                            type="checkbox" checked={checked}
                            onClick={this.handleCheckbox}/>
                        only show products in stock
                    </div>
                    <div >
                        <h2 style={{fontWeight: 'bold',}}>{title}</h2>
                    </div>
                    {showResult.map((value) => {
                        return (
                            <div key={`${value.category}`}>
                                <p
                                    style={{fontWeight: 'bold',}}>{checked || value.products.length === 0 ? null : value.category}</p>
                                {value.products.map((item) => {
                                    return (
                                        <div key={`${item.name}`}>
                                            <p
                                                style={item.discount ? {color: 'red',} : {}}>{`${item.name} $${item.cost}`}</p>
                                        </div>)
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        }

        return (
            <div className="todo">id: {this.props.router.params.id}</div>
        )
    }


}

export default TodoInfoContainer
