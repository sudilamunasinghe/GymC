package com.example.gymcbackend.repository.userDao;

import com.example.gymcbackend.entities.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountDetailsRepository extends JpaRepository<UserAccount, Long> {
    UserAccount findByUserName(String userName);

}

