/* eslint-disable array-callback-return */
import React, {Component} from 'react'
import axios from 'axios'
import './blog.css'

class Blog extends Component{

    state={
        users:[]
    }

    componentDidMount(){
        console.log(this.props)
        //res to receive promise out if success (resolve)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            this.setState({
                users:res.data
            })
        })
    }

    render(){

        //render these
        const userList=this.state.users.map((user,key)=>{
            return(
                <div className="user" key={user.id}>
                    {user.name} {user.username}
                </div>
            )
        });

        return(
            <div>
                <h2>Blog</h2>
                <p>This is about section</p>
                <div>
                    {userList}
                </div>
            </div>
        )
    }
}

export default Blog