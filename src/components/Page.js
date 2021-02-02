import React, {Component} from 'react';

import Accueil from './Accueil';
import Certificat from './Certificat';
import Experience from './Experience';
import Diplomes from './Diplomes';
import Competences from './Competences';
import '../Semantic/components/label.min.css';
import ImprimerCV from './ImprimerCV';




class Page extends Component{
    
  
   
  showPage = (event) =>{
   
 

        document.querySelectorAll('.ContenuPage').forEach(t=>{
          t.style.display ="none";
        });

        let page = event.target.dataset.page;

        document.querySelectorAll('.ContenuPage').forEach(u=>{
          u.style.animationPlayState ='paused';
        });
          
          document.querySelector(`#${page}`).style.display = 'block';
          
          document.querySelector('#accueil').style.display = 'none';
          document.querySelector(`#${page}`).style.animationPlayState ='running';
          document.querySelector('#accueil').style.animationPlayState ='paused';
         

          if(page === 'accueil'){
            document.querySelector('#accueil').style.display = 'block';
            document.querySelector('#accueil').style.animationPlayState ='running';
            
          }

          if(page ==='page5'){
            document.querySelector('#pages').style.position = 'relative';
          }
         
          else{
            document.querySelector('#pages').style.position = 'fixed';
          }
          
          if( window.innerWidth <= 825 ){
                 document.querySelector('#pages').style.position = 'relative';
           }
          
        
      
  }
  
  
  render(){
   
   
    return (
      <div id="pages" >
        <div  className="ui ribbon label" >
             <button className="ui button" onClick={this.showPage} data-page="accueil">Accueil</button>
             <button className="ui button" onClick={this.showPage} data-page="page1">Experience</button>
             <button className="ui button" onClick={this.showPage} data-page="page2">Diplomes</button>
             <button className="ui button" onClick={this.showPage} data-page="page3">Competences</button>
             <button className="ui button" onClick={this.showPage} data-page="page4">Certificat</button>
             <button className="ui button" onClick={this.showPage} data-page="page5">Imprimer</button>
             
             
        </div>
      
      
       <div className="ui center aligned container" >
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