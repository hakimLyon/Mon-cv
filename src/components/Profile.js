import React from 'react';




class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      profession:this.props.profession,
      changeNom:'',
      changeProfession:''

    }
  }

  ChangeName = (event)=>{
    
    if (event.key === 'Enter'){
      let newName = event.target.value;
      this.setState({
      name: newName,
      changeNom: ''
    })
    }
   
  }

  UpdateName=(event)=>{
    this.setState({
      changeNom: event.target.value,
    })
  }


   render() {
    return(
        <div  className="ui header" >
          <span id="profile" >

            <h6  className='titre'>Prenom & Nom : {this.state.changeNom}</h6>
            <input id="prenom" className="changeInput" value={this.state.changeNom} onKeyPress={this.ChangeName} onChange={this.UpdateName}/>
            <h1 id="nom">{this.state.name}</h1>

            <h6 className='titre'>Profession : {this.state.changeProfession}</h6>
            <input id="input-profession" className="changeInput" value={this.state.changeProfession} onKeyPress={this.ChangeProfession} onChange={this.UpdateProfession}/>
            <h4 id="profession">{this.state.profession}</h4>
            
          </span>
            <div className="ui small images ">
            <img className="photo" src={this.props.src} alt="Photo_De_Profile" />
         </div>
          
        </div>
      )
  }



  UpdateProfession =(event)=>{
    this.setState({
      changeProfession:event.target.value,
    })
  }

  ChangeProfession=(event)=>{
    let newProfession = event.target.value;

    if(event.key ==='Enter'){
      this.setState({
      profession: newProfession,
      changeProfession:''
    })
    }

    
  }
        
    }



    Profile.defaultProps = {
      name:'Hakim Gueye',
      profession:'Developpeur Web'
    };

export default Profile;