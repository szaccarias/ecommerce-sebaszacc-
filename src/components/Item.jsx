import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, thumbnail, price, title}) => {

    return (
            <Card className='p-3'>
            <Link to={`/item/${id}`}><Card.Img variant="top" src={thumbnail}/></Link>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Button as={Link} to={`/item/${id}`} variant="primary">Ver producto</Button>
            </Card.Body>
            </Card>
    );
}

export default Item;
