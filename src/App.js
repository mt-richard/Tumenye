import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Standard from './layouts/standard';
import Services from './pages/services';
import Home from './pages/home';
import News from './pages/news';
import Search from './pages/search';
import NotFound from './pages/404';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Standard />}>
            <Route index element={<Home/>} />
            <Route path='/service' element={<Services/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/search' element={<Search/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
