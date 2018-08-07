import React, {Component} from 'react';
import './App.css';
import "../src/ant-styles"
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar list={["PXD", "PXE"]}/>
            </div>
        );
    }
}

export default App;
