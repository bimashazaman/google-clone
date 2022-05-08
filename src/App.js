
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
