import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Home DarkMode";
    } else {
      setMode("light");
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Home LightMode";
    }
  };
  return (
    //JSX (Javascript XML)
    <>
      <div
        className="main"
        style={{ backgroundColor: mode === "dark" ? "grey" : "white" }}
      >
        <Router>
          <Navbar
            title="TextUtils"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter a text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    </>
    //JSX END
  );
}

export default App;
