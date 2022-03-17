import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';

function App() {

  const [starItems, setStarItems] = useState([
    //leave path empty
    {url: "", name: "Starship List"}
  ])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<StarshipList />} />
      </Routes>
    </>
  );
}

export default App;
