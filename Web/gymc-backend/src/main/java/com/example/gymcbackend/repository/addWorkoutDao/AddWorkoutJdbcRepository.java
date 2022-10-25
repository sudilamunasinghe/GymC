package com.example.gymcbackend.repository.addWorkoutDao;

import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class AddWorkoutJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    public String addWorkout(WorkoutPlanSchedule workoutPlanSchedule) {


        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query1 = "INSERT INTO workout_plan " +
                "(height,weight,biceps,chest,hips,thighs,forearms) " +
                "values (:height, :weight, :biceps,:chest, :hips,:thighs,:forearms )";

        namedParameters.addValue("height", workoutPlanSchedule.getHeight());
        namedParameters.addValue("weight", workoutPlanSchedule.getWeight());
        namedParameters.addValue("biceps", workoutPlanSchedule.getBiceps());
        namedParameters.addValue("hips", workoutPlanSchedule.getHips());
        namedParameters.addValue("thighs", workoutPlanSchedule.getThighs());
        namedParameters.addValue("forearms", workoutPlanSchedule.getForearms());
        namedParameters.addValue("chest", workoutPlanSchedule.getChest());




        int rowsAffected1 = jdbc.update(query1 , namedParameters);
        if(rowsAffected1==1){


            return "added";
        };
            return "failed";
//        List<TraineeAddWorkoutDetailsResponse> traineeAddWorkout = jdbc.query(query, new BeanPropertyRowMapper<TraineeAddWorkoutDetailsResponse>(TraineeAddWorkoutDetailsResponse.class));
//
    }

}
