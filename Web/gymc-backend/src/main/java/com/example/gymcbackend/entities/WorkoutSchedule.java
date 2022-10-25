package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "workoutSchedule")
@Entity
public class WorkoutSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "workoutScheduleID")
    private long id;

    @Column(name = "workout_name")
    private String workoutName;

    @Column(name = "workout_type")
    private String workoutType;

    @Column(name = "status")
    private String status;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "start_date")
    private Date startDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staffId")
    StaffMember staffMember;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workoutPlanID")
    WorkoutPlan workoutPlan;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dietPlanID")
    DietPlan dietPlan;

    public void setId(long id) {
        this.id = id;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public void setDietPlan(DietPlan dietPlan) {
        this.dietPlan = dietPlan;
    }

    public long getId() {
        return id;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public String getWorkoutType() {
        return workoutType;
    }

    public String getStatus() {
        return status;
    }

    public Integer getDuration() {
        return duration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }

    public Trainee getTrainee() {
        return trainee;
    }

    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public DietPlan getDietPlan() {
        return dietPlan;
    }
}
