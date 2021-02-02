import React from 'react';
import Contact from './Contact';
import Profile from './Profile';
import tof from '../profile.jpg'





class Objectif extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      objectif:this.props.objectifChange,
      ObjectInput:'',
    }
  }

UpdateObjectifInput=(event)=>{
  this.setState({
     ObjectInput: event.target.value,
  })
}

ChangeObjectif=(event)=>{
  let obj = event.target.value;
  if(event.key ==='Enter'){
    this.setState({
      objectif:obj,
    })
    document.querySelector('#DefaultObjectif').style.display ='none';
  }
}

  render(){
    return (
      <div id="sidebarmobile" className="ui center aligned container">
        
        <div>
          <Profile
          src={tof} 
         />

        </div>
        <div id="ContentObjectif">
          <h1>Objectif </h1>
          <h6 className='titre'>Commencez à Saisir :</h6>
          <textarea className="changeInput" value={this.state.ObjectInput} onKeyPress={this.ChangeObjectif} onChange={this.UpdateObjectifInput}  />
          <p>{this.state.objectif}</p>
        <div id="DefaultObjectif">
          
          <p>Développeur web et technicien réseau <em>CISCO</em> débutant depuis maintenant <strong>2 ans</strong></p>
          <p>Je suis une personne rigoureuse, précise, qui apprécie l'informatique dans tous ses aspects.</p>
          <p>Décrocher ce poste me cherche à acquérir de nouvelles compétences encore trop peu exploitées jusqu'à aujourd'hui.</p>
        </div>
        <div>
          <Contact 
          tel="+221 765383755" 
          nais="18-08-1997"
          />
        </div>
        
      </div>
     

      </div>
      
      
    )
  }
}

export default Objectif;