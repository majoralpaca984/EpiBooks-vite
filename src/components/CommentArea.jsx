import { useEffect, useState, useContext } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Spinner } from 'react-bootstrap';
import { ThemeContext } from '../modules/context';

const CommentArea = ({ asin }) => {
  const [theme] = useContext(ThemeContext);

  const bgColor = theme === 'dark' ? '#333333' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#333333';

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDM5NjcxMDEsImV4cCI6MTc0NTE3NjcwMX0.jrz2E7UF_TyOCP4BUHb19tE_Gma-Mpa9U8P8smySB-k',
        },
      });

      if (!response.ok) {
        throw new Error('Errore nel recupero dei commenti');
      }

      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGY1NzFlMTQwNjAwMTUzMTRkNzMiLCJpYXQiOjE3NDM5NjcxMDEsImV4cCI6MTc0NTE3NjcwMX0.jrz2E7UF_TyOCP4BUHb19tE_Gma-Mpa9U8P8smySB-k',
          },
        }
      );

      if (response.ok) {
        fetchComments(); 
      } else {
        alert("Errore nella cancellazione del commento");
      }
    } catch (error) {
      console.error("Errore DELETE:", error);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div
      className="mt-3"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '1rem',
        borderRadius: '8px'
      }}
    >
      {!asin && <p className="text-muted text-center">Seleziona un libro per vedere i commenti</p>}

      {loading && asin && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Caricamento commenti...</p>
        </div>
      )}

      {error && asin && (
        <p className="text-danger">Errore nel recupero dei commenti.</p>
      )}

      {!loading && !error && asin && (
        <>
          <h5 className="text-center">Recensioni</h5>
          <CommentsList
            comments={comments}
            onUpdate={fetchComments}
            onDelete={handleDelete}
          />
          <AddComment asin={asin} onNewComment={fetchComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
