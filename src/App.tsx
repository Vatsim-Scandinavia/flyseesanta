import Hero from "./components/Hero";
import Airports from "./components/Airports";
import Routes from "./components/Routes";
import Briefing from "./components/Briefing";
import Sceneries from "./components/Sceneries";
import Livestream from "./components/Livestream";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <Airports />
      <Routes />
      <Briefing />
      <Sceneries />
      <Livestream />
      <Footer />
    </div>
  );
}

export default App;
