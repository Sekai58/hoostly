import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Career from "./pages/Career";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page" element={<Internship />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
