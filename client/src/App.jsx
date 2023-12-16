import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Reports from "./pages/Reports"
import About from "./pages/About"
import ReusableComponents from "./pages/ReusableComponents"
import ContactUs from "./pages/ContactUs"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reusable-components" element={<ReusableComponents />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}
