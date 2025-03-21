import { useState } from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Card
      onClick={handleClick}
      style={{
        border: selected ? '3px solid red' : '1px solid lightgray',
        cursor: 'pointer',
      }}
      className="h-100"
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title className="fs-6 text-center">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
