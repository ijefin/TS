import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <Card cardId={1} stack="Front-end" menu="GO!"></Card>
      <Card cardId={2} stack="Back-end" menu="GO!"></Card>
      <Card cardId={3} stack="DBA" menu="GO!"></Card>
      <Card cardId={4} stack="DevOPS" menu="GO!"></Card>
    </>
  );
}

export default App;
