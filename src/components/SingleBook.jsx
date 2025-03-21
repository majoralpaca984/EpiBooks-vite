import { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <Card
        onClick={handleClick}
        style={{ border: selected ? '3px solid red' : '1px solid lightgray' }}
        className="h-100"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="fs-6 text-center">{book.title}</Card.Title>
        </Card.Body>
      </Card>

      {selected && <CommentArea asin={book.asin} />}
    </div>
  );
};

export default SingleBook;
