import React, {Component} from 'react';
import {Button} from "antd";

class NavBar extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='nav-bar'>
                {this.props.list.map((element, index) => {
                    if (index === 0) {
                        return <Button type='primary'>{element}</Button>
                    } else {
                        return <Button>{element}</Button>
                    }
                })}
            </div>
        );
    }
}

export default NavBar;
