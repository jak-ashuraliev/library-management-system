package com.codelabs.backend.model;

public class Book {

    private final int id;
    private final String title;
    private final String author;
    private final String genre;
    private final String isbn;
    private final String publisher;

    public Book(int id, String title, String author, String genre, String isbn, String publisher) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isbn = isbn;
        this.publisher = publisher;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getGenre() {
        return genre;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getPublisher() {
        return publisher;
    }
}
