import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "../components/CommentArea";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import romance from "../data/romance.json";

const BookDetails = () => {
  const { asin } = useParams();
  const allBooks = [...scifi, ...history, ...romance];
  const book = allBooks.find((b) => b.asin === asin);

  return (
    <Container className="mt-4">
      {!book ? (
        <p className="text-center">📕 Libro non trovato.</p>
      ) : (
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <h2 className="mb-3">{book.title}</h2>
            <img
              src={book.img}
              alt={book.title}
              style={{
                width: "250px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              className="mb-3"
            />
            <p>
              <strong>Categoria:</strong> {book.category}
            </p>
            <p>
              <strong>Prezzo:</strong> ${book.price}
            </p>

            <hr className="my-4" />
            <CommentArea asin={book.asin} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookDetails;
