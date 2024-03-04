import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/textForm";
import About from "./components/about";

function App() {
  return (
    <>
      <Navbar title="My React SPA" aboutus="About Us" />
      <div className="container my-3">
        {/* <TextForm heading="Enter your text to analyse" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
