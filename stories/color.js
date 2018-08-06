import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf("Color", module).add("Default", () => {
    const ColorList = [
        {
            value: "#00ACAC",
            title: "primary 01",
        },
        {
            value: "#004b64",
            title: "primary 02",
        },
        {
            value: "#f84743",
            title: "support 01",
        },
        {
            value: "#FEC928",
            title: "support 02",
        },
        {
            value: "#00d263",
            title: "support 03",
        },
        {
            value: "#000000",
            title: "text color",
        },
        {
            value: "#f3f5f6",
            title: "background color",
        },
    ]

    return (
        <ul style={{
            display: "flex",
            flexWrap: "wrap",
        }}>
            {ColorList.map(({title, value}) => {
                return (
                    <li style={{
                        position: "relative",
                        width: 200,
                        height: 200,
                        backgroundColor: value,
                        marginBottom: 50,
                    }}
                        key={title}>
                            <span style={{
                                position: "absolute",
                                width: "100%",
                                bottom: "-50px",
                                left: 0,
                                lineHeight: "50px",
                                textAlign: "center",
                            }}>{title}: <b>{value}</b>
                            </span>
                    </li>
                )
            })}
        </ul>
    )
})
