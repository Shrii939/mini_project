import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navabar from "./components/Navabar";
import Ngo from './components/Ngo'
import User from "./components/User";
import Donate from "./components/Donate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navabar />
        <div className="mx-5 my-4">
          <Routes>

            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/ngo" element={<Ngo />}> </Route>
            <Route exact path="/user" element={<User />}> </Route>
            <Route exact path='/donate' element={<Donate />}> </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
