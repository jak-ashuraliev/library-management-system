package com.codelabs.backend.service;
import com.codelabs.backend.model.Transaction;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService {

    public List<Transaction> getAllTransactions() {
        List<Transaction> listOfTransactions = new ArrayList<>();
        listOfTransactions.add(new Transaction(20001, "Wuthering Heights", "04/12/2020", "05/12/2020", "view"));
        listOfTransactions.add(new Transaction(20002, "Frankenstain: The 1818", "04/20/2020", "05/20/2020", "view"));
        listOfTransactions.add(new Transaction(20003, "Pride and Prejudice", "04/25/2020", "05/25/2020", "view"));
        listOfTransactions.add(new Transaction(20004, "A Tale of Two Cities", "05/16/2020", "06/16/2020", "view"));
        listOfTransactions.add(new Transaction(20005, "The Count of Monte Cristo", "05/18/2020", "06/18/2020", "view"));
        listOfTransactions.add(new Transaction(20006, "Emma", "05/26/2020", "06/26/2020", "view"));
        return listOfTransactions;
    }
}
