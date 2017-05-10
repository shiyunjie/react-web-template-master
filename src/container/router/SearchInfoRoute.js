/**
 * @since 2017-04-20 11:40
 * @author chenyiqin
 */

import React from 'react'
import SearchInfoContainer from '../SearchInfoContainer'

const SearchInfoRouteContainer = (props) => {
    const {
        router,
    } = props

    return (
        <SearchInfoContainer router={router}/>
    )
}

export default SearchInfoRouteContainer
