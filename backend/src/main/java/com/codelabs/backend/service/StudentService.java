package com.codelabs.backend.service;
import com.codelabs.backend.model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    public List<Student> getAllStudents() {
        List<Student> listOfStudents = new ArrayList<>();
        listOfStudents.add(new Student(200, "Devante", "Adkins", "Devante.Adkins@WSF.edu", "view"));
        listOfStudents.add(new Student(201, "Yara", "Velez", "Yara.Velez@WSF.edu", "view"));
        listOfStudents.add(new Student(202, "Atticus", "Rennie", "Atticus.Rennie@WSF.edu", "view"));
        listOfStudents.add(new Student(203, "Victor", "Villegas", "Wiktor.Villegas@WSF.edu", "view"));
        listOfStudents.add(new Student(204, "Aisha", "Lamb", "Aisha.Lamb@WSF.edu", "view"));
        listOfStudents.add(new Student(205, "Zaina", "Erickson", "Zaina.Erickson@WSF.edu", "view"));
        listOfStudents.add(new Student(206, "Kurtis", "Hernandez", "Kurtis.Hernandez@WSF.edu", "view"));
        listOfStudents.add(new Student(207, "Garcie", "Andrews", "Garcie.Andrews@WSF.edu", "view"));
        listOfStudents.add(new Student(208, "Esmee", "Braun", "Esmee.Braun@WSF.edu", "view"));
        listOfStudents.add(new Student(209, "Janae", "Oneil", "Janae.Oneil@WSF.edu", "view"));
        listOfStudents.add(new Student(210, "Jordon", "Milner", "Jordon.Milner@WSF.edu", "view"));
        return listOfStudents;
    }
}
