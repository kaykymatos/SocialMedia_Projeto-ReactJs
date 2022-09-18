import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import PageLinks from "./components/routes/PageLinks";
import PageRoutes from "./components/routes/PageRoutes";

function App() {
  return (
    <Router>
      <Navbar links={<PageLinks />} />

      <Container customClass="min-height">
        <PageRoutes />
      </Container>

      <Footer links={<PageLinks />} />
    </Router>
  );
}

export default App;
