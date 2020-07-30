import React, { Component } from "react";
import "../../App.css";
import "../Dashboard/Dashboard.css";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

class Dashboard extends Component {
  render() {
    return (
      <Container style={{ paddingLeft: "250px", paddingRight: "0" }}>
        <div className="top-wrapper">
          <h4>Dashboard</h4>
          <SearchBar />
        </div>
        <hr />
        <Row>
          <Col>
            <Card body>
              <CardTitle>
                145 <i className="fas fa-users"></i>
              </CardTitle>
              <CardText>STUDENTS</CardText>
              <p>Total number of students</p>
            </Card>
          </Col>
          <Col>
            <Card body>
              <CardTitle>
                1032
                <i className="fas fa-book"></i>
              </CardTitle>
              <CardText>BOOKS</CardText>
              <p>Total number of books</p>
            </Card>
          </Col>
          <Col>
            <Card body>
              <CardTitle>
                4567
                <i className="fas fa-file-invoice"></i>
              </CardTitle>
              <CardText>TRANSACTIONS</CardText>
              <p>Total number of transactions</p>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={8}>
            <Card body>
              <CardText>Statistics</CardText>
              <i className="fas fa-chart-line"></i>
            </Card>
          </Col>
          <Col md={4}>
            <Card body>
              <p>Students</p>
              <p>Books</p>
              <p>Transactions</p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
