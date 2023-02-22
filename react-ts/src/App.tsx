import { ChakraProvider, Button, Input } from "@chakra-ui/react";
import { Login } from "./services/login/Login";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);
  const [inputValue, setinputValue] = useState("");

  const aumentar = () => {
    setValor(valor + 1);
  };

  const diminuir = () => {
    setValor(valor - 1);
  };

  const getValue = (e: any) => {
    setinputValue(e.target.value);
  };

  const showToast = () => {
    alert(inputValue);
  };

  return (
    <>
      <ChakraProvider>
        <Button onClick={aumentar}>Aumentar</Button>
        <h1>{valor}</h1>
        <Button onClick={diminuir}>Diminuir</Button>
        <h1>{valor}</h1>
        <Input value={inputValue} onChange={getValue} type={`text`}></Input>
        <h1>{inputValue}</h1>
        <Button onClick={showToast}>Show!</Button>
      </ChakraProvider>
    </>
  );
}

export default App;
