import { ChakraProvider, Input, Box, Center } from "@chakra-ui/react";
import { Login } from "./services/login/Login";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box minHeight={`100vh`} backgroundColor={`#ee6521e2`}>
          <Center>
            <h1>Faça login para continuar!</h1>
          </Center>

          <Input size={"sm"} placeholder={`Seu email`} />
          <Input size={"sm"} placeholder={`Sua senha`} />

          <button onClick={Login}>Entrar</button>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
