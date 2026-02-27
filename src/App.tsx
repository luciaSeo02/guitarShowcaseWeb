import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomOrderPage from "./pages/CustomOrderPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-order" element={<CustomOrderPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
