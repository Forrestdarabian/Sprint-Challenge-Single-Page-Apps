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

function PeopleCard(props) {

console.log('props', props)

return(

<div>

<img src={props.person.image} alt=""/>
<p>name: {props.person.name}</p>
<p>status: {props.person.status}</p>
{/* <Button>Click Me</Button> */}
<Button Click Me />
</div>

)

}

export default PeopleCard; 