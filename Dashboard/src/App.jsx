import { Routes, Route, BrowserRouter } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout.jsx";
import Main from "./pages/Main.jsx";
import { Tasks } from "./pages/Tasks.jsx";
import { Calender } from "./pages/Calender.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Team } from "./pages/Team.jsx";
import { Projects } from "./pages/Projects.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Main />} />

          <Route path="/Projects" element={<Projects />} />

          <Route
            path="/Projects/:projectID"
            element={<ProjectDetails />}
          />

          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Calendar" element={<Calender />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;