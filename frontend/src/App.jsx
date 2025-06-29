import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = () => {
  return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default App;