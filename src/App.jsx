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
        <Route path="https://www.bhaargavfinco.com" element={<Home />} />
        <Route
          path="https://www.bhaargavfinco.com/about"
          element={<AboutPage />}
        />
        <Route
          path="https://www.bhaargavfinco.com/services"
          element={<ServicePage />}
        />
        <Route
          path="https://www.bhaargavfinco.com/review"
          element={<ReviewPage />}
        />
        <Route
          path="https://www.bhaargavfinco.com/real_estate"
          element={<RealEstate />}
        />
        <Route
          path="https://www.bhaargavfinco.com/loan_property"
          element={<LoanProperty />}
        />
        <Route
          path="https://www.bhaargavfinco.com/loan_gold"
          element={<LoanGold />}
        />
        <Route
          path="https://www.bhaargavfinco.com/micro_fund"
          element={<MicroFunding />}
        />
        <Route
          path="https://www.bhaargavfinco.com/home_loan"
          element={<HomeLoan />}
        />
        <Route
          path="https://www.bhaargavfinco.com/pvt_loan"
          element={<PvtLoan />}
        />
        <Route
          path="https://www.bhaargavfinco.com/auto_loan"
          element={<AutoLoan />}
        />
        <Route path="https://www.bhaargavfinco.com/funds" element={<Funds />} />
        <Route
          path="https://www.bhaargavfinco.com/edu_loan"
          element={<EduLoan />}
        />
        <Route
          path="https://www.bhaargavfinco.com/contact"
          element={<ContactPage />}
        />
        <Route
          path="https://www.bhaargavfinco.com/appointment"
          element={<BookingPage />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
