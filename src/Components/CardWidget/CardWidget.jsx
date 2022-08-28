import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


const CardWidget = () => (
  <Card style={{ width: '6rem' }}>
  <Card.Body>
  <Image
          floated='right'
          size='mini'
          src='http://1.bp.blogspot.com/_3Xu0lD9RLGQ/TCsvkbbGs2I/AAAAAAAAAKI/7S52FspWz90/s320/franziskaner_weissb_300.jpg'
        />
</Card.Body>
     </Card>
)

export default CardWidget