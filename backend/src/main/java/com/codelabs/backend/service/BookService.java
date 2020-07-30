package com.codelabs.backend.service;

import com.codelabs.backend.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    public List<Book> getAllBooks() {
        List<Book> listOfBooks = new ArrayList<>();
        listOfBooks.add(new Book(100, "Wuthering Heights", "Emily Bronte", "Classic", "393938893", "Norton"));
        listOfBooks.add(new Book(101, "Frankenstain: The 1818", "Marry Shelley", "Horror", "143131842", "Penguin Classics"));
        listOfBooks.add(new Book(102, "Pride and Prejudice", "Jane Austen", "Romance", "679783261", "Modern Library"));
        listOfBooks.add(new Book(103, "A Tale of Two Cities", "Charles Dickens", "Classic", "141439602", "Modern Library"));
        listOfBooks.add(new Book(104, "The Count of Monte Cristo", "Alexandre Dumas", "Romance", "140449264", "Penguin Classics"));
        listOfBooks.add(new Book(105, "Emma", "Jane Austen", "Novel", "141439580", "Penguin Classics"));
        return listOfBooks;
    }

}
