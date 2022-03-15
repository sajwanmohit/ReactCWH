import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    //JSX (Javascript XML)
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter a text to analyze below" />
      </div>
    </>
    //JSX END
  );
}

export default App;
