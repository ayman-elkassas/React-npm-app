
//todo:functional component is component without state

const Stateless=(props)=>{

    //normal local object 
    let obj={
        name:"state"
    }

    return(
        <div>{props.title} {obj.name}</div>
    )
}

export default Stateless