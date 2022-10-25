package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.Exercise;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    @Autowired
    ExerciseRepository newExerciseRepository;

    public String newExercise(Exercise exercise) {
        Exercise exercise1 = new Exercise();

        exercise1.setName(exercise.getName());
        exercise1.setCaloriesPerRep(exercise.getCaloriesPerRep());
        exercise1.setPrimaryMuscle(exercise.getPrimaryMuscle());
        exercise1.setSecondaryMuscle(exercise.getSecondaryMuscle());
        exercise1.setEquipment(exercise.getEquipment());

        newExerciseRepository.save(exercise1);

        return "Your have successfully added a new exercise";

    }
}