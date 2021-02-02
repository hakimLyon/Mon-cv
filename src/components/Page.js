import React, {Component} from 'react';

import Accueil from './Accueil';
import Certificat from './Certificat';
import Experience from './Experience';
import Diplomes from './Diplomes';
import Competences from './Competences';
import '../Semantic/components/label.min.css';
import ImprimerCV from './ImprimerCV';




class Page extends Component{
   
  
   
  
  
  render(){
   
   
    return (
      <div  >
        
       <div  className="ui center aligned container" >
         <div className="accueil"  id="accueil">
           <Accueil title="Accueil"/>
           <div id="yy"></div>
         </div>
          <div className="ContenuPage"   id="page1">
            <Experience title="Experiences"/>
          </div>
          <div className="ContenuPage"  id="page2">
            <Diplomes title="Diplomes"/>
          </div>
         
          <div className="ContenuPage"  id="page3">
            <Competences title="Competences" />
          </div>
          <div className="ContenuPage"   id="page4">
            <Certificat title="Certification et Cours"/>
          </div>
          <div className="ContenuPage"   id="page5">
            <ImprimerCV title="Telecharger le CV"/>
          </div>

        </div>
     </div>
     
    )
  
  }

}

export default Page;