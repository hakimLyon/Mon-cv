import React from 'react';
import tech from '../logo1.svg';
import tech1 from '../logo2.svg';




class Images extends React.Component{

    ShowBtn=()=>{
        document.querySelectorAll('.changeInput').forEach(changeInput=>{
            changeInput.style.display = 'block';
        });
         document.querySelectorAll('.titre').forEach(titre=>{
            titre.style.display = 'block';
        })
        document.querySelector('#modifier-btn').style.display ='none';
        document.querySelector('#annuler-btn').style.display ='block';
    }
  CancelBtn =()=>{
        document.querySelectorAll('.changeInput').forEach(Input=>{
            Input.style.display = 'none';
        });
         document.querySelectorAll('.titre').forEach(titr=>{
            titr.style.display = 'none';
        });
        document.querySelector('#modifier-btn').style.display ='block';
        document.querySelector('#annuler-btn').style.display ='none';
  }

    render(){
        return(
        <div className="imagesPhoto">
            <img className="img" src={this.props.src} alt="images" />
            <img className="img1" src={this.props.src1} alt="Images 1"/>
             <span>
              <h3 className="h3">Bienvenue sur Mon Curriculum Vitae</h3>
              <h4 className="h4">Vous pouvez creer votre propre cv en modifiant le style Actuelle</h4>
              <h5 className="h5">Cliquez sur le Boutton Modifier pour commencez a creer Votre propre cv ,
                  modifier la couleur du theme de votre choix puis imprimer le Cv creer.
              </h5>
              <div className="h5" id="modifier-btn">
                  <button className="ui buttom" onClick={this.ShowBtn}>Modifier</button>
              </div>
               
               <div id="annuler-btn">
                    <button className="ui buttom" onClick={this.CancelBtn}>Annuler</button>
               </div>
              
          </span>
        </div>
    )}
    
}


class Home extends React.Component{
    render(){
        return(
        <div className="home">
          <span>
              
              <center><h1>{this.props.title}</h1></center>
          </span>
          <Images 
          src={this.props.photo}
          src1={this.props.photo1}
          />
         
        </div>
    )
    }
    
}




class Accueil extends React.Component{
    
    render() {
         return(
         <div>
           <div>
               <Home 
               title="Curriculum Vitae"
               photo={tech}
               photo1={tech1}
               />
           </div>
           <div>
              
           </div>
         </div>
       )
    }
      
}


export default Accueil;