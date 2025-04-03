import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import scifi from '../data/scifi.json';
import history from '../data/history.json';
import romance from '../data/romance.json';

const BookDetails = () => {
    const { asin } = useParams();
    const allBooks = [...scifi, ...history, ...romance];
    const book = allBooks.find((book) => book.asin === asin);

    return (
      <Container className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: "70vh" }}>
        {!book ? (
          <p>Libro non trovato.</p>
        ) : (
          <div className="text-center">
            <h2 className="mb-4">{book.title}</h2>
            <img
              src={book.img}
              alt={book.title}
              style={{
                width: "250px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              className="mb-3"
            />
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Prezzo:</strong> ${book.price}</p>
          </div>
        )}
      </Container>
    );
  };

export default BookDetails;