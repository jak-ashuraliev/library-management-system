import axios from "axios";

const API_URL = "http://localhost:8080";

class BookDataService {
  //GET all books
  getAllBooks() {
    return axios.get(`${API_URL}/books`);
  }
}

export default new BookDataService();
