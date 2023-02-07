import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos!" />
    </>
  );
}

export default App;
