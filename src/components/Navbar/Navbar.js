import React, { Component } from 'react';
import { Button } from '../Button';
import {MenuI} from './MenuI';
import './Navbar.css';
import * as SiIcons from  'react-icons/si';
import * as FaIcons from  'react-icons/fa'

class Navbar extends Component {
    state = { clicked: false}
on
  handleClick =()=>{
      this.setState({ clicked: !this.state.clicked})
  }
    render(){
        return(
            <nav className="flex justify-center bg-black hover:bg-purple-500">
                <h1 className="flex justify-start text-white ">React<i className="fa fa-react"> <SiIcons.SiReact/></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? <FaIcons.FaTimes/> : <FaIcons.FaBars/>}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuI.map((item, index)=> {
                         return(
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                                  {item.title}
                              </a>
                            </li>
                      )
                    }
                     
                    )}
                    
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}
export default Navbar;