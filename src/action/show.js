/**
 * @fileoverview action todo
 * @since 2017-04-04 16:51
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'


export const IsShow = (index) => ({
    type: actionType.SHOW_NUM,
    index,
})
