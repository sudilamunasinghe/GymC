package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Table(name = "checkInCheckOut")
@Entity
public class CheckInCheckOut {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CheckInCheckOutID")
    private long CheckInCheckOutID;

    @Column(name = "date")
    private Date date;

    @Column(name = "start_time")
    private Time startTime;


    @Column(name = "end_time")
    private Time endTime;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;


    public void setDate(Date date) {
        this.date = date;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public void setCheckInCheckOutID(long checkInCheckOutID) {
        CheckInCheckOutID = checkInCheckOutID;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public Date getDate() {
        return date;
    }

    public Time getStartTime() {
        return startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public long getCheckInCheckOutID() {
        return CheckInCheckOutID;
    }

    public Trainee getTrainee() {
        return trainee;
    }
}
