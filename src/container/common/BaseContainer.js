/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import './BaseContainer.pcss'
import React, {PropTypes, PureComponent, cloneElement,} from 'react'

class BaseContainer extends PureComponent {

    static defaultProps = {
        children: [],
        location: '',
    }

    static propTypes = {
        children: React.PropTypes.node,
        location: PropTypes.object,
    };
// 设置了页面头部和尾部，
    /*
     cloneElement() 克隆并返回一个新的 ReactElement （内部子元素也会跟着克隆），
     新返回的元素会保留有旧元素的 props、ref、key，也会集成新的 props（只要在第二个参数中有定义）
     */
    // key 就是组件设置一个key  location.pathname 就是访问的路径 不会重复
    render() {
        const {
            children,
            location,
        } = this.props

        return (
            <div className="base">
                <header>
                    React Webpack Template
                </header>
                <div className="content">
                    {cloneElement(children, {
                        key: location.pathname,
                    })}
                </div>
                <footer>
                    copyright
                </footer>
            </div>
        )
    }

}

export default BaseContainer
