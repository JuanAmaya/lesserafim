import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import Layout from "./components/Layout";
import Brand from "./components/Pages/Brand";
import Members from "./components/Pages/Members";
import Work from "./components/Pages/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IntroPage />} />
          <Route path="brand" element={<Brand />} />
          <Route path="members" element={<Members />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
