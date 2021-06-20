import React from "react";
import Button from "../Button";
import Header from "../Header";

import "./App.css";


function TestComponent () {
  return <img width="16px" src="https://i.pinimg.com/originals/5e/26/79/5e2679281fffe61007e13028b24602a1.png" 
  alt="icone" />
}

function App() {
  return (
    <div className="App">
      <Header title="Stock" />

      <div className="Container">

        <Button
         /*  content="Botão" */
          onClick={() => window.alert("Olá tudo bem com você!!!")}
          appendIcon={<TestComponent />}
        > 
        alert
     </Button>
      </div>
    </div>
  );
}

export default App;
