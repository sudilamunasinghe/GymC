package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TrainerTableData;
import com.example.gymcbackend.repository.trainerDao.TrainerJdbcRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {

    @Autowired
    TrainerJdbcRepository trainerJdbcRepository;

    public List<TrainerTableData> getAllTrainerTableData() {
        return trainerJdbcRepository.findAllTrainers();
    }

    public long changeTrainerStatus(String staffUserID, Integer sts){

        String staffID = staffUserID.substring(4);
        System.out.println("trainerservice");

        Long result = Long.parseLong(String.valueOf(staffID));
        System.out.println("trainerservic2");

//        long userID = staffMemberJdbcRepository.getUserIdOfStaffUser(result);

        if (sts == 0){
            return trainerJdbcRepository.changeTrainerDeleteStatus(result);
        } else if (sts==1) {
            System.out.println("AWA");
            return trainerJdbcRepository.changeTrainerHoldActiveStatus(result, 0);
        } else {
            return trainerJdbcRepository.changeTrainerHoldActiveStatus(result, 1);
        }

    }
}
