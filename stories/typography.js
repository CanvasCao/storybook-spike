import React from 'react';
import {storiesOf} from '@storybook/react';
import './typography.scss'

storiesOf("Typography", module).add("Default", () => {
    return (
        <tbody>
            <tr>
                <td>12px</td>
                <td>I am font</td>
                <td>备注</td>
            </tr>
            <tr>
                <td>13px</td>
                <td>I am font</td>
                <td>filter提示，以及仅次于正文的内容</td>
            </tr>
            <tr>
                <td>14px</td>
                <td>I am font</td>
                <td>正文</td>
            </tr>
            <tr>
                <td>16px</td>
                <td>I am font</td>
                <td>重点内容</td>
            </tr>
            <tr>
                <td>18px</td>
                <td>I am font</td>
                <td>小标题</td>
            </tr>
            <tr>
                <td>20px</td>
                <td>I am font</td>
                <td>大标题</td>
            </tr>
        </tbody>
    )
})
