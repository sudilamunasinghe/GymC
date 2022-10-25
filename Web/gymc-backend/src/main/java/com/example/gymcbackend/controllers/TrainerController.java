package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TrainerTableData;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository;
import com.example.gymcbackend.services.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainerController {

    @Autowired
    TrainerService trainerService;

    // GET DATA FOR TRAINER TABLE
    @GetMapping("/trainers")
    public List<TrainerTableData> getAllTrainerTableData(){
        return trainerService.getAllTrainerTableData();
    }

    // DELETE TRAINER
    @PutMapping("/deleteTrainer/{trainerID}")
    public long deleteStaffUser(@PathVariable String trainerID){
        int sts= 0;
        return trainerService.changeTrainerStatus(trainerID,sts);
    }

    // HOLD TRAINER
    @PutMapping("/holdTrainer/{trainerID}")
    public long holdTrainer(@PathVariable String trainerID){
        int sts= 2;
        return trainerService.changeTrainerStatus(trainerID,sts);
    }

    // ACTIVE TRAINER
    @PutMapping("/activeTrainer/{trainerID}")
    public long activeTrainer(@PathVariable String trainerID){
        int sts= 1;
        return trainerService.changeTrainerStatus(trainerID,sts);
    }
}
