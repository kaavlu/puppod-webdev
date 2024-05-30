// App.tsx

import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Home />
    </Container>
  );
};

export default App;