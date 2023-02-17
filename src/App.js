import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingDetail from "./components/BookingDetail";
import BookingForm from "./components/BookingForm";
axios.defaults.baseURL = "http://localhost:8080"
function App() {
  return (
    <div className="body__container">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/booking/form"  element={<BookingForm />}/>
          <Route path="/booking/detail" element={<BookingDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
