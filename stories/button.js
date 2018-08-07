import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'antd';


const btnStyle = {
    marginRight: 10
}

storiesOf('Button')
    .addWithInfo(
        '按钮类型',
        `按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。`,
        () => (
            <div>
                <Button style={btnStyle} type="primary">Primary</Button>
                <Button style={btnStyle}>Default</Button>
                <Button style={btnStyle} type="dashed">Dashed</Button>
                <Button style={btnStyle} type="danger">Danger</Button>
            </div>
        ),
    ).addWithInfo(
    '图标按钮',
    `当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。`,
    () => (
        <div>
            <Button style={btnStyle} type="primary" shape="circle" icon="search"/>
            <Button style={btnStyle} type="primary" icon="search">Search</Button>
            <Button style={btnStyle} shape="circle" icon="search"/>
            <Button style={btnStyle} icon="search">Search</Button>
            <Button style={btnStyle} type="dashed" shape="circle" icon="search"/>
            <Button style={btnStyle} type="dashed" icon="search">Search</Button>
        </div>
    ),
)


