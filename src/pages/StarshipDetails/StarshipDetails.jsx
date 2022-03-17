import { useState, useEffect } from 'react'

const StarshipDetails = (props) => {

    const [shipDetails, setShipDetails] = useState({})

    useEffect(() => {
        //this is where api call will go to get details
    }, [])

    return ( 
        <>
            <div>
                <h3>Starhip Details!@!!!!</h3>
            </div>
        </>
     );
}
 
export default StarshipDetails;