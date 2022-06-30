import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
