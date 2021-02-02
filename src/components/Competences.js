import React from 'react';



const Competences =(props)=>{
    return(
    <div>
      <div className="titrecv">
        <h3>{props.title}</h3>
        <hr  />
        
      </div>
      <div>
        <p>• Administration de bureau</p>
        <p>• Résolution des problèmes informatiques</p>
        <p>• Ventes en Lignes</p>
        <p>• Création de site Web</p>
        <p>• Configuration de réseau CISCO</p>
        <p>• React Native</p>
        <p>• GitHub</p>
        <p>• HTML, JavaScript et Python</p>
        <p>• Adaptation aux nouvelles technologies</p>
      </div>
    </div>
  )
}

export default Competences;