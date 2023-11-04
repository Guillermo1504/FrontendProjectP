import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import ProfileUser from "./components/profile/profileUser";
import { AuthProvider } from "./context/registerContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileUser />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
