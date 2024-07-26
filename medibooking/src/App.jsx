import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Landing_Page from "./Components/LandingPage/LandingPage"
import Appointments from "./Components/Pages/Appointments"
import Review from "./Components/Pages/Review"
import Profile from "./Components/Pages/Profile"
import Auth from "./Components/Sign_Log/Auth"
import Login from "./Components/Sign_Log/Login"
import Signup from "./Components/Sign_Log/Signup"
// import "./server"
import BookingService from "./Components/DoctorBooking/BookingService"
import FindDoctor from "./Components/DoctorBooking/FindDoctor"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Landing_Page/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/review" element={<Review/>} />
          
          <Route element={<Auth/>}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/doctor-booking" element={<BookingService/>}>
            <Route index element={<FindDoctor/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
