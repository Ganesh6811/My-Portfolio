import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.page.jsx";
import AboutPage from "./About.Page.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
