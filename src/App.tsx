import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
// import Flashback from './components/Flashback';
import Airports from './components/Airports';
import RoutesPage from './components/Routes';
import Briefing from './components/Briefing';
import Sceneries from './components/Sceneries';
import { Livestream } from './components/Livestream';
import Footer from './components/Footer';
import EFROBriefing from './components/briefing/efro';
import EFRO_ATC from './components/briefing/efro_atc';

import SlotManager from './components/slot_management/SlotManager';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="font-sans antialiased">
              <Hero />
              {/* <Flashback /> */}
              <Airports />
              <RoutesPage />
              <Briefing />
              <Sceneries />
              <Livestream />
              <Footer />
            </div>
          }
        />

        {/* Slot Management Page */}
        <Route path="/slots" element={<SlotManager />} />

        {/* EFRO Briefing Page */}
        <Route path="/briefing/efro" element={<EFROBriefing />} />
        <Route path="/briefing/finland" element={<EFRO_ATC />} />

      </Routes>
    </Router>
  );
}

export default App;
