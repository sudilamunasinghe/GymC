package com.example.gymcbackend.controllers;

import com.example.gymcbackend.config.JWTTokenHelper;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.dto.LoginResponse;
import com.example.gymcbackend.dto.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import com.example.gymcbackend.dto.AuthenticationRequet;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JWTTokenHelper jWTTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequet authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {

        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getUserName(), authenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserAccount user=(UserAccount) authentication.getPrincipal();
        String jwtToken=jWTTokenHelper.generateToken(user.getUsername());

        LoginResponse response=new LoginResponse();
        response.setToken(jwtToken);

        //200 OK response
        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        //call  service in here
        UserAccount userObj=(UserAccount) userDetailsService.loadUserByUsername(user.getName());
        //userDetailsService call to repo
        UserInfo userInfo=new UserInfo();
//        System.out.println("hi");
        userInfo.setUserName(userObj.getUserName());
        userInfo.setUserLevel(userObj.getUserLevel());

        return ResponseEntity.ok(userInfo);
    }
}
