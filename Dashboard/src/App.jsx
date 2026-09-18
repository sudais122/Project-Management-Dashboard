import Aside from "./components/aside.jsx";
import Header from "./components/header.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

function App() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Aside />

      {/* Main area */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <Header />

        {/* Dashboard */}
        <main className="flex-1 overflow-auto px-4">
          <Dashboard />
        </main>

      </div>

    </div>
  );
}

export default App;