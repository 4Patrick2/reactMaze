import Navbar from "./Navbar"
import Food from "./pages/Food"
import Maze from "./pages/Maze"
import Home from "./pages/Home"
import { Route, Routes} from "react-router-dom"

function App() {
  // let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = Home
  //     break
  //   case "/Maze":
  //     Component = Maze
  //     break
  //   case "/Food":
  //     Component = Food
  //     break
  // }

  

  return (
    <>
      <Navbar />
      <div className="container">
        {/* // <Component />  */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Maze" element={<Maze />} />
            <Route path="/Food" element={<Food />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
