import React, {Component} from 'react'
import './item.css'

class Item extends Component{

    render(){

        // const {id,name,age}=this.props
        //this equivalent object method
        const {items}=this.props

        let theItems=items.map((item,key) => {
            return typeof item=='object'?(
                <div className="items" key={key}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            ):(
                <div>
                    <p>There is no elements</p>
                </div>
            )
            
        })

        return(
            <div>
                {theItems}
            </div>
        )
    }
}

export default Item