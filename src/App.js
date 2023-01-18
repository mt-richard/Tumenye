import './App.css';
import Navigation from "./components/navigation.jsx";
import DesktopNavigation from "./components/desktopnavbar.jsx";
import Home from "./components/home.jsx";

function App() {
  return (
    <div>
      
      <DesktopNavigation />
      <Home />
      <Navigation />
      
    </div>
  );
}

export default App;
