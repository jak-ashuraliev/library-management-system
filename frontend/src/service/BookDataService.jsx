import axios from "axios";

const API_URL = "http://localhost:8001";

class BookDataService {
  //GET all books
  getAllBooks() {
    return axios.get(`${API_URL}/books`);
  }
}

export default new BookDataService();
