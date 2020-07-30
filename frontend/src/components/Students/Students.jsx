import React, { Component } from "react";
import "../../App.css";
import "../Students/Students.css";
import { Container, Row, Col, Table, Button } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";
import StudentDataService from "../../service/StudentDataService";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoading: true,
    };
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents() {
    StudentDataService.getAllStudents().then((response) => {
      this.setState({
        students: response.data,
        isLoading: false,
      });
    });
  }
  render() {
    return (
      <Container style={{ paddingLeft: "250px", paddingRight: "0" }}>
        <div className="top-wrapper">
          <h4>Students</h4>
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
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>
                      <Button
                        style={{ marginTop: "0" }}
                        size="sm"
                        color="info"
                        outline
                      >
                        {student.notes}
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

export default Students;
