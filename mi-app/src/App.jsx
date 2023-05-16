import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./main.css"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={<ItemListContainer/>}/> 
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category" element={<ItemListContainer/>}/> 
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/> 


        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;