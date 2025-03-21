import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ asin, onNewComment }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      rate,
      elementId: asin,
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDI1ODExODQsImV4cCI6MTc0Mzc5MDc4NH0.X08TAN2lOdY9A7UMkOQYKBgNYn47NIRob0RUSogbNHQ'

        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        alert('Recensione inviata con successo!');
        setComment('');
        setRate(1);
        onNewComment(); // ricarica i commenti dopo l’invio
      } else {
        alert('Errore durante l’invio della recensione');
      }
    } catch (error) {
      console.error(error);
      alert('Errore di connessione');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <h5>Aggiungi una recensione</h5>
      <Form.Group className="mb-2">
        <Form.Label>Testo</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Valutazione</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value="1">⭐ 1</option>
          <option value="2">⭐ 2</option>
          <option value="3">⭐ 3</option>
          <option value="4">⭐ 4</option>
          <option value="5">⭐ 5</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="primary">
        Invia recensione
      </Button>
    </Form>
  );
};

export default AddComment;
