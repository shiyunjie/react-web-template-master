/**
 * @fileoverview action todo
 * @since 2017-04-04 16:51
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'


export const setShow = (index) => ({
    type: actionType.SHOW_NUM,
    index,
})
