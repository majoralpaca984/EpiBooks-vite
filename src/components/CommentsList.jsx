import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({ comments }) => {
  return (
    <div className="mt-3">
      <h5 className="text-center mb-2">Recensioni</h5>
      {comments.length > 0 ? (
        <ListGroup>
          {comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))}
        </ListGroup>
      ) : (
        <p className="text-center">Nessuna recensione trovata per questo libro.</p>
      )}
    </div>
  );
};

export default CommentsList;
