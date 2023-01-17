import './App.css';
import Navigation from "./components/navigation.jsx";
import DesktopNavigation from "./components/desktopnavbar.jsx";
import Footer from './components/footer'

function App() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
      
      <DesktopNavigation />
      <Navigation />
      
    </div>
  );
}

export default App;
