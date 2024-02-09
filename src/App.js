import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Career from "./pages/Career";
import JobApply from "./pages/JobApply";
import ContactForm from "./components/form/ContactForm";
import Service from "./pages/Service";

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
            <Route path="/opening/:id" element={<JobApply />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
