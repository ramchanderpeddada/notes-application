import "./App.css";
import DataProvider from "./Components/context/DataProvider";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
