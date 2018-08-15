import React from 'react';
import {storiesOf} from '@storybook/react';
import './responsive.scss'
import {Button, Col, Row} from "antd";

storiesOf("Responsive", module).add("Default", () => {
    let isMobile = false

    return (
        <div>
            <Button onClick={() => {
                if (!isMobile) {
                    window.top.document.querySelectorAll('.Pane1')[0].style.width = '810px'
                } else {
                    window.top.document.querySelectorAll('.Pane1')[0].style.width = 'auto'
                }
                isMobile = !isMobile
            }}>change screen
            </Button>

            <br/>
            <br/>

            <Row className='row'>
                <Col className='col' xs={12} md={6}>
                    <div
                        onMouseDown={() => {
                            console.log("mouse")
                        }}
                        onTouchStart={() => {
                            console.log("touch")
                        }}
                    >123
                    </div>
                </Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
                <Col className='col' xs={12} md={6}>Col</Col>
            </Row>
        </div>

    )
})
