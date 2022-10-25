package com.example.gymcbackend.repository.announcementDao;

import com.example.gymcbackend.dto.AnnouncementDTO;
import com.example.gymcbackend.dto.StaffUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class AnnouncementJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<AnnouncementDTO> findAllAnnouncements() {
        String query ="SELECT a.announcementid, a.date, a.topic, a.description FROM announcement as a";

        List<AnnouncementDTO> announcementList = jdbc.query(query, new BeanPropertyRowMapper<AnnouncementDTO>(AnnouncementDTO.class));
        return announcementList;
    }

}
