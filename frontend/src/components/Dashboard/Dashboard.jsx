import React, { Component } from "react";
import "../../App.css";
import "../Dashboard/Dashboard.css";
import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div className="top-wrapper">
          <h4>Dashboard</h4>
          <SearchBar />
        </div>
        <hr />
        <Row>
          <Col>
            <Card body inverse color="primary">
              <CardTitle>145</CardTitle>
              <CardText>STUDENTS</CardText>
              <CardText>Total number of students</CardText>
            </Card>
          </Col>
          <Col>
            <Card body inverse color="success">
              <CardTitle>1032</CardTitle>
              <CardText>BOOKS</CardText>
              <CardText>Total number of books</CardText>
            </Card>
          </Col>
          <Col>
            <Card body inverse color="info">
              <CardTitle>4567</CardTitle>
              <CardText>TRANSACTIONS</CardText>
              <CardText>Total number of transactions</CardText>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={8}>
            <Card body outline color="primary">
              <CardTitle>Title</CardTitle>
              <CardText>Text</CardText>
            </Card>
          </Col>
          <Col md={4}>
            <Card body outline color="primary">
              <CardTitle>Title</CardTitle>
              <CardText>Text</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
