import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/menu" element={<p>Menu</p>} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/order" element={<p>Your Order</p>} />
        <Route path="/admin" element={<p>LogIn</p>}>
          <Route path="setMenu" element={<p>set-menu</p>} />
          <Route path="orderQueue" element={<p>Order queue</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
