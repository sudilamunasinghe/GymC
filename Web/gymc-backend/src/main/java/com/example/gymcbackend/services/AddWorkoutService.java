package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.TraineeAddWorkoutDetailsResponse;
import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseJdbcRepository;
import com.example.gymcbackend.repository.TraineeViewScheduleDao.TraineeViewScheduleJdbcRepository;
import com.example.gymcbackend.repository.addWorkoutDao.AddWorkoutJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddWorkoutService {


    @Autowired
    AddWorkoutJdbcRepository traineeAddWorkoutJdbcRepository;

    @Autowired ExerciseJdbcRepository exerciseJdbcRepository;

    public String addWorkout(WorkoutPlanSchedule workoutPlanSchedule) {
        // To Do get weight class from weight
        String success = traineeAddWorkoutJdbcRepository.addWorkout(workoutPlanSchedule);
//        return traineeaddWorkout.toString();

//        WorkoutSchedule workoutSchedule=new WorkoutSchedule();

//        workoutPlanSchedule.setDuration(workoutPlanSchedule.getDuration());
//        workoutPlanSchedule.setStartDate(workoutPlanSchedule.getStartDate());
//        workoutPlanSchedule.setWorkoutName(workoutPlanSchedule.getWorkoutName());
        workoutPlanSchedule.setWorkoutType(workoutPlanSchedule.getWorkoutType());
        workoutPlanSchedule.setWorkoutType(workoutPlanSchedule.getWorkoutType());
        workoutPlanSchedule.setWorkoutType(workoutPlanSchedule.getWorkoutType());

return success;

    }
    public List<ExerciseDetailsResponse> getExerciseDetails(Long traineeId) {
        System.out.println("schedule service exercise details response");
        List<ExerciseDetailsResponse> exerciseDetails = exerciseJdbcRepository.getExerciseDetails(traineeId);
        return exerciseDetails;

    }

}
