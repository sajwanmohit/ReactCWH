import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    //JSX (Javascript XML)
    <>
      <div className="main">
        <Navbar title="TextUtils" aboutText="About" />
          <TextForm heading="Enter a text to analyze below" />
        {/* <About /> */}
      </div>
    </>
    //JSX END
  );
}

export default App;
