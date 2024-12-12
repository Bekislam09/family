import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grandfather from "./family/Grandfather";
import Home from "./Home";
import Grandmother from "./family/Grandmother";
import Mother from "./family/Mother";
import Father from "./family/Father";
import Bekislam from "./family/Bekislam";
import Indira from "./family/Indira";


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
          <Route path="Bekislam" element={<Bekislam/>} />
          <Route path="Indira" element={<Indira/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
