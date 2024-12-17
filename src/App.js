import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grandfather from "./family/Grandfather";
import Home from "./Home";
import Grandmother from "./family/Grandmother";
import Mother from "./family/Mother";
import Father from "./family/Father";
import Bekislam from "./family/Bekislam";
import Indira from "./family/Indira";
import Bayastan from "./family/Bayastan";
import Sabina from "./family/Sabina";


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
          <Route path="Bayastan" element={<Bayastan/>} />
          <Route path="Sabina" element={<Sabina/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
