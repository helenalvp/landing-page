import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/pages/landing-page/LandingPage";
function App() {
  return (
    <div className="App">
      <div className="section-nav">
        <Navbar />
      </div>
      <LandingPage />
      <div className="section-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
