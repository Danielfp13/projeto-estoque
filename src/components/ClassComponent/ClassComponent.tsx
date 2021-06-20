import React from "react";

class ClassComponent extends React.Component< {name: string}>{
   state = {
      name:"Daniel"
   }
   render(){
      return  <div>
         <p>name:{ this.state.name }</p>
         <button onClick = { () =>{
            this.setState( {name: "Natalia "} )
         }}>Click aqui!</button>
         <p>Olá {this.state.name} {this.props.name}, esse é um componente baseado em classe!!!</p>
         </div>
   }
}
export default ClassComponent