import { useState, useEffect } from 'react'

const StarShipDetails = (props) => {

    const [shipDetails, setShipDetails] = useState({})

    useEffect(() => {
        //this is where api call will go to get details
    }, [])

    return ( 
        <>
            <div>
                <h3>Class Details</h3>
            </div>
        </>
     );
}
 
export default StarShipDetails;