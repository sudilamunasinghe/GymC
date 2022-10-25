package com.example.gymcbackend.repository.trainerDao;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TrainerTableData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TrainerJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<TrainerTableData> findAllTrainers() {
        String query ="SELECT CONCAT('S000', u.user_id) AS trainer_id, CONCAT(s.first_name,' ', s.last_name) AS full_name,s.phone_number AS phone, s.address AS address," +
//                "IF(u.status=1, \"Active\", \"Inactive\") AS status " +
                "CASE u.is_hold " +
                "WHEN 1 THEN \"Hold\" \n" +
                "ELSE "+
                "CASE u.status \n" +
                "WHEN 1 THEN \"Active\" \n" +
                "END "+
                "END as status " +
                "FROM staff_member as s " +
                "INNER JOIN user_account as u ON s.user_id = u.user_id AND u.status=1 AND u.user_level='Trainer' ";

        List<TrainerTableData> TrainerList = jdbc.query(query, new BeanPropertyRowMapper<TrainerTableData>(TrainerTableData.class));
        return TrainerList;
    }

    public long changeTrainerDeleteStatus(Long userID) {

        Integer x = 0;
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user_account " +
                "SET status = :status WHERE user_id = :user_id;";

        namedParameters.addValue("status", x);
        namedParameters.addValue("user_id", userID);

        int rowAffected = jdbc.update(update, namedParameters);

        return rowAffected;
    }

    public long changeTrainerHoldActiveStatus(Long userID, Integer sts) {

        Integer x = 1;
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user_account " +
                "SET is_hold = :status WHERE user_id = :user_id;";

        namedParameters.addValue("status", sts);
        namedParameters.addValue("user_id", userID);

        int rowAffected = jdbc.update(update, namedParameters);

        return rowAffected;
    }

}
