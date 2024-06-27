import "./App.css";
import CistercianNbComponent from "./components/CistercianNb/CistercianNb";

function App() {
  return (
    <>
      <h1>Cistercian Clock</h1>
      <CistercianNbComponent
        nb={10}
        unite={{
          one: true,
          two: false,
          three: false,
          four: false,
          five: false,
        }}
        dizaine={{
          one: false,
          two: false,
          three: true,
          four: false,
          five: false,
        }}
      ></CistercianNbComponent>
    </>
  );
}

export default App;
