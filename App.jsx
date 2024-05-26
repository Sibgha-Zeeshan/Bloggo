import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//components here
import ResponsiveAppBar from "./components/navbar";
import Home from "./pages/home";

//Importing theme Provider
import Theme from "./utils/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
          {/* <Home></Home> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
