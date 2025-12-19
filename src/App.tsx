import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./routes/home-page";
import AssetPage from "./routes/management-page";
import ProjectGridPage from "./routes/project-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/management" element={<AssetPage />} />
        <Route path="/projects" element={<ProjectGridPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;