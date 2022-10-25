package com.example.gymcbackend.entities;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

//@Table(name = "trainingDate")
@Entity
public class TrainingDate {

    @EmbeddedId
    WorkoutPlanExerciseKey id;

    @Column(name = "training_date")
    private Date trainingDate;


    @ManyToOne
    @MapsId("workoutPlanId")
    @JoinColumn(name = "workout_planid")
    WorkoutPlan workoutPlan;


    @ManyToOne
    @MapsId("exerciseId")
    @JoinColumn(name = "exercise_id")
    Exercise exercise;




    @Column(name = "no_of_repetions")
    private Integer noOfRepetitions;

    @Column(name="start_time")
    private Time startTime;



    @Column(name="end_time")
    private Time endTime;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "workoutPlanID")
//    WorkoutPlan workoutPlan;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "exerciseID")
//    Exercise exercise;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    public void setTrainingDate(Date trainingDate) {
        this.trainingDate = trainingDate;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public Date getTrainingDate() {
        return trainingDate;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public Trainee getTrainee() {
        return trainee;
    }

    public Integer getNoOfRepetitions() {
        return noOfRepetitions;
    }

    public void setNoOfRepetitions(Integer noOfRepetitions) {
        this.noOfRepetitions = noOfRepetitions;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }
}
