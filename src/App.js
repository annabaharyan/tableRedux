import './App.css';
import Config from './Pages/Config';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Config />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
