import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, onNewComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async () => {
    const newComment = {
      comment,
      rate,
      elementId: asin, // Collegato al libro
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDI1ODExODQsImV4cCI6MTc0Mzc5MDc4NH0.X08TAN2lOdY9A7UMkOQYKBgNYn47NIRob0RUSogbNHQ",
          },
        }
      );

      if (!response.ok) throw new Error("Errore nell'invio del commento");

      setComment(""); // Reset campo testo
      setRate(1); // Reset rating
      onNewComment(); // Aggiorna i commenti nella CommentArea
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Scrivi un commento</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Inserisci il tuo commento"
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>Valutazione (1-5)</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button className="mt-3" variant="primary" onClick={handleSubmit}>
        Invia Recensione
      </Button>
    </Form>
  );
};

export default AddComment;
