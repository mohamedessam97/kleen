import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import ChooseService from "./pages/ChooseService";
import Dropoff from "./pages/Dropoff";
import Layout from "./components/Layout";
import "./App.css";
import Pickup from "./pages/Pickup";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Offers from "./pages/Offers";

function App() {
  // const { i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Routes>
            {/* Define Routes */}
            <Route element={<Layout />}>
              <Route index element={<ChooseService />} />
              <Route path="/choose-service" element={<ChooseService />} />
              <Route path="/dropoff" element={<Dropoff />} />
              <Route path="/pickup" element={<Pickup />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/offers" element={<Offers />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
