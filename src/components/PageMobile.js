import React, {Component} from 'react';


import '../Semantic/components/label.min.css';
import Telecharger from './Telecharger';




class PageMobile extends Component{
   
  
   
  
  
  render(){
   
   
    return (
      <div id="pageMobile" >
        <div className="ui center aligned container"  >

          <div id="page5"  >
            <Telecharger title="Telecharger le CV"/>
          </div>

        </div>

      </div>
     
    )
  
  }

}

export default PageMobile;