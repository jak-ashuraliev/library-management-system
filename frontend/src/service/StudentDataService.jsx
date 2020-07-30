import axios from "axios";

const API_URL = "http://localhost:8080";

class StudentDataService {
  //GET all students
  getAllStudents() {
    return axios.get(`${API_URL}/students`);
  }
}

export default new StudentDataService();
