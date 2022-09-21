import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import PageRoutes from "./components/routes/PageRoutes";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container-fluid h-75">
        <PageRoutes />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
