import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import House from "./pages/house/House";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/houses" element={<List/>}/>
        <Route path="/houses/:id" element={<House/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;