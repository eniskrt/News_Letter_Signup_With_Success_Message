import { useState } from "react";
import MainCard from "./components/main-card/MainCard";
import SuccessCard from "./components/success-card/SuccessCard";
import "./style.scss";
import { Container } from "react-bootstrap";
import AppRouter from "./routes";



function App() {
  
  const [email, setEmail] = useState("")

  return (
    <AppRouter/>
  );
}

export default App;
