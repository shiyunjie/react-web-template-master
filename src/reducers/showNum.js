/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'

const initialState = {
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

export default createReducer(initialState, {
    [actionType.SHOW_NUM]: (state, action) => {
        const newArray = [...state.numArray,]
        const item = newArray[action.index]

        console.log(`item:`,item) // eslint-disable-line
        item.show = !item.show
        console.log(`newArray:`,newArray) // eslint-disable-line

        return {
            ...state,
            numArray: newArray,
        }
    },
})
