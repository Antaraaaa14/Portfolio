import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      <Background />
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;