/**
 * Created by shiyunjie on 17/5/10.
 */

import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'

const initialState = {
    searchList: [],
    searchFor: '',
    fetching: false,
}

export default createReducer(initialState, {
    [actionType.FETCHING_SEARCH_LIST]: (state, action) => {
        return {
            ...state,
            fetching: action.fetching,
        }
    },
    [actionType.SET_SEARCH_FOR]: (state, action) => {
        return {
            ...state,
            searchFor: action.searchFor,
        }
    },
    [actionType.GET_SEARCH_LIST]: (state, action) => {
        return {
            ...state,
            searchList: action.searchList,
        }
    },
})

