/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {   

    const {name,image,gender,species,status} = product

    return (
      <Card className="text-center m-2" style={{ width: '18rem' }}>
        <Card.Header>{gender}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {species} {status}
          </Card.Text>
        </Card.Body>
      </Card>    
  )
}

export default ItemDetail;

/* "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [ */