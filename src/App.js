import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
const  App=()=> {
  return (
    <>
     <div className="min-h-screen md:h-screen">
      <div className="gradient-bg-welcome md:h-screen ">
        <Navbar/>
        <Welcome/>
      </div>
     </div>
    </>
  );
}

export default App;
