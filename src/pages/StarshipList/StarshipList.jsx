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
            <div className="icon-container">
                {starships.map((ship, idx) => (
                    <Link key={idx} state={{ship}} to="/starship-details">
                        <div id="classDiv" className="card" >
                            {ship.name}
                        </div>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default StarshipList;