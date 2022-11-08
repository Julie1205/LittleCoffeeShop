import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

import NavigationBar from "./components/NavigationBar";
import Menu from "./components/Menu";
import YourOrderPage from "./components/YourOrderPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/createAccount" element={<p>createAccount</p>} />
        <Route path="/order" element={<YourOrderPage/>} />
        <Route path="/admin" element={<p>LogIn</p>}>
          <Route path="setMenu" element={<p>set-menu</p>} />
          <Route path="orderQueue" element={<p>Order queue</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
