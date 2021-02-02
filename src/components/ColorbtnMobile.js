import React from 'react';



class ColorbtnMobile extends React.Component {

  colorEvent =(event)=>{
  
           
    
      let color = event.target.dataset.color;
      
     
      document.querySelector('.App-header').style.background = color;
      document.querySelector('#footer').style.background =color;
     
       
      if(color === 'rgba(165, 42, 42, 0.932)'){
        document.querySelector('.App-header').style.background = color;
         
      }
  }
  
     render(){
        return (
          <div className="colorBtnM" >
            <button  className='ui big button' data-color='rgba(0, 0, 255, 0.555)' onClick={this.colorEvent}>Blue</button>
            <button  className='ui big button' data-color='rgba(255, 102, 0, 0.692)' onClick={this.colorEvent}>Orange</button>
            <button  className='ui big button' data-color='rgba(128, 0, 128, 0.432)' onClick={this.colorEvent}>Violet</button>
            <button  className='ui big button' data-color="rgba(0, 128, 0, 0.623)" onClick={this.colorEvent}>Verte</button>
           
          </div>
        )
      }
}

export default ColorbtnMobile;