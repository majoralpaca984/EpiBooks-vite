import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ asin, onNewComment }) => {
  
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!asin) {
      alert("Nessun libro selezionato.");
      return;
    }
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDI1ODExODQsImV4cCI6MTc0Mzc5MDc4NH0.X08TAN2lOdY9A7UMkOQYKBgNYn47NIRob0RUSogbNHQ',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId: asin, 
        }),
      });

      if (response.ok) {
        setComment(''); 
        setRate(1);      
        onNewComment();  
      } else {
        alert('Errore durante l\'invio del commento');
      }
    } catch (error) {
      console.error('Errore POST:', error);
    }
  };

  return (
    <div className="mt-4">
      <h5>Scrivi un commento</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Scrivi qui..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>{val} ⭐</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!comment.trim()}>
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
