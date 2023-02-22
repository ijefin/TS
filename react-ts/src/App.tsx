import { Layout } from "./components/Layout";
import styled from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

const Box = styled.div`
  background-color: orange;
`;

function App() {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <div className="login-content">
            <Box>
              <h1>Faça login para continuar!</h1>
            </Box>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
            <label htmlFor="Senha">Senha</label>
            <input id="password" type="password" />
            <button>Entrar</button>
          </div>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
