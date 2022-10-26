
package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AnnouncementDTO;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.services.AnnouncementService;
import com.example.gymcbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    public UserService userService;

    @GetMapping("/getAnnouncements")
    public List<AnnouncementDTO> getAnnouncement() {
        return announcementService.getAllAnnouncements();
    }

    @PostMapping("/saveAnnouncement")
    public ResponseEntity<?> saveAnnouncement(@RequestBody AnnouncementDTO announcementDTO) {
        if (userService.getUser().getUserLevel().equals("Admin")) {
            return ResponseEntity.status(HttpStatus.OK).body(announcementService.saveAnnouncement(announcementDTO));
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized");
    }

    @PutMapping("/updateAnnouncement")
    public ResponseEntity<?> updateAnnouncement(@RequestBody AnnouncementDTO announcementDTO) {
        UserAccount user = userService.getUser();
        if (user.getUserLevel().equals("Admin") || user.getUserLevel().equals("Receptionist")) {
            announcementService.updateAnnouncement(announcementDTO);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("");
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized");
    }

    @DeleteMapping("/deleteAnnouncement")
    public ResponseEntity<?> deleteAnnouncement(@RequestBody AnnouncementDTO announcementDTO) {
        UserAccount user = userService.getUser();
        if (user.getUserLevel().equals("Admin") || user.getUserLevel().equals("Receptionist")) {
            announcementService.deleteAnnouncement(announcementDTO);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("");
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized");
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
