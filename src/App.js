import { Route, Routes } from "react-router-dom";

import AllRecipesPage from "./pages/AllRecipes.js";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllRecipesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
