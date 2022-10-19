import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/Menu" element={<p>Menu</p>} />
        <Route path="/order" element={<p>Your Order</p>} />
        <Route path="/admin" element={<p>LogIn</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
