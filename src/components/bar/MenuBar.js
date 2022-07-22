import React from "react";
import classnames from 'classnames';
//module styles
import barStyle from './index.module.less';

let classNames = classnames.bind(barStyle);

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'bar'
        }
    };

    render() {
        const bars = classNames(barStyle['bar'], barStyle['bar-light']);
        return (
            <div className={bars} role={this.state.role}>
                <div className={barStyle['bar-inner']}>
                    bar
                </div>
            </div>
        )
    }
}

export default MenuBar;