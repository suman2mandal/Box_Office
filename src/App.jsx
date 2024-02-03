import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Stars';
import ShowCard from './components/ShowCard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Stars" element={<Start/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/person/:showId" element={<ShowCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
