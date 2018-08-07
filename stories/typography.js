import React from 'react';
import {storiesOf} from '@storybook/react';
import './typography.scss'

storiesOf("Typography", module).add("Default", () => {
    return (
        <div className='typography'>
            <div>
                <span>12px</span>
                <span>I am font</span>
                <span>备注</span>
            </div>
            <div>
                <span>13px</span>
                <span>I am font</span>
                <span>filter提示，以及仅次于正文的内容</span>
            </div>
            <div>
                <span>14px</span>
                <span>I am font</span>
                <span>正文</span>
            </div>
            <div>
                <span>16px</span>
                <span>I am font</span>
                <span>重点内容</span>
            </div>
            <div>
                <span>18px</span>
                <span>I am font</span>
                <span>小标题</span>
            </div>
            <div>
                <span>20px</span>
                <span>I am font</span>
                <span>大标题</span>
            </div>
        </div>
    )
})
