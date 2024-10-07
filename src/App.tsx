import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import ChooseService from "./pages/ChooseService";
import Dropoff from "./pages/Dropoff";
import Qrpage from "./pages/Qrpage";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      {/* <ChooseService /> */}
      {/* <Dropoff /> */}
      <Router>
        <div>
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<Qrpage />} />
            <Route element={<Layout />}>
              <Route path="/choose-service" element={<ChooseService />} />
              <Route path="/dropoff" element={<Dropoff />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
