import React from "react"
import {configure, addDecorator, setAddon} from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import "../src/styles/base.scss"
import "../src/ant-styles"
import {Container} from "./Container"


addDecorator(story => <Container story={story}/>)
setAddon(infoAddon);

function importAll(r) {
    r.keys().forEach(r)
}

function loadStories() {
    require("../stories/color")
    require("../stories/typography")
    require("../stories/button")
    importAll(require.context("../src/components", true, /\-story\.js$/))
}

configure(loadStories, module);