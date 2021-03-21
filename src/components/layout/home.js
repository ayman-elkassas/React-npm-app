import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Content from './content';
import About from './About';
import Blog from './Blog';
import Nav from './nav';
import Params from './params';

class Home extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route exact path="/" component={Content}/>
                            <Route path="/about" component={About}/> 
                            <Route path="/blog" component={Blog}/> 
                            {/* any route with any params calling this component  */}
                            <Route path="/:test_params" component={Params}/>    
                        </Switch>
                         
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home