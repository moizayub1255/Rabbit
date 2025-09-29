import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>

        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
