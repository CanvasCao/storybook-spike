import React, {Component} from "react"
import "babel-polyfill"

export class Container extends Component {
    render() {
        const {story} = this.props
        return (
            <div
                role="main"
                style={{
                    padding: "3em",
                    width: "100%"
                }}>
                {story()}
            </div>
        )
    }
}
