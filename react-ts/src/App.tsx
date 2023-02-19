import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="login-content">
          <h1>Faça login para continuar!</h1>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="Senha">Senha</label>
          <input id="password" type="password" />
          <button>Entrar</button>
        </div>
      </Layout>
    </>
  );
}

export default App;
