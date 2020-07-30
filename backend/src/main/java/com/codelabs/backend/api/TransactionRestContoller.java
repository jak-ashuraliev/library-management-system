package com.codelabs.backend.api;
import com.codelabs.backend.model.Transaction;
import com.codelabs.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8001" })
@RestController
public class TransactionRestContoller {

    @Autowired
    TransactionService transactionService;

    @GetMapping("/transactions")
    public List<Transaction> getAllTrasactions() {
        return transactionService.getAllTransactions();
    }

}
