import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
   constructor(props: any){
      super(props)
      console.log('contrutor reached')
   }
  state = {
    name: "Daniel",
  };

  componentDidMount(){
     console.log('did mount reached')
  }

  componentDidUpdate(){
   console.log('did update reached')
  }
  
  render() {
     console.log('render reached')
    return (
      <div>
        <p>name:{this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Natalia " });
          }}>
          Click aqui!
        </button>
        <p>
          Olá {this.state.name} {this.props.name}, esse é um componente baseado
          em classe!!!
        </p>
      </div>
    );
  }
}
export default ClassComponent;
