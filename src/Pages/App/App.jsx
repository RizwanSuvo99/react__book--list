/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import BookRow from "../../components/BookRow";
import { utils } from "../../utils/utils";

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(utils());

  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  // clear inputs
  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  };

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // creating book object
    const book = {
      title,
      author,
      isbn,
      pubYear,
    };
    setBooks([...books, book]);
    localStorage.setItem(`${isbn}`, JSON.stringify(book));
    clearInputs();
  };

  // delete book from LS
  const handleDelete = (id) => {
    const filteredBooks = books.filter((book) => book.isbn !== id);
    setBooks(filteredBooks);
    localStorage.removeItem(`${id}`);
  };

  const handleDeleteAll = () => {
    setBooks([]);
  };

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem("books",JSON.stringify(books));
  },[books]);


  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Publish Year</label>
            <input
              type="text"
              value={pubYear}
              onChange={(e) => setPubYear(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Publish Year</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <BookRow
                        key={book.isbn}
                        book={book}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={handleDeleteAll}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          ) : (
            <div>No Books are added yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
