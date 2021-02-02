import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contact:this.props.contact,
      email:this.props.email,
      emailInput:'',
      contactInput:''
    }
  }

  UpdateContactInput=(event)=>{
    this.setState({
      contactInput:event.target.value
    })
  }

ChangeContact=(event)=>{
  let newContact = event.target.value;
  if(event.key === 'Enter'){
    this.setState({
      contact:newContact,
    })
    document.querySelectorAll('.DefaultContact').forEach(contact=>{
      contact.style.display ='none';
    })
  }
}


  UpdateEmailInput=(event)=>{
    this.setState({
      emailInput:event.target.value,

    })
  }
  ChangeEmail=(event)=>{
    let newEmail=event.target.value;
    if(event.key === 'Enter'){
      this.setState({
      email:newEmail,
      emailInput:''
    })
    }
    
    
  }
  render() {return(
        <div>
          <div>
          <h4>Email</h4>
          <input className="changeInput" value={this.state.emailInput} onChange={this.UpdateEmailInput} onKeyPress={this.ChangeEmail}/>
          <a  target="email"  className="App-link" href={'mailto:'+this.state.email}>{this.state.email}</a>
          </div>
          <div>
            <h4>Tel</h4>
            <textarea className="changeInput" value={this.state.contactInput} onChange={this.UpdateContactInput} onKeyPress={this.ChangeContact} />
            <div id="ContentObjectif">
                <center>{this.state.contact}</center>
            </div>
          </div>

          <div className="DefaultContact">
            
            Dakar, Sénégal
            <dt>{this.props.tel}</dt>
            <dt>{this.props.nais}</dt>
          </div>
          <div className="DefaultContact">
            <h4>LinkedIn</h4>
            <a className="App-link"  target='link' rel="noopener noreferrer" href="https://www.linkedin.com/in/hakim-gueye-20a6511b3/">
                Compte LinkedIn
            </a>
          </div>
            <br/>
            <br />
            <br />
            <br/>
            <br />
          


         
        </div>
      )}
      
}

Contact.defaultProps ={
  email:"beatsjordy@gmail.com" 
}

export default Contact;