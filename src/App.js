import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/textForm";

function App() {
  return (
    <>
      <Navbar title="My React SPA" aboutus="About Us" />
      <div className="container">
        <TextForm heading="Enter your text to analyse" />
      </div>
    </>
  );
}

export default App;
