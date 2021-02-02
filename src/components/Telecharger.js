import React, {Component} from 'react';
import Experience from './Experience';
import Diplomes from './Diplomes';
import Competences from './Competences';
import Certificat from './Certificat';



class Telecharger extends Component {

     imprimer =()=> {
          document.querySelector('#telechargerTitleBtn').style.display='none';
         document.querySelector('.curriculumVitae').style.display='block'; 
         document.querySelector('#topbar').style.display='none';
         document.querySelector('#footer').style.display='none';

         
   window.print();
  

}
    render() {
        return(
            <div  id="nofixed">
                <div id="telechargerTitleBtn">
                    <h2>{this.props.title}</h2>
                    <button className="ui button" onClick={this.imprimer}>Ici</button>
                    
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
                
            </div>
        )
    }
}

export default Telecharger;
