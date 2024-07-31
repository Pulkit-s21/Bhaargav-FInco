import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ServicePage } from "./pages/ServicePage"
import { RealEstate } from "./pages/RealEstate"
import { LoanProperty } from "./pages/LoanProperty"
import { MicroFunding } from "./pages/MicroFunding"
import { LoanGold } from "./pages/LoanGold"
import { HomeLoan } from "./pages/HomeLoan"
import { PvtLoan } from "./pages/PvtLoan"
import { AutoLoan } from "./pages/AutoLoan"
import { Funds } from "./pages/Funds"
import { EduLoan } from "./pages/EduLoan"
import { ContactPage } from "./pages/ContactPage"
import { AboutPage } from "./pages/AboutPage"
import { ReviewPage } from "./pages/ReviewPage"
import { BookingPage } from "./pages/BookingPage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/real_estate" element={<RealEstate />} />
        <Route path="/loan_property" element={<LoanProperty />} />
        <Route path="/loan_gold" element={<LoanGold />} />
        <Route path="/micro_fund" element={<MicroFunding />} />
        <Route path="/home_loan" element={<HomeLoan />} />
        <Route path="/pvt_loan" element={<PvtLoan />} />
        <Route path="/auto_loan" element={<AutoLoan />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/edu_loan" element={<EduLoan />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
