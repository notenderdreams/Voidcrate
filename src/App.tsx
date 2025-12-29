import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/routes/home-page";
import ManagementPage from "@/routes/management-page";
import ProjectGridPage from "@/routes/project-page";
import AssetsPage from "@/routes/assets-page";
import SettingsPage from "@/routes/settings-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/projects" element={<ProjectGridPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
