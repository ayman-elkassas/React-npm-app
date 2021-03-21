import React, {Component} from 'react'

class Form extends Component{

    state={
        name:""
    }

    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.name)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>

                {this.state.name}

            </div>
        )
    }
}

export default Form