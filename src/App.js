import './App.css';
import Navigation from "./components/navigation.jsx";
import DesktopNavigation from "./components/desktopnavbar.jsx";
import Home from "./components/home.jsx";

function App() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
      
      <DesktopNavigation />
      <Home />
      <Navigation />
      
    </div>
  );
}

export default App;
