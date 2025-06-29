import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/api/v1/auth/signin", form);
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;