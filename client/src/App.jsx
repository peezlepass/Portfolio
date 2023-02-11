import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/HomePage/Home";
import Portfolio from "./components/HomePage/Portfolio";
import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import Todo from "./components/Todo/Todo";
import ProjectSolo from "./components/ProjectSolo/ProjectSolo";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { useReducer } from "react";
import userReducer from "./reducers/userReducer";
import { globalContext as GlobalContext } from "./context/globalContext";

function App() {
  const localUser = localStorage.getItem("portfolio.user");

  const initialState = { user: localUser ? JSON.parse(localUser) : null };
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/project-solo" element={<ProjectSolo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
