import Panel from "./componentes/panel/Panel";
import "./index.css";

function App() {
  return (
    <>
      <h1 className="titulo">Bienvenidos al panel de control</h1>
      <p className="descripcion">
        Aqui podras ver toda tu informacion importante ✌️💙
      </p>
      <Panel />
    </>
  );
}

export default App;
