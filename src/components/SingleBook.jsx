import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../modules/context';

const SingleBook = ({ book, isSelected, onSelect }) => {
  const navigate = useNavigate();
  const [theme] = useContext(ThemeContext);

  const cardBg = theme === 'dark' ? '#444' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#333';

  return (
    <Card
      onClick={onSelect}
      style={{
        backgroundColor: cardBg,
        color: textColor, 
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
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6 text-center mb-3">{book.title}</Card.Title>
        <div className="mt-auto">
          <Button
            variant="success"
            size="sm"
            className="w-100"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/book/${book.asin}`);
            }}
          >
            Dettagli
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
