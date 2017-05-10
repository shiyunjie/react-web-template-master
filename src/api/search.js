/**
 * Created by shiyunjie on 17/5/10.
 */
import * as server from '../constant/server'
import fetch from '../util/fetch'

export const findSearchList = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_SEARCH_LIST_METHOD}`,
        data,
    })

    return result
}
