package com.codelabs.backend.model;

public class Student {

    private final int id;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String notes;

    public Student(int id, String firstName, String lastName, String email, String notes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.notes = notes;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getNotes() {
        return notes;
    }
}
