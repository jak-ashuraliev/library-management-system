import React, { Component } from "react";
import "../../App.css";
import "../Books/Books.css";
import { Container, Row, Col, CardBody, Card, CardSubtitle } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

class Books extends Component {
  render() {
    return (
      <Container>
        <div className="top-wrapper">
          <h4>Books</h4>
          <SearchBar />
        </div>
        <hr />
        <div className="books-wrapper">
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col md={4}>
                <img src="https://via.placeholder.com/150" alt="Card" />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardSubtitle>
                    <span>Title:</span> Wuthering Heights
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Author:</span> Emily Bronte
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Genre:</span> Ficsion / Poetry
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>ISBN:</span> 39722456
                  </CardSubtitle>
                  <CardSubtitle>
                    <span>Publisher:</span> Thomas Cautley Newby
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Books;
