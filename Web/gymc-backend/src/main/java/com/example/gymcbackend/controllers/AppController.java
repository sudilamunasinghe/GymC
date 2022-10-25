package com.example.gymcbackend.controllers;

import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AppController {

    @Autowired
    private UserAccountDetailsRepository userAccountDetailsRepository;

    @GetMapping
    public String testMap(){
        return "Hello spring security";
    }

    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }
}
