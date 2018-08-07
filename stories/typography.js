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
                <td>备注</td>
            </tr>
            <tr>
                <td>14px</td>
                <td>I am font</td>
                <td>备注</td>
            </tr>
            <tr>
                <td>16px</td>
                <td>I am font</td>
                <td>备注</td>
            </tr>
            <tr>
                <td>18px</td>
                <td>I am font</td>
                <td>备注</td>
            </tr>
            <tr>
                <td>20px</td>
                <td>I am font</td>
                <td>备注</td>
            </tr>
        </tbody>
    )
})
