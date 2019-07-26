import React from 'react';
import styled from 'styled-components'
import {Button} from "semantic-ui-react"



function LocationCard(props) {

console.log('props', props)

return(

<div>

<p>name: {props.location.name}</p>
<p>location: {props.location.type}</p>
{/* <p>residents: {props.location.residents}</p> */}

{/* <Button>Click Me</Button> */}
<Button Click Me />
</div>

)

}

export default LocationCard; 