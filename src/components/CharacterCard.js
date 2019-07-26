import React from 'react';
import styled from 'styled-components'
import {Button} from "semantic-ui-react"



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