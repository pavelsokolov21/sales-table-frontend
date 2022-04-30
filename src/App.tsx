import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { ProductCreation } from "./pages/product-creation";

export const App = () => (
  <BrowserRouter>
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/product">
          <Route path="create" element={<ProductCreation />} />
        </Route>
      </Routes>
    </main>
  </BrowserRouter>
);
