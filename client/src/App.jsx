import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/HomePage/Home";
import Portfolio from "./components/HomePage/Portfolio";
import About from "./components/HomePage//About";
import Contact from "./components/HomePage//Contact";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
