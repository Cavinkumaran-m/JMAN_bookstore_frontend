import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Registeration";
import ForgotPassword from "./Pages/ForgotPassword";
import { useState } from "react";
function App() {
  // Use this context to store data locally
  const [Store, setStore] = useState({
    isLoggedIn: false,
    user_id: null,
    cart_items: null,
  });

  // to use context on other components
  // import { UserContext } from "./Context/UserContext";
  // import { useContext } from "react";
  // ...inside component function...
  // const {Store, setStore} = useContext(UserContext)
  // console.log(Store.isLoggedIn)
  // Store.setStore({<new data>})

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
