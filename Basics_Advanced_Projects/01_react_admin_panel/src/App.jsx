import TopNavbar from "./scenes/global/TopNavbar.jsx";
import { ColorModeContext, useMode } from "./theme.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/Dashboard.jsx";
import Team from "./scenes/Team.jsx";
import Invoices from "./scenes/Invoices.jsx";
import Contacts from "./scenes/Contacts.jsx";
import Bar from "./scenes/Bar.jsx ";
import Form from "./scenes/Form.jsx";
import Line from "./scenes/Line.jsx";
import Pie from "./scenes/Dashboard.jsx";
import Faq from "./scenes/Faq.jsx";
import Geography from "./scenes/Geography.jsx";
import Calender from "./scenes/Calender.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopNavbar />
            <Routes>
              <Route path="/" element={Dashboard}></Route>
              <Route path="/Line" element={Line}></Route>
              <Route path="/Pie" element={Pie}></Route>
              <Route path="/Team" element={Team}></Route>
              <Route path="/Bar" element={Bar}></Route>
              <Route path="/Form" element={Form}></Route>
              <Route path="/Invoices" element={Invoices}></Route>
              <Route path="/Contacts" element={Contacts}></Route>
              <Route path="/Faq" element={Faq}></Route>
              <Route path="/Geo" element={Geography}></Route>
              <Route path="/Calender" element={Calender}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;