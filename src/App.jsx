import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./component/Header";
import Country from "./screens/Country";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Themes from "../theme/theme.js";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeProvider theme={Themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Country />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
