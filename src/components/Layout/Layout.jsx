import React from 'react';
import "../../components/Layout/Layout.css";
import { SidebarMenu } from '../../Data/data';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
    <div className="main">
        <div className="layout">
            <div className="sidebar">
              <div className="logo">Logo
              <h6>Hospital</h6>
              <hr/>
              </div>
                <div className="menu">
                  {SidebarMenu.map(menu =>{

                    
                    return(


                      <>
                      <div className="menu-item">
                        
                        <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                      </div>
                      
                      </>
                    )
                  })}
                </div>
              
            </div>
            <div className="content">
                <div className="header">Header</div>
                <div className="body">{children}</div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Layout;
