import React, {Component} from 'react'

class ComponentLifeCycle extends Component{

    //todo:Arrange Calling
    //* 1- Constructor
    //* 2- render()
    //* 3- componentDidMount()
    //* 4- componentDidUpdate()

    constructor(){
        super()
        console.log('First Run')
    }

    render(){
        return(
            <div>
                <h1>LifeCycle</h1>
                <p>1- Constructor
                   2- render()
                   3- componentDidMount()
                   4- componentDidUpdate()</p>
            </div>
        )
    }

    componentDidMount(){
        console.log('component loaded and mounted')
    }

    componentDidUpdate(prevProps,prevState){
        //any change in state or props
        console.log('any change',prevProps,prevState)
    }

}

export default ComponentLifeCycle