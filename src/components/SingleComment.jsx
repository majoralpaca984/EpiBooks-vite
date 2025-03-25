import { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const SingleComment = ({ comment, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDI1ODExODQsImV4cCI6MTc0Mzc5MDc4NH0.X08TAN2lOdY9A7UMkOQYKBgNYn47NIRob0RUSogbNHQ'
          },
          body: JSON.stringify({
            comment: editedComment,
            rate: editedRate
          })
        }
      );

      if (response.ok) {
        setIsEditing(false);
        onUpdate(); 
      } else {
        alert('Errore nella modifica del commento');
      }
    } catch (error) {
      console.error('Errore PUT:', error);
    }
  };

  return (
    <ListGroup.Item>
      {isEditing ? (
        <Form onSubmit={handleEditSubmit}>
          <Form.Control
            className="mb-2"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <Form.Select
            className="mb-2"
            value={editedRate}
            onChange={(e) => setEditedRate(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r} ⭐</option>
            ))}
          </Form.Select>
          <Button type="submit" size="sm" variant="success" className="me-2">
            Salva
          </Button>
          <Button size="sm" variant="secondary" onClick={() => setIsEditing(false)}>
            Annulla
          </Button>
        </Form>
      ) : (
        <>
          <strong>{comment.author}:</strong> {comment.comment} – ⭐ {comment.rate}
          <div className="mt-2">
            <Button size="sm" variant="warning" className="me-2" onClick={() => setIsEditing(true)}>
              Modifica
            </Button>
            <Button size="sm" variant="danger" onClick={() => onDelete(comment._id)}>
              Elimina
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;
