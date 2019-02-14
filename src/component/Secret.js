import React, {Component} from "react"

export default class Secret extends Component{
    render(){
        return (
            <div>
                This is a super secret area
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}