package com.example.gymcbackend.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class WorkoutPlanExerciseKey implements Serializable {
    @Column(name ="workoutPlanID")
    Long workoutPlanId;

    @Column(name ="exerciseId")
    Long exerciseId;

    public Long getWorkoutPlanId() {
        return workoutPlanId;
    }

    public void setWorkoutPlanId(Long workoutPlanId) {
        this.workoutPlanId = workoutPlanId;
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }


}
