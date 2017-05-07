/**
 * @since 2017-04-04 12:08
 * @author chenyiqin
 */

export default (initialState, handlers) => {
    return (state = initialState, action) => {
        // console.log(`handlers[action.type]:`,handlers[action.type]) // eslint-disable-line

        // console.log(`state:`,state) // eslint-disable-line

        return handlers[action.type] ? handlers[action.type](state, action) : state
    }
}
