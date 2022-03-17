import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

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
        <Route path="/starship-details" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
