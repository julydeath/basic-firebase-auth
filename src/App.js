import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { UserAuthContext } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <h1>Firebase Auth</h1>
      <Navbar />
      <UserAuthContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContext>
    </div>
  );
}

export default App;
