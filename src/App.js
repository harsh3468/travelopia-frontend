import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
import BookingDetail from "./components/BookingDetail";
import BookingForm from "./components/BookingForm";
import Home from "./components/Home";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route  path="/"  exact element={<Home/>}></Route>
      <Route path="/booking/form" exact element={<BookingForm/>} />
      <Route path="/booking/detail"  element={<BookingDetail/>} />
      </Routes>
    </BrowserRouter>
 
    </div> );
}

export default App;
