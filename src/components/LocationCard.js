import React from 'react';
import styled from 'styled-components'
import {Button} from "semantic-ui-react"

//

// const StyleButton = styled.button`
 
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// 

function LocationCard(props) {

console.log('props', props)

return(

<div>

<img src={props.location.image} alt=""/>
<p>name: {props.location.name}</p>
<p>status: {props.location.status}</p>
{/* <Button>Click Me</Button> */}
<Button Click Me />
</div>

)

}

export default LocationCard; 