import React, {Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Content from './content';
import About from './About';
import Nav from './nav';

class Home extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Nav></Nav>
                        <Route exact path="/" component={Content}></Route>
                        <Route path="/about" component={About}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home