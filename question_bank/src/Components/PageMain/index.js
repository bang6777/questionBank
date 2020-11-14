import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
class MainPage extends Component{
    render(){
        return(
            <div>
                <Route  path="/"  component={HomePage} />
            </div>
        )
    };  
}
export default MainPage;