/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import Experience from './Experience';
import Diplomes from './Diplomes';
import Competences from './Competences';
import Certificat from './Certificat';



class ImprimerCV extends Component {
     imprimer=()=> {
           document.querySelectorAll('.changeInput').forEach(changeInput=>{
            changeInput.style.display = 'none'});
         document.querySelectorAll('.titre').forEach(titre=>{
            titre.style.display = 'none'
        })
         document.querySelector('.colorBtn').style.display='none';
         document.querySelector('.ui.ribbon.label').style.display ='none';
         document.querySelector('#telechargerTitleBtn').style.display='none';
         document.querySelector('.curriculumVitae').style.display='block';
         
        
         
   window.print();
  

}
    render() {
        return(
            <div id="nofixed">
                <div id="telechargerTitleBtn">
                    <h2>{this.props.title}</h2>
                    <button className="ui button" onClick={this.imprimer}>Cliquez Ici</button>
                    
                </div>
                <h1 className="curriculumVitae">CURRICULUM VITAE</h1>
                <div>
                    <Experience title="Experiences"/>
                </div>
                <div>
                    <Diplomes title="Diplomes"/>
                </div>
                <div>
                    <Competences title="Competences" />
                </div>
                <div>
                    <Certificat title="Certificats"/>
                </div>
                <br/>
                <br />
                <br />
                <br/>
                <br />
                
            </div>
        )
    }
}

export default ImprimerCV;
