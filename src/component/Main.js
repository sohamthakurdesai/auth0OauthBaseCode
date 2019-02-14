import React, {Component} from "react"

export default class Main extends Component{
    render(){
        return (
            <div>
                <p>
                Hello {this.props.name}, Welcome to auth0 Oauth demo!!!
                </p>
                <a
                    className="App-link"
                    href="/secret"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Secret Page
                </a>
                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            </div>
        )
    }
}