import { Component } from "react";

const darkMode = {
    backgroundColor: "#151414",
    color: "ghostwhite",
    padding: "20px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "20px"
}

class FirstProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }
    render(){
        const { firstName } = this.props;
        
        return(
            <div style={this.state.light ? lightMode : darkMode}>
                <h2>This is a component</h2>
                <h3>The props name passed was: { firstName }</h3>
                <h2>Dark Mode</h2>
                <button id="button"onClick={ () => {this.setState({light : !this.state.light})} }>{this.state.light ? "Off" : "On"}</button>            
            </div>
        );
    }
}

export default FirstProps;