import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Info/>
        <Routes>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
