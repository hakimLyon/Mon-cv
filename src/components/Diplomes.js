import React from 'react';


const Diplomes =(props)=>{
  return(
    <div>
      <div className="titrecv">
        <h3>{props.title}</h3>
        <hr/>
        
      </div>
      <div>
        <article>
           <center>Bamako, Mali</center>
            <center>2010-2011</center> 
            <center>Diplôme d'Etudes Fondamentales DEF
                       Ecole Fondamentale Maridie Diarra
             </center>
        </article>
        <br />
        <article>
            <center>Bamako, Mali</center>  
            <center>2016-2017</center>
            <center>Diplômes de Baccalauréat Malien SÉRIE Science
                       Expérimentale (BAC)
                      <center>Lycée Mamadou Moctar Ba</center> 
                      <center>Moyenne D’admission : 13,39</center> 
                       Mention : Assez-Bien
             </center>
       
        </article>
        <br />
        <article>
          <center>Bamako, Mali</center>  
            <center>2018-2020</center>
            <center>Diplôme Universitaire de Technologie (DUT2) Analyse Programmation BAC+2
                       <br/> Université TechnoLab-ISTA
           </center>
             
        </article>   
        <br />
           


      </div>
       
    </div>
  )
}

export default Diplomes;