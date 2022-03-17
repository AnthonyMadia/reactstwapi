import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'

const StarshipDetails = (props) => {

    const [shipDetails, setShipDetails] = useState({})

    let location = useLocation()

    useEffect(() => {
        //this is where api call will go to get details
        getDetails(location.state.ship.url)
        .then(shipDetails => setShipDetails(shipDetails))
        console.log()
    }, [])

    return ( 
        <>
            <div>
                {shipDetails.name ? 
                <>
                    <h1>{shipDetails.name}</h1>
                </>
                :
                <>
                    <h1>
                        Loadingggingingignigniasdfgakshdgfkahjsgfkashjdgfhkjasdgf
                    </h1>
                </>
            
            
                }
            </div>
        </>
     );
}
 
export default StarshipDetails;