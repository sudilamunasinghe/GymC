package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TraineeInfo;
import com.example.gymcbackend.repository.traineeDao.TraineeJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraineeService {

    @Autowired
    private TraineeJdbcRepository traineeJdbcRepository;

    public List<TraineeInfo> getAllTrainees() {
        return traineeJdbcRepository.findAllTrainees();
    }

}
