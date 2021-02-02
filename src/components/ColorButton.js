import React from 'react';



class ColorButton extends React.Component {
  changeColor =(event)=>{
  
           
    
      let color = event.target.dataset.color;
      
     
      document.querySelector('.App-header').style.background = color;
      
      document.querySelector('.ui.menu').style.background = color;
       
      if(color === 'rgba(165, 42, 42, 0.932)'){
        document.querySelector('.App-header').style.background = color;
         document.querySelector('.ui.menu').style.backgroundColor = 'rgb(182, 73, 73)';
      }
  }
  
     render(){
        return (
          <div className="colorBtn" >
            <button id='blue' className='ui button' data-color='rgba(0, 0, 255, 0.555)' onClick={this.changeColor}>Blue</button>
            <button id='orange' className='ui button' data-color='rgba(255, 102, 0, 0.692)' onClick={this.changeColor}>Orange</button>
            <button id="noire" className='ui button' data-color='rgba(128, 0, 128, 0.432)' onClick={this.changeColor}>Violet</button>
            <button id="verte" className='ui button' data-color="rgba(0, 128, 0, 0.623)" onClick={this.changeColor}>Verte</button>
            <button id="marron" className='ui button' data-color="rgba(165, 42, 42, 0.932)" onClick={this.changeColor}>Marron</button>
          </div>
        )
      }
}

export default ColorButton;