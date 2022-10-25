package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import com.example.gymcbackend.services.TraineeViewScheduleService;
import com.example.gymcbackend.services.AddWorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")



public class TraineeViewScheduleController {

    @Autowired
    TraineeViewScheduleService traineeViewScheduleService;
    @Autowired
    AddWorkoutService addWorkoutService;

    //View Trainee Current workout schedule
    @GetMapping("/getTraineeSchedule/{traineeId}")
    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(@PathVariable Long traineeId){
        System.out.println("gettraineeSchedule");
        return traineeViewScheduleService.getTraineeSchedule(traineeId);
    }

    //Add workout

    //Add trainee body measures and health condition, workout type
    @PostMapping("/addWorkout/{traineeId}")
    public String addWorkout(@RequestBody WorkoutPlanSchedule workoutPlanSchedule, @PathVariable Long traineeId){
        return addWorkoutService.addWorkout(workoutPlanSchedule);
    }
    @GetMapping("/scheduleWorkout/{traineeId}")
    public List<ExerciseDetailsResponse> getExercises(@PathVariable Long traineeId){
        System.out.println("getexerciseDetails");
        return addWorkoutService.getExerciseDetails(traineeId);
    }

    //method to check availabilty
//    @GetMapping("/allTrainingReservations")
//    public List<TrainingReservationsResponse> getAllReservations(){ return }

//    @PostMapping("/addReservation/{traineeId}")
//    public String addReservation(@RequestBody )
}
