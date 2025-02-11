import TopNavbar from "./scenes/global/TopNavbar.jsx";
import { ColorModeContext, useMode } from "./theme.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./scenes/global/SideNavbar.jsx";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar isSidebar={isSidebar} />
          <main className="content">
            <TopNavbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
