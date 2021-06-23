import React from "react";
import Container from "../../shared/Container";
import Header from "../Header";
import Table from "../../shared/Table";
import "./App.css";




function App() {

  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
