import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 bg-white shadow rounded" style={{ maxWidth: "500px", width: "100%" }} onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Login</h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            style={{ fontSize: "1.1rem", padding: "0.8rem" }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "1.1rem", padding: "0.8rem" }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" style={{ fontSize: "1.2rem", padding: "0.8rem" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
