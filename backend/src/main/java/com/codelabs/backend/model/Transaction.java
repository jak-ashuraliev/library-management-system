package com.codelabs.backend.model;

public class Transaction {

    private final int id;
    private final String title;
    private final String dateOut;
    private final String dateIn;
    private final String details;

    public Transaction(int id, String title, String dateOut, String dateIn, String details) {
        this.id = id;
        this.title = title;
        this.dateOut = dateOut;
        this.dateIn = dateIn;
        this.details = details;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDateOut() {
        return dateOut;
    }

    public String getDateIn() {
        return dateIn;
    }

    public String getDetails() {
        return details;
    }
}