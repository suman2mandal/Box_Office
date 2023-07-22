import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Stars';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Stars" element={<Start/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
