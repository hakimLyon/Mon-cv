import React from 'react';
import '../Semantic/components/menu.css'
class MenuItem extends React.Component{
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
  

  render() {
  
    return(
       <div>
     
             <button className="btn btn-small b-transparent text-white focus-within:bg-red-500 " onClick={this.showPage} data-page="accueil">Accueil</button>
             <button className="btn btn-small text-white focus-within:bg-red-500" onClick={this.showPage} data-page="page1">Experience</button>
             <button className="btn btn-small text-white focus-within:bg-red-500" onClick={this.showPage} data-page="page2">Diplomes</button>
             <button className="btn btn-small text-white focus-within:bg-red-500" onClick={this.showPage} data-page="page3">Competences</button>
             <button className="btn btn-small text-white focus-within:bg-red-500" onClick={this.showPage} data-page="page4">Certificat</button>
             <button className="btn btn-small text-white focus-within:bg-red-500" onClick={this.showPage} data-page="page5">Imprimer</button>
            
             
        </div>
    )
  }

}

export default MenuItem;