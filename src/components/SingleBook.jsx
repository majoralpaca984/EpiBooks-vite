import { Card } from 'react-bootstrap';

const SingleBook = ({ book, isSelected, onSelect }) => {
  return (
    <Card
      onClick={onSelect}
      style={{
        border: isSelected ? '3px solid red' : '1px solid lightgray',
        cursor: 'pointer',
        height: '100%',
        boxShadow: isSelected ? '0 0 10px rgba(255, 0, 0, 0.5)' : 'none',
      }}
      className="h-100"
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        style={{ height: '280px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="fs-6 text-center">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
