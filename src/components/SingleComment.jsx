import { ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item>
      <strong>{comment.author}</strong>: {comment.comment}  
      <span className="ms-2">⭐ {comment.rate}</span>
    </ListGroup.Item>
  );
};

export default SingleComment;
