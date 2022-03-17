import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

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
                    <div id="shipDetails">
                        <br />
                        <Card key={shipDetails.name} bg={'Primary'} text={'Primary'}>
                            <Card.Header>
                                <h1>{shipDetails.name}</h1>
                            </Card.Header>
                            <br />
                            <h2>{shipDetails.model}</h2>
                            <Link 
                                key={shipDetails.name} 
                                state={{}}
                                to="/"                   
                            >
                                <h4>Return</h4>
                            </Link>
                        </Card>
                        
                    </div>
                    
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