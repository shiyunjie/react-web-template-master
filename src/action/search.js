/**
 * Created by shiyunjie on 17/5/10.
 */
import * as actionType from '../constant/action-type'
import * as searchApi from '../api/search'

export const fetchingSearchList = (fetching) => {
    console.log(`fetchingSearchList `, fetching)    // eslint-disable-line

    return {
        type: actionType.FETCHING_SEARCH_LIST,
        fetching,
    }
}

export const setSearchFor = (searchFor) => ({
    type: actionType.SET_SEARCH_FOR,
    searchFor,
})

export const fetchSearchList = () => {
    return async (dispatch) => {
        console.log(`fetchSearchList `, dispatch)    // eslint-disable-line
        dispatch(fetchingSearchList(true))

        try {
            const json = await searchApi.findSearchList()

            console.log(`json = `, json)    // eslint-disable-line
            dispatch(getSearchList(json))
        } catch (ex) {
            console.log(`ex = `, ex)    // eslint-disable-line
        } finally {
            dispatch(fetchingSearchList(false))
        }
    }
}

export const getSearchList = (searchList) => ({
    type: actionType.GET_SEARCH_LIST,
    searchList,
})

