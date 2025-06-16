import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShowMovie from "./components/ShowMovie";
import UpdateMovie from "./components/UpdateMovie";
import AddMovie from "./components/AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ShowMovie/>}/>
          <Route path="/add" element={<AddMovie/>}/> 
          <Route path="/update/:id" element={<UpdateMovie/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
