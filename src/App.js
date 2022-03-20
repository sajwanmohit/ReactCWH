import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
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
        <TextForm heading="Enter a text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
    //JSX END
  );
}

export default App;
