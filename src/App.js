import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grandfather from "./family/Grandfather";
import Home from "./Home";
import Grandmother from "./family/Grandmother";
import Mother from "./family/Mother";
import Father from "./family/Father";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Grandfather" element={<Grandfather/>}/>
          <Route path="Grandmother" element={<Grandmother/>} />
          <Route path="Father" element={<Father/>} />
          <Route path="Mother" element={<Mother/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
