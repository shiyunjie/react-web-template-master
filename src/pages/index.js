/**
 * @since 2016-10-24 09:01
 * @author vivaxy
 */

import render from '../util/render'
import routes from '../router'

/* 网站入口,注意render方法*/
export default () => {
    return render(routes)
}
