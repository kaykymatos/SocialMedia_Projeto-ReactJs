import { BrowserRouter as Router } from "react-router-dom";

import NavbarLayout from "./components/layout/NavbarLayout";
import PageRoutes from "./components/routes/PageRoutes";

function App() {
  return (
    <Router>
            
      <NavbarLayout />
      <div className="container-fluid h-75">
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
