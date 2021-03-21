import React, {Component} from 'react'

class Nav extends Component{
    render(){
        return(
            <div>
                <a href="#">Logo</a>
                <ul>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </ul>
            </div>
        )
    }
}

export default Nav