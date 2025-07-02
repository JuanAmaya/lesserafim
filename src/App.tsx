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
        <Route path="/lesserafim/" element={<Layout />}>
          <Route index element={<IntroPage />} />
          <Route path="/lesserafim/brand" element={<Brand />} />
          <Route path="/lesserafim/members" element={<Members />} />
          <Route path="/lesserafim/work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
