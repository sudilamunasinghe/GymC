package com.example.gymcbackend.entities;


import javax.persistence.*;

@Table(name = "dietPlan")
@Entity
public class DietPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dietPlanID")
    private long id;

    @Column(name = "meal_Type")
    private String mealType;

    @Column(name = "proteins")
    private Double proteins;

    @Column(name = "carbohydrate")
    private Double carbohydrate;

    @Column(name = "fats")
    private Double fats;

    public void setId(long id) {
        this.id = id;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    public void setProteins(Double proteins) {
        this.proteins = proteins;
    }

    public void setCarbohydrate(Double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public void setFats(Double fats) {
        this.fats = fats;
    }

    public long getId() {
        return id;
    }

    public String getMealType() {
        return mealType;
    }

    public Double getProteins() {
        return proteins;
    }

    public Double getCarbohydrate() {
        return carbohydrate;
    }

    public Double getFats() {
        return fats;
    }
}
