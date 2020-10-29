import React,{Component} from 'react';
import AddNewQuesstion from '../PageMain/AddNewQuesstion';
import ListQuesstion from '../PageMain/ListQuesstion';
import Menu_body from './Menu_body';
import Menu_sidebar from './Menu_sidebar';
class Sidebar extends Component{
    render(){
        return(
            <div className="main-content">
                <div className="container-fluid">
                    <div className="row">
                    <Menu_sidebar />
                    <Menu_body />
                    {/* <AddNewQuesstion /> */}
                    {/* <ListQuesstion /> */}
                    </div>
                </div>
            </div>
        )
    };
}
export default Sidebar;