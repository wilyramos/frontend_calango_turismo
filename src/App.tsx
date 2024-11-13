import FooterSection from "./components/FooterSection"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Recomendations from "./pages/Recomendations"


export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/login" element={<Login />} />

        <Route path="/categories" element={<div>Categories</div>} />
        <Route path="/saved" element={<Recomendations />} />

      </Routes>
      <FooterSection />
    </Router>
    </div>
  )
}
