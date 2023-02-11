import { useContext } from "react";
import { globalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatch } = useContext(globalContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    dispatch({ type: "LOGIN", payload: result.user });
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-full-body">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 text-xl">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-transparent border border-button px-4 py-2 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-transparent border border-button px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="rounded-full bg-button rounded self-center px-4 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
