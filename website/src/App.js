import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/features" element={<Features />} /> */}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Elements stripe={stripePromise}><Register /></Elements>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/community" element={<Community />} />
            <Route path="/announcement-menu" element={<AnnouncementMenu />} />
            <Route path="/customer-menu" element={<CustomerMenu />} />
            <Route path="/create-announcement" element={<Announcement />} />
            <Route path="/edit-announcement/:id" element={<Announcement />} />
            <Route path="/community/announcement/:id" element={<AnnouncementDetail />} /> */}
            {/* <Route path="/invoices" element={<Invoices/>}/> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;