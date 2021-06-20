import React, { useState } from "react";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Header from "../Header";
import Input from "../../shared/Input";

import "./App.css";
import useEffect from 'react';

function TestComponent() {
  return (
    <img
      width="16px"
      src="https://i.pinimg.com/originals/5e/26/79/5e2679281fffe61007e13028b24602a1.png"
      alt="icone"
    />
  );
}

function App() {

  const[street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Button
          /*  content="Botão" */
          onClick={() => window.alert("Olá tudo bem com você!!!")}
          appendIcon={<TestComponent />}  >
          alert
        </Button>
        <Input label="Street" 
        placeholder="E.g.: 15h Avenue"
        value={ street }
        onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
