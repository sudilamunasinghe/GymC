package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "paymentPlan")
@Entity
public class PaymentPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentPlanID")
    private long id;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "type")
    private String type;

    @Column(name = "next_amount")
    private Double nextAmount;

    @Column(name = "affected_date")
    private Date affectedDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traineeId")
    Trainee trainee;

    public void setId(long id) {
        this.id = id;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setNextAmount(Double nextAmount) {
        this.nextAmount = nextAmount;
    }

    public void setAffectedDate(Date affectedDate) {
        this.affectedDate = affectedDate;
    }

    public void setTrainee(Trainee trainee) {
        this.trainee = trainee;
    }

    public long getId() {
        return id;
    }

    public Double getAmount() {
        return amount;
    }

    public String getType() {
        return type;
    }

    public Double getNextAmount() {
        return nextAmount;
    }

    public Date getAffectedDate() {
        return affectedDate;
    }

    public Trainee getTrainee() {
        return trainee;
    }
}
