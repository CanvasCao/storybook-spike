import React from 'react';
import {storiesOf} from '@storybook/react';
import NavBar from "./index";


storiesOf('NavBar')
    .addWithInfo(
        '导航栏',
        `123`,
        () => (
            <NavBar list={['PXD', "PXE", 'PXD', "PXE"]}></NavBar>
        ),
    )



