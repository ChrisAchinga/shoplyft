import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/&{product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/&{product._id}`}>
          <strong>{product.name}</strong>
        </a>
        <Card.Text as='div'>
          <Rating value={product.rating} text={product.numReviews} color={'#000000'}/>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
