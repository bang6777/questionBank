import React,{Component} from 'react';
import {Link, Route} from 'react-router-dom';
import StudentHeader from './StudentHeader';
import Menu from './Menu';
import IndexTest from './Test/IndexTest';
import Test from './Test/Test';
class PageStudent extends Component{
    render(){
        return(
              <div>
                  <Route exact path="/student" component={IndexTest} />
                    <Route exact path="/student/test-start" component={Test} />
                 
              </div>
        )
    };  
}
export default PageStudent;