package com.example.gymcbackend.repository.staffMemberDao;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.StaffUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StaffMemberJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public long updateProfile(Profile profile) {
//        System.out.println("sdsdsdsd3");

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String updateUserAccount = "UPDATE user_account " +
                "SET email = :email  WHERE user_id = :userId;";
        String updateStaffMember="UPDATE staff_member " +
                    "SET email = :email, phone_number = :phoneNumber, address = :address  WHERE user_id = :userId;";

        namedParameters.addValue("userId", profile.getUser_id());
        namedParameters.addValue("email", profile.getEmail());
        namedParameters.addValue("phoneNumber", profile.getPhone_number());
        namedParameters.addValue("address", profile.getAddress());

        int tableUserAccount = jdbc.update(updateUserAccount, namedParameters);
        int tableStaffMember = jdbc.update(updateStaffMember, namedParameters);

        return  tableUserAccount+tableStaffMember;
    }

    public List<StaffUsers> findAllStaffMembers() {
        String query ="SELECT CONCAT('S000', u.user_id) AS user_id, CONCAT(s.first_name,' ', s.last_name) AS full_name, s.staff_type," +
//                "IF(u.status=1, \"Active\", \"Inactive\") AS status " +
                "CASE u.is_hold " +
                "WHEN 1 THEN \"Hold\" \n" +
                "ELSE "+
                "CASE u.status \n" +
                "WHEN 1 THEN \"Active\" \n" +
                "END "+
                "END as status " +
                "FROM staff_member as s " +
                "INNER JOIN user_account as u ON s.user_id = u.user_id AND u.status=1";

        List<StaffUsers> staffUsersList = jdbc.query(query, new BeanPropertyRowMapper<StaffUsers>(StaffUsers.class));
        return staffUsersList;
    }

//    public Long getUserIdOfStaffUser(Long staffUserID) {
//
//        String sql = "SELECT user_id from staff_member where staff_id = ?";
//
//        Long userId = jdbcTemplate.queryForObject(sql, new Object[] { staffUserID }, Long.class);
//
//        return userId;
//    }

    public Long getUserIdOfTrainee(Long traineeID) {

        String sql = "SELECT user_id from trainee where trainee_id = ?";

        Long userId = jdbcTemplate.queryForObject(sql, new Object[] { traineeID }, Long.class);

        return userId;
    }

    public long changeUserDeleteStatus(Long userID) {

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

    public long changeUserHoldActiveStatus(Long userID, Integer sts) {

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
