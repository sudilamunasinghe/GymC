package com.example.gymcbackend.controllers;

import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SignUpController {

    @Autowired
    SignUpService signUpService;


    @PostMapping("/signUp")
    public String signUp(@RequestBody Trainee trainee){
        System.out.println("signup");
        return signUpService.signUp(trainee);
    }

}
