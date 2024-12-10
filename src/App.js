import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grandfather from "./family/Grandfather";
import Home from "./Home";
import Grandmother from "./family/Grandmother";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Grandfather" element={<Grandfather/>}/>
          <Route path="Grandmother" element={<Grandmother/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
