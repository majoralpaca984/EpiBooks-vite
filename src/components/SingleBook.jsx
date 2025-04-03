import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ book, isSelected, onSelect }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={onSelect} 
      style={{
        border: isSelected ? '3px solid red' : '1px solid lightgray',
        cursor: 'pointer',
        height: '100%',
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

        <Button
          variant="success"
          size="sm"
          className="mt-2 w-100"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/book/${book.asin}`);
          }}
        >
          Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
