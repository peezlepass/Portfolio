import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Task from "./Task";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Task />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
