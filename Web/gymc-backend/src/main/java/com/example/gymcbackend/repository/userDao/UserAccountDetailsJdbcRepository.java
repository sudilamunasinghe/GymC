package com.example.gymcbackend.repository.userDao;

import com.example.gymcbackend.dto.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserAccountDetailsJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int checkEmailExists(String email) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("email", email);

        String sql = "SELECT count(*) from user_account where email = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { email }, Integer.class);

        return count;
    }

    public int checkNICExists(String nic) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("nic", nic);

        String sql = "SELECT count(*) from trainee where nic = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { nic }, Integer.class);

        return count;
    }

    public int checkNICExistsInStaffMember(String nic) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("nic", nic);

        String sql = "SELECT count(*) from staff_member where nic = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { nic }, Integer.class);

        return count;
    }

    public Long getUserIdByUsername(String userName) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("user_name", userName);

        String sql = "SELECT user_id from user_account where user_name = ?";

        Long userId = jdbcTemplate.queryForObject(sql, new Object[] { userName }, Long.class);

        return userId;

    }

    public Profile profileStaffMember(long userId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        System.out.println(userId);

//        namedParameters.addValue("user_id", userId);

        String query = "select  u.user_id, u.user_name, u.user_level, s.first_name,s.last_name,s.phone_number,s.email,s.address,s.nic,s.gender,s.dob " +
                "from user_account as u " +
                "INNER JOIN staff_member s ON u.user_id= s.user_id and u.user_id=?";

        System.out.println(query);

//        Profile profile = jdbcTemplate.queryForObject(query,  Profile.class);
//        jdbcTemplate.queryForObject(query, new Object[] { userId }, String.class);
        Profile profile = (Profile) jdbcTemplate.queryForObject(query, new Object[] {userId}, new BeanPropertyRowMapper(Profile.class));



        System.out.println("awajdbc3");
        return profile;
    }

    public long changePassword(String newPassword,String userName) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user_account " +
                "SET password = :newPassword WHERE user_name = :username;";

        namedParameters.addValue("newPassword", newPassword);
        namedParameters.addValue("username", userName);

        System.out.println("pwcjdbc1");
        int rowAffected = jdbc.update(update, namedParameters);

        return rowAffected;
    }

}
