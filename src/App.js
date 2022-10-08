import Navbar from "./components/Navbar";
import Transaction from "./components/Transaction";
import Welcome from "./components/Welcome";
const  App=()=> {
  return (
    <>
     <div className="min-h-screen md:min-h-screen">
      <div className="gradient-bg-welcome md:min-h-screen">
        <Navbar/>
        <Welcome/>
        <Transaction/>
      </div>
     </div>
    </>
  );
}

export default App;
