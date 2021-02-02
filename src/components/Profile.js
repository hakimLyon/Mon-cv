import React from 'react';
import ScroolBars from './ScrollBars'
import tof from '../profile.jpg'


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
       
        <div  className=" border-2 block bg-red-300 pl-2 px-12 justify-between" >
           <ScroolBars>
          <span  >

            <h6  className='hidden'>Prenom & Nom : {this.state.changeNom}</h6>
            <input id="prenom" className="changeInput" value={this.state.changeNom} onKeyPress={this.ChangeName} onChange={this.UpdateName}/>
            <h1 className="nom ui header  mt-12 lg:text-2xl">{this.state.name}</h1>

            <h6 className='titre'>Profession : {this.state.changeProfession}</h6>
            <input id="input-profession" className="changeInput" value={this.state.changeProfession} onKeyPress={this.ChangeProfession} onChange={this.UpdateProfession}/>
            <h4 className="text-center ui header text-white mt-7 items-center lg:text-2xl ">{this.state.profession}</h4>
            
          </span>
            <div className="  ui medium image justify-center">
            <img className=" rounded-full mt-7 border-2  items-center justify-center " src={tof} alt="Photo_De_Profile" />
         </div>
         </ScroolBars>
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