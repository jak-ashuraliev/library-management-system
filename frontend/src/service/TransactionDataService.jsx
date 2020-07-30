import axios from "axios";

const API_URL = "http://localhost:8080";

class TransactionDataService {
  //GET all transactions
  getAllTransactions() {
    return axios.get(`${API_URL}/transactions`);
  }
}

export default new TransactionDataService();
