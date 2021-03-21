import React, {Component} from 'react'
import {Link,NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <div>
                <ul>
                    <Link to="/">Home</Link>
                    <NavLink exact to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
            </div>
        )
    }
}

export default Nav