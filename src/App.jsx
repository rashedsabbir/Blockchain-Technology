import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Shared/Navbar/Navbar";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="dark:bg-cyan-800 bg-cyan-50">
      <Navbar />
      {/* <Header /> */}
      <Test />
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
    </div>
  );
}

export default App;
