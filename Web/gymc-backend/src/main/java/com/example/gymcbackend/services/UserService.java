package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.UserAccount;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public UserAccount getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return (UserAccount) auth.getPrincipal();
    }
}
