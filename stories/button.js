import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from 'antd/lib/button';

storiesOf('Button')
    .addWithInfo(
        '按钮类型',
        `按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。`,
        () => (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>

        ),
    );