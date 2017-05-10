/**
 * @since 2017-04-18 15:24
 * @author chenyiqin
 */

import './TodoInfoContainer.pcss'
import action from '../action'
import React, {Component,} from 'react'
import SearchView from '../component/SearchView'
import {connect,} from 'react-redux'

@connect(
    state => ({
        search: state.search,
    }),
    action.search,
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
class SearchInfoContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const {
            fetchSearchList,
        } = this.props

        console.log(`props:`, this.props) // eslint-disable-line

        fetchSearchList()
    }

    render() {
        console.log(`render`) // eslint-disable-line
        const {
            search: {
                searchList,
                fetching,
                searchFor,
            },
            setSearchFor,
        } = this.props

        return (
            <div>
                <div className="todo-list">
                    { fetching ? <div>loading...<br/><br/><br/></div> : null }

                </div>
                <SearchView
                    searchResult={searchList}
                    setSearchFor={setSearchFor}
                    searchValue={searchFor}
                />
            </div>
        )
    }

}

export default SearchInfoContainer
