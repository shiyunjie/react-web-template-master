/**
 * Created by shiyunjie on 17/5/10.
 */
import * as server from '../src/constant/server'
import fetchMock from 'fetch-mock'
import getSearchListJson from './json/getSearchList.json'

export const getSearchMock = fetchMock.mock(new RegExp(`/${server.GET_SEARCH_LIST_METHOD}`), (url, opts) => {
    console.log(`fetchMock Search, opts = `, url, opts)    // eslint-disable-line


    return new Promise((resolve,) => {
        const result = getSearchListJson

        resolve(JSON.stringify(result))
    })
})
