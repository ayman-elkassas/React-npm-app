import React, {Component} from 'react'

class Params extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.match.params.test_params}</h2>
            </div>
        )
    }
}

export default Params