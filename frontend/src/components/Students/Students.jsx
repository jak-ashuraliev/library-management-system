import React, { Component } from "react";
import "../../App.css";
import "../Students/Students.css";
import { Container, Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

class Students extends Component {
  render() {
    return (
      <Container>
        <div className="top-wrapper">
          <h4>Students</h4>
          <SearchBar />
        </div>
        <hr />
        <Row>
          <Col>
            <Table
              responsive="xs"
              striped
              bordered
              hover
              variant="light"
              className="text-left"
            >
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234</td>
                  <td>John</td>
                  <td>Smith</td>
                  <td>johnsmith@hotmail.com</td>
                  <td>
                    <Link>View Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>4567</td>
                  <td>Jessica</td>
                  <td>Johnson</td>
                  <td>johnsmith@hotmail.com</td>
                  <td>
                    <Link>View Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>6789</td>
                  <td>Jane</td>
                  <td>Doe</td>
                  <td>johnsmith@hotmail.com</td>
                  <td>
                    <Link>View Details</Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Students;
