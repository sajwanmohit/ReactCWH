import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

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
    } else {
      setMode("light");
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    //JSX (Javascript XML)
    <>
      <div
        className="main"
        style={{ backgroundColor: mode === "dark" ? "grey" : "white" }}
      >
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <TextForm
          showAlert={showAlert}
          heading="Enter a text to analyze below"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
    //JSX END
  );
}

export default App;
