/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Reports from './pages/Reports.jsx'
import ReusableComponents from './pages/ReusableComponents.jsx'
import ContactUs from './pages/ContactUs.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header>
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
      </Header>
    </BrowserRouter>
  )
}
