import React, { Component } from "react";
import "../../App.css";
import "../Transactions/Transactions.css";
import { Container, Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

class Transactions extends Component {
  render() {
    return (
      <Container>
        <div className="top-wrapper">
          <h4>Transactions</h4>
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
                  <th>Transaction ID</th>
                  <th>Book Title</th>
                  <th>Date Out</th>
                  <th>Date In</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234567</td>
                  <td>Wuthering Heights</td>
                  <td>01/02/2020</td>
                  <td>01/03/2020</td>
                  <td>
                    <Link>View Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>4567123</td>
                  <td>Wuthering Heights</td>
                  <td>01/02/2020</td>
                  <td>01/03/2020</td>
                  <td>
                    <Link>View Details</Link>
                  </td>
                </tr>
                <tr>
                  <td>67891345</td>
                  <td>Wuthering Heights</td>
                  <td>01/02/2020</td>
                  <td>01/03/2020</td>
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

export default Transactions;
