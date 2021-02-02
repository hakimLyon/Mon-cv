/* eslint-disable jsx-a11y/heading-has-content */
import React, {Component} from 'react';
import Experience from './Experience';
import Diplomes from './Diplomes';
import Competences from './Competences';
import Certificat from './Certificat';



class ImprimerCV extends Component {
     imprimer=()=> {
         
        
         window.print();
  

}
    render() {
        return(
            <div className="h-screnn justify-center items-center bg-white">
                <div >
                    <h2>{this.props.title}</h2>
                    <button  onClick={this.imprimer}>Cliquez Ici</button>
                    
                </div>
                <h1 >CURRICULUM VITAE</h1>
                 <br/>
                 <div>
                 </div>
                <div className="h-60 animate-none">
                    <Experience title="Experiences"/>
                </div>
                 <br/>
                 <div className="h-81">
                    <Diplomes title="Diplomes"/>
                </div>
                 <br/>
                <div>
                    <Competences title="Competences" />
                </div>
                 <br/>
                <div>
                    <Certificat title="Certificats"/>
                </div>
                
            </div>
        )
    }
}

export default ImprimerCV;
