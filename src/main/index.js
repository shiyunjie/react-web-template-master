/**
 * @since 2017-04-04 18:36
 * @author chenyiqin
 */

import renderPage from '../pages/index'

renderPage()
// 如果有更新重新加载
if (module.hot) {
    module.hot.accept('../pages/index', () => {
        const renderNewPage = require('../pages/index').default

        renderNewPage()
    })
}
