import Main from "./components/main"
import './App.css';
import "./components/mainstyle.css"
import "./components/card.css"
import { Routes, Route } from 'react-router-dom';
import Card from "./components/card";
import Movie from "./components/[movie]"

function App() {
  return (
    <>  
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home/:movie" element={<Movie />} />
  </Routes>
  </>
  );
}

export default App;
