import React,{Component} from 'react';
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
                    </div>
                </div>
            </div>
        )
    };
}
export default Sidebar;