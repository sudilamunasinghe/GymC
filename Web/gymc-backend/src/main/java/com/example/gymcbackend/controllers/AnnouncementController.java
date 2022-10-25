
package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AnnouncementDTO;
import com.example.gymcbackend.services.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping(value = "api/v1/announcement")
//@CrossOrigin

@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AnnouncementController {
    @Autowired
    public AnnouncementService announcementService;
    @GetMapping("/getAnnouncements")
    public List<AnnouncementDTO> getAnnouncement(){
        return announcementService.getAllAnnouncements();
    }
    @PostMapping("/saveAnnouncement")
    public AnnouncementDTO saveAnnouncement(@RequestBody AnnouncementDTO announcementDTO){
        return announcementService.saveAnnouncement(announcementDTO);
    }
    @PutMapping("/updateAnnouncement")
    public String updateAnnouncement(){
        return "update announcement";
    }
    @DeleteMapping("/deleteAnnouncement")
    public String deleteAnnouncement(@RequestBody AnnouncementDTO announcementDTO){
        return announcementService.deleteAnnouncement(announcementDTO);
    }

}



//package com.example.gymcbackend.controllers;
//
//import com.example.gymcbackend.entities.Trainee;
//import com.example.gymcbackend.entities.UserAccount;
//import com.example.gymcbackend.services.SignUpService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:3000")
//public class AnnouncementController {
//
//
//    @Autowired
//    SignUpService signUpService;
//
//
//
//    @PostMapping("/signUp")
//    public String signUp(@RequestBody Trainee trainee){
//        System.out.println("signup");
//        return signUpService.signUp(trainee);
//    }
//
//}
