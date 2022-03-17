import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getStarshipList } from "../../services/api-calls";


const StarshipList = (props) => {

    const [starships, setStarships] = useState(['CR90 corvette'])

    useEffect(() => {
        getStarshipList()
        .then(shipData => setStarships(shipData.results))
    }, [])

    return ( 
        <>
            <h3>StarShip List!!!!</h3>
            <div className="icon-container">
                {starships.map((ship, idx) => (
                    <div id="classDiv" className="card " key={idx}>
                        {ship.name}
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default StarshipList;