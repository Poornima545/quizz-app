import { useState } from "react";
import { Link } from "react-router-dom";

 function Login() {
  const [login, setLogin] = useState({ userName: "", password: "", email: "" });

  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ userName: "", password: ""});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <br/>
        <input
          name="userName"
          placeholder="User name"
          value={login.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br/>
        <input
          name="password"
          placeholder="password"
          type="password"
          value={login.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
        <br/>
        <span>Not a Numberb yet?<Link to="/register">Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
