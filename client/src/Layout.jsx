import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <nav className="flex justify-center gap-x-5 pt-6 text-3xl pb-6">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/todo">Todo</Link>
        </nav>
      </header>
      <div className="max-w-3xl mx-auto">{children}</div>
      <footer>
        <nav className="flex justify-center gap-x-5 pt-6 text-lg pb-6">
          <a href="https://www.linkedin.com/in/ellina-shcherbaeva/">LinkedIn</a>
          <a href="https://github.com/peezlepass">GitHub</a>
          <a href="/">CV</a>
        </nav>
      </footer>
    </main>
  );
}
