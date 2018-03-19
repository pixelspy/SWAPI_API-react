import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExample = (props) => (
  <Card>
    <Image src='/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Name: {props.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.birth_year}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.hair_color}
        <br></br>
        {props.skin_color}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExample;
