import React, { Component } from "react";
import "../../App.css";
import "../Books/Books.css";
import BookDataService from "../../service/BookDataService";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardSubtitle,
  Button,
} from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BookDataService.getAllBooks().then((response) => {
      this.setState({ books: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <Container style={{ paddingLeft: "250px", paddingRight: "0" }}>
        <div className="top-wrapper">
          <h4>Books</h4>
          <SearchBar />
        </div>
        <hr />
        {this.state.isLoading && (
          <div className="alert alert-success">Loading...</div>
        )}
        <div className="books-wrapper">
          {this.state.books.map((book) => (
            <Card key={book.id}>
              <Row>
                <Col md={3} sm={6} xs={3}>
                  <i className="fas bookImgHolder fa-book"></i>
                </Col>
                <Col md={9} sm={6} xs={9}>
                  <CardBody key={book.id}>
                    <CardSubtitle>
                      <span>Title:</span> {book.title}
                    </CardSubtitle>
                    <CardSubtitle>
                      <span>Author:</span> {book.author}
                    </CardSubtitle>
                    <CardSubtitle>
                      <span>Genre:</span> {book.genre}
                    </CardSubtitle>
                    <CardSubtitle>
                      <span>ISBN:</span> {book.isbn}
                    </CardSubtitle>
                    <CardSubtitle>
                      <span>Publisher:</span> {book.publisher}
                    </CardSubtitle>
                    <Button size="sm" color="info" disabled>
                      CHECKOUT
                    </Button>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </Container>
    );
  }
}

export default Books;
