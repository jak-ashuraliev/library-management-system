import React, { Component } from "react";
import "../../App.css";
import "../Transactions/Transactions.css";
import { Container, Row, Col, Table, Button } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";
import TransactionDataSerivce from "../../service/TransactionDataService";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isLoading: true,
    };
    this.getTransactions = this.getTransactions.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    TransactionDataSerivce.getAllTransactions().then((response) => {
      this.setState({
        transactions: response.data,
        isLoading: false,
      });
    });
  }
  render() {
    return (
      <Container style={{ paddingLeft: "250px", paddingRight: "0" }}>
        <div className="top-wrapper">
          <h4>Transactions</h4>
          <SearchBar />
        </div>
        <hr />
        {this.state.isLoading && (
          <div className="alert alert-success">Loading...</div>
        )}
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
                {this.state.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.title}</td>
                    <td>{transaction.dateOut}</td>
                    <td>{transaction.dateIn}</td>
                    <td>
                      <Button size="sm" color="info" outline>
                        {transaction.details}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Transactions;
