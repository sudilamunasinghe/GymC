package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserAccount user=userAccountDetailsRepository.findByUserName(username);

        if(null==user) {
            throw new UsernameNotFoundException("User Not Found with userName "+username);
        }
//        System.out.println(user.getUserLevel());
        return user;
    }


    public Profile getUserByUsername(String userName) {

        System.out.println("awaservice");

        Long userId = userAccountDetailsJdbcRepository.getUserIdByUsername(userName);

        System.out.println(userId);
        return userAccountDetailsJdbcRepository.profileStaffMember(userId);

    }

}
