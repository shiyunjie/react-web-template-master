/**
 * Created by shiyunjie on 17/5/4.
 */
import './SearchView.pcss'
import React, {PropTypes, PureComponent,} from 'react'

class SearchView extends PureComponent {
    static defaultProps = {
        searchResult: [
            // {
            //     category: 'Sporting Goods',
            //     products: [
            //         {
            //             name: 'football',
            //             cost: '49.99',
            //             discount: false,
            //         },
            //         {
            //             name: 'baseball',
            //             cost: '9.99',
            //             discount: false,
            //         },
            //         {
            //             name: 'basketball',
            //             cost: '29.99',
            //             discount: true,
            //         },
            //     ],
            // },
            // {
            //     category: 'Electronics',
            //     products: [
            //         {
            //             name: 'iPod Touch',
            //             cost: '99.99',
            //             discount: false,
            //         },
            //         {
            //             name: 'iPhone 5',
            //             cost: '399.99',
            //             discount: false,
            //         },
            //         {
            //             name: 'Nexus 7',
            //             cost: '199.99',
            //             discount: true,
            //         },
            //     ],
            // },
        ],
        title: 'name price',
        searchValue: '',

    }
    static propTypes = {
        searchResult: PropTypes.array,
        title: PropTypes.string,
        searchValue: PropTypes.string,
        setSearchFor: PropTypes.func,

    }

    constructor(props) {
        super(props)
        this.state = {
            searchValue: this.props.searchValue,
            checked: false,
            showResult: [],
        }
        this.timer = null
    }

    componentWillReceiveProps(nextProps) {
        const {showResult,} = nextProps

        console.log(`componentWillReceiveProps`, nextProps) // eslint-disable-line

        if (showResult !== this.state.showResult) {
            this.setState({showResult,}, this.handleSearchFor())// eslint-disable-line
        }
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)      // eslint-disable-line
    }

    handleCheckbox = () => {
        const checked = !this.state.checked

        console.log(`handleCheckbox`) // eslint-disable-line
        this.setState({ // eslint-disable-line
            checked,
        })
    }
    handleSearchFor = () => {
        this.timer && clearTimeout(this.timer)      // eslint-disable-line

        this.timer = setTimeout(() => {
            const {searchValue,} = this.state
            const result = []

            console.log(`setTimeout:`, searchValue) // eslint-disable-line
            this.props.searchResult.forEach((item) => {
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

    handleOnChange = (e) => {
        // console.log(`handleOnChange:`, e.target.value) // eslint-disable-line
        this.setState({ // eslint-disable-line
            searchValue: e.target.value,
        })
        this.props.setSearchFor(e.target.value)
        this.handleSearchFor()
    }

    render() {
        const {searchValue, checked, showResult,} = this.state
        const {title,} = this.props

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
                {showResult && showResult.map((value) => {
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
}
export default SearchView
