import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({ comments, onUpdate, onDelete }) => {
  return (
    <div className="mt-3">
      {comments.length > 0 ? (
        <ListGroup>
          {comments.map((comment) => (
            <SingleComment
              key={comment._id}
              comment={comment}
              onUpdate={onUpdate}   
              onDelete={onDelete}   
            />
          ))}
        </ListGroup>
      ) : (
        <p className="text-center">Nessuna recensione trovata per questo libro.</p>
      )}
    </div>
  );
};

export default CommentsList;
