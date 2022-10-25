package com.example.gymcbackend.controllers;

import com.example.gymcbackend.entities.Exercise;
import com.example.gymcbackend.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController {

    @Autowired
    ExerciseService newExerciseService;

    @PostMapping("/newExercise")
    public String newExercise(@RequestBody Exercise exercise){return newExerciseService.newExercise(exercise);}

//    @GetMapping("/Exercises")
//    public List<ExerciseDetails> getExerciseDetails(){
//        return newExerciseService.getExerciseDetails();
//    }
}
