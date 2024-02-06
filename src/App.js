import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login_Page";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import { UserContext } from "./Context/UserContext";

function App() {
  // Use this context to store data locally
  const [Store, setStore] = useState({
    isLoggedIn: false,
    user_name: null,
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
    <UserContext.Provider value={{ Store, setStore }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
