import { ListGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  return (
    <Card className="mb-3" style={{ maxWidth: '100%' }}>
      <Card.Body>
        <Card.Title className="fs-6 fw-bold">{comment.author}:</Card.Title>
        <Card.Text>{comment.comment}</Card.Text>
        <Card.Text>
          ⭐ {comment.rate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;
