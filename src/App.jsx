import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Header />

      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
      <div className="my-40">my-40</div>
    </div>
  );
}

export default App;
