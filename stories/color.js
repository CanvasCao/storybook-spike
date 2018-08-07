import React from 'react';
import {storiesOf} from '@storybook/react';


const liStyle = {
    position: "relative",
    width: 200,
    height: 200,
    marginBottom: 50,
}

const spanStyle = {
    position: "absolute",
    width: "100%",
    bottom: "-50px",
    left: 0,
    lineHeight: "50px",
    textAlign: "center",
}

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
storiesOf("Color", module).add("Default", () => {
    return (
        <ul style={{
            display: "flex",
            flexWrap: "wrap",
        }}>
            {ColorList.map(({title, value}) => {
                return (
                    <li style={{background: value, ...liStyle}} key={title}>
                        <span style={spanStyle}>{title}: <b>{value}</b></span>
                    </li>
                )
            })}
        </ul>
    )
})
